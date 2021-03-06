import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';

import { FastifyPluginAsync } from 'fastify';
import { join } from 'path';

export type AppOptions = Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'drivers/fastify/routes'),
    options: opts,
  });

  return Promise.resolve();
};

export default app;
export { app };
