import { scrapingReqBodyType } from '../../entities/scraping';
import { fetchHtml } from '../../drivers/site/fetch-html';
import { decode } from 'iconv-lite';
import cheerio from 'cheerio';
import { set } from 'json-pointer';
import { depend } from 'velona';

export const scrape = depend(
  { fetchHtml },
  async (
    { fetchHtml },
    body: scrapingReqBodyType
  ): Promise<Record<string, unknown>> => {
    const obj = {};

    await Promise.all(
      body.sites.map(async (site) => {
        const url = site.url;
        const response = await fetchHtml(url);
        const html = decode(
          Buffer.from(await response.arrayBuffer()),
          site.charset
        );
        const $ = cheerio.load(html);

        site.elements.map((element) => {
          const path = element.outputPath;
          const value = $(site.baseSelector + element.selector).text();
          set(obj, path, value);
        });
      })
    );
    return obj;
  }
);
