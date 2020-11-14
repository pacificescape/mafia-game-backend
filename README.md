# Mafia-Game Backend

Backend for [Mafia-Game](https://github.com/ReSenpai/mafia-game)

## Installation
```
$ yarn
```

## Running the app
```
# start build
$ yarn start

# watch mode
$ yarn start:dev

# build
$ yarn build

# format using Prettier
$ yarn format


# lint using ESLint
$ yarn lint
```

## Tech Stack:

- Koa(Node.js)
- GraphQL
- MongoDB

## GraphQL:

### url: localhost:PORT/graphql

### Query example

```js
{
  user(id: "USER_ID") {
    name
  }
}
```

Result:

```json
{
  "data": {
    "user": {
      "name": "test_user"
    }
  }
}
```

## Examples

[How to setup a powerful API with GraphQL, Koa and MongoDB](https://www.strilliant.com/2019/01/27/how-to-setup-a-powerful-api-with-graphql-koa-and-mongodb/)

[Apollo docs](https://www.apollographql.com/docs/apollo-server/v1/servers/koa/)

[koa-graphql repo](https://github.com/graphql-community/koa-graphql#readme)

[Graphql-server](https://hellocode.dev/graphql-server)