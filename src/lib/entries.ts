import { getCollection, type CollectionEntry } from 'astro:content';
import { COLLECTIONS, type CollectionName, type Lane } from './lanes';

export type Entry = CollectionEntry<CollectionName>;

export interface Item {
  collection: CollectionName;
  entry: Entry;
  title: string;
  date: Date;
  /** Primary lane first. */
  lanes: Lane[];
  /** Short descriptor shown next to the title: medium, venue or kind of writing. */
  label: string;
  url: string;
  /** False for entries that are metadata only (no body), which get no detail page. */
  hasPage: boolean;
}

const INDEX: Record<CollectionName, string> = {
  portfolio: '/portfolio/',
  projects: '/projects/',
  publications: '/research/#publications',
  talks: '/research/#talks',
  teaching: '/research/#teaching',
  literature: '/literature/',
};

const FALLBACK_LABEL: Record<CollectionName, string> = {
  portfolio: 'Work',
  projects: 'Project',
  publications: 'Publication',
  talks: 'Talk',
  teaching: 'Teaching',
  literature: 'Writing',
};

export const indexUrl = (collection: CollectionName) => INDEX[collection];

function toItem(collection: CollectionName, entry: Entry): Item {
  const hasPage = Boolean(entry.body?.trim());
  const { title, date, lane, medium, venue, links } = entry.data;
  return {
    collection,
    entry,
    title,
    date,
    lanes: lane,
    label: collection === 'publications' ? (venue ?? FALLBACK_LABEL[collection]) : (medium ?? FALLBACK_LABEL[collection]),
    url: hasPage ? `/${collection}/${entry.id}/` : (links[0]?.url ?? INDEX[collection]),
    hasPage,
  };
}

export async function getItems(collection: CollectionName): Promise<Item[]> {
  const entries = await getCollection(collection);
  return entries.map((entry) => toItem(collection, entry)).sort((a, b) => +b.date - +a.date);
}

/** Every entry on the site, newest first. */
export async function getAllItems(): Promise<Item[]> {
  const all = await Promise.all(COLLECTIONS.map(getItems));
  return all.flat().sort((a, b) => +b.date - +a.date);
}

export const monthYear = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** `**name**` in an author string marks the site owner. */
export const authorsHtml = (authors: string) =>
  authors.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

/** First prose line of a markdown body, for list teasers. */
export function firstLine(body: string | undefined): string {
  for (const raw of (body ?? '').split('\n')) {
    const line = raw.trim();
    if (!line || /^(<|#|---|!\[)/.test(line)) continue;
    return line.replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  }
  return '';
}
