const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

// registering graphql with express
app.use('/graphql', expressGraphQL({
  graphiql: true,  // only intended for dev env
  schema
}))

app.listen(4000, () => {
  console.log('listening')
})