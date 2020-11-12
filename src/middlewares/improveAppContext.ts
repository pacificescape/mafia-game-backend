import db from '../database/database';

const addDb = () => async (ctx: any, next: any) => {
  ctx.db = db
  await next()
}

export { addDb }
