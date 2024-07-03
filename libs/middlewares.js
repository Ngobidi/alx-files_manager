import express from 'express';

/**
 * insert middlewares to the given express application.
 * @para {express.Express} api The express application.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
