import db from '../../database/database';

async function getUser(id: string) {
  console.log('id', id);
  const user = await db.User.findOne({ _id: id });

  return user;
}

export default getUser;
