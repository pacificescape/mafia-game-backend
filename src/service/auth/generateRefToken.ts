import { v4 as uuid } from 'uuid';

function generateRefToken() {
  return uuid();
}

export default generateRefToken;
