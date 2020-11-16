import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import db from '../../database/database';

async function issueTokenPair(
  id: string,
): Promise<{
  token: string;
  refreshToken: string;
}> {
  const refreshToken: string = uuid();
  await db
    .RefreshToken({
      token: refreshToken,
      user: id,
    })
    .save();

  return {
    token: jwt.sign({ id }, process.env.SECRET as string, { expiresIn: '1d' }),
    refreshToken,
  };
}

export default issueTokenPair;
