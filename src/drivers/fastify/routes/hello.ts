import { helloSchema, helloType } from '../../../types/hello';

import { FastifyPluginAsync } from 'fastify';
import { hello } from '../../../usecases/hello/index';

const scrapingRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get<{
    Body: null;
    Response: helloType;
  }>(
    '/hello',
    {
      schema: {
        description: 'get hello',
        tags: ['hello'],
        response: {
          200: helloSchema,
        },
      },
    },
    async function () {
      return Promise.resolve(hello());
    }
  );
  return Promise.resolve();
};

export default scrapingRoute;
