import { v4 as uuid } from 'uuid';

const generateRefToken = (): string => uuid();

export default generateRefToken;
