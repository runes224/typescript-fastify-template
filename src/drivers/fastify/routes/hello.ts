import { FastifyPluginAsync } from 'fastify';
import { hello } from '../../../usecases/hello/index';

const scrapingRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/hello', async function () {
    return Promise.resolve(hello());
  });
  return Promise.resolve();
};

export default scrapingRoute;
