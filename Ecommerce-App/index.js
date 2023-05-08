const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
        numberOfAnimals: Int
        price: Float
        isAvailable: Boolean
        bigArray: [String]
    }
`

const resolvers = {
    Query:{
        hello: () => {
            return 'Hey Nasief!'
        },
        numberOfAnimals: () => {
            return 69
        },
        price: () => {
            return 420.69
        },
        isAvailable: () => {
            return false
        },
        bigArray: () => {
            return ['Nasief','Riyaaz','Ahmed','Ammarah']
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