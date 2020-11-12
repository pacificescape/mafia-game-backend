import { UserSchema } from './user.model'

const collections = {
  User: UserSchema
} as any

const getCollections = () => collections

export { getCollections }
