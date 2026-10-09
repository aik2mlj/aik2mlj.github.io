import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllItems } from '../lib/entries';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const items = await getAllItems();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: items
      .filter((item) => item.hasPage)
      .map((item) => ({
        title: item.title,
        pubDate: item.date,
        description: item.entry.data.summary ?? item.label,
        link: item.url,
      })),
  });
}
