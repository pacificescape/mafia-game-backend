# Mafia-Game Backend

Backend for [Mafia-Game](https://github.com/ReSenpai/mafia-game)

## Tech Stack:

- Koa(Node.js)
- GraphQL
- MongoDB

## GraphQL:

### url: localhost:PORT/graphql

### Query example

```
{
  user(id: "USER_ID") {
    name
  }
}
```

Result:

```
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