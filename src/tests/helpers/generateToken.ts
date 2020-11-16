import jwt from 'jsonwebtoken';

function generateToken(login: string, options = { expiresIn: '1d' }) {
  return jwt.sign({ id: login }, process.env.SECRET as string, options);
}

export default generateToken;
