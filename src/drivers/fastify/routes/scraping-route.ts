import {
  scrapingReqBody,
  scrapingReqBodyType,
} from '../../../entities/scraping';
import { scrape } from '../../../usecases/scraping/index';
import { FastifyPluginAsync } from 'fastify';

const scrapingRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<{
    Body: scrapingReqBodyType;
    Response: Record<string, unknown>;
  }>(
    '/scraping/result',
    {
      schema: {
        body: scrapingReqBody,
        response: {
          200: {
            type: 'object',
            additionalProperties: {
              anyOf: [{ type: 'string' }, { type: 'number' }],
            },
          },
        },
      },
    },
    async function (request) {
      return await scrape(request.body);
    }
  );
  return Promise.resolve();
};

export default scrapingRoute;
