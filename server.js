const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

// registering graphql with express
app.use('/graphql', expressGraphQL({
  graphiql: true  // only intended for dev env
}))

app.listen(4000, () => {
  console.log('listening')
})