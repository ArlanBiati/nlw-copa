import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function gameRoutes(fastify: FastifyInstance) {
  await fastify.get('/games/count', async () => {
    const count = await prisma.pool.count();

    return { count };
  });
}
