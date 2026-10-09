export const LANES = ['research', 'sound', 'stage', 'screen', 'image', 'code', 'words'] as const;
export type Lane = (typeof LANES)[number];

/** Drawn covers, for entries with nothing to photograph. See components/Tile.astro. */
export const TILES = ['compiler', 'interpreter', 'bptree'] as const;
export type TileKind = (typeof TILES)[number];

export const COLLECTIONS = ['portfolio', 'projects', 'publications', 'talks', 'teaching', 'literature'] as const;
export type CollectionName = (typeof COLLECTIONS)[number];
