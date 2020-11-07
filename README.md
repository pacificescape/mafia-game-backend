# Mafia-Game Backend

[Example Article](https://www.strilliant.com/2019/01/27/how-to-setup-a-powerful-api-with-graphql-koa-and-mongodb/)

[GraphQL URL](http://localhost:PORT/graphql)

Query example

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