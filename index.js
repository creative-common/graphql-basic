const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schemas/schema');

let links = [{
    id: 'link-0',
    url: 'sanjeet.me',
    description: 'Data from GraphQL'
  }]
  
const resolvers = {
    Query: {
        info: () => {
            return 'This is first api result using GraphQL'
        },
        feed: () => links,
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers
})

server.listen(8080).then(({url}) => {
    console.log(`Server is running on ${url}`)
})