const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
        numberOfAnimals: Int
    }
`

const resolvers = {
    Query:{
        hello: () => {
            return 'Hey Nasief!'
        },
        numberOfAnimals: () => {
            return 69
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log('Server is ready at ' + url)
});