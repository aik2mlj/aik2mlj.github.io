export const LANES = ['research', 'sound', 'stage', 'screen', 'image', 'code', 'words'] as const;
export type Lane = (typeof LANES)[number];

export const COLLECTIONS = ['portfolio', 'projects', 'publications', 'talks', 'teaching', 'literature'] as const;
export type CollectionName = (typeof COLLECTIONS)[number];
