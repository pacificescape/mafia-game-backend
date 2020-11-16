import UserSchema from './user.model';
import RefreshToken from './refresh.model';

const collections = {
  User: UserSchema,
  RefreshToken,
} as any;

const getCollections = () => collections;

export { getCollections };
