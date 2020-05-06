const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(5001, () => console.log(`server is running on port 5000`));
