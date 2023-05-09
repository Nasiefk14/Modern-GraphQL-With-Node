const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { products, categories } = require('./db');
const { Query } = require('./resolvers/query');
const { Category } = require('./resolvers/category');
const { Product } = require('./resolvers/product')


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    }
});

server.listen().then(({ url }) => {
    console.log('Server is ready at ' + url)
});