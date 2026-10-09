// A 21-string guzheng, synthesized with Karplus-Strong. No samples.

const D2 = 73.416;
const PENTATONIC = [0, 2, 4, 7, 9]; // D E F# A B
export const STRING_COUNT = 21;

/** Frequency of string `index`, where 0 is the lowest (D2) and 20 the highest (D6). */
const frequency = (index: number) =>
  D2 * 2 ** ((12 * Math.floor(index / 5) + PENTATONIC[index % 5]) / 12);

export class Guzheng {
  private ctx: AudioContext | null = null;
  private out: GainNode | null = null;
  private buffers = new Map<number, AudioBuffer>();

  get enabled() {
    return this.ctx?.state === 'running';
  }

  /** Must be called from a user gesture. */
  async enable() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      const limiter = this.ctx.createDynamicsCompressor();
      this.out = this.ctx.createGain();
      this.out.gain.value = 0.5;
      this.out.connect(limiter).connect(this.ctx.destination);
    }
    await this.ctx.resume();
  }

  async disable() {
    await this.ctx?.suspend();
  }

  /**
   * @param index string to pluck, 0 = lowest
   * @param pan stereo position, -1 to 1
   */
  pluck(index: number, pan = 0, velocity = 0.8) {
    if (!this.ctx || !this.out || !this.enabled) return;
    const source = this.ctx.createBufferSource();
    source.buffer = this.buffer(index);
    const gain = this.ctx.createGain();
    gain.gain.value = velocity;
    const panner = this.ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan));
    source.connect(gain).connect(panner).connect(this.out);
    source.start();
  }

  private buffer(index: number): AudioBuffer {
    const cached = this.buffers.get(index);
    if (cached) return cached;

    const ctx = this.ctx!;
    const rate = ctx.sampleRate;
    const period = Math.round(rate / frequency(index));
    const length = Math.floor(rate * 3);
    const buffer = ctx.createBuffer(1, length, rate);
    const data = buffer.getChannelData(0);

    // Excitation: one period of low-passed noise, i.e. a soft fingertip rather than a pick.
    let smooth = 0;
    let mean = 0;
    for (let n = 0; n < period; n++) {
      smooth += 0.45 * (Math.random() * 2 - 1 - smooth);
      data[n] = smooth;
      mean += smooth / period;
    }
    for (let n = 0; n < period; n++) data[n] -= mean;

    // The string: a delay line fed back through a two-point average.
    for (let n = period; n < length; n++) {
      data[n] = 0.998 * 0.5 * (data[n - period] + data[n - period + 1]);
    }

    let peak = 0;
    for (let n = 0; n < length; n++) peak = Math.max(peak, Math.abs(data[n]));
    const fade = Math.floor(rate * 0.05);
    for (let n = 0; n < length; n++) {
      data[n] *= (0.9 / peak) * Math.min(1, (length - n) / fade);
    }

    this.buffers.set(index, buffer);
    return buffer;
  }
}
