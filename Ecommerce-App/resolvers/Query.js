exports.Query = {
    hello: (parent, args, context) => 'Hey Nasief!',
    products: (parent, args, {products}) => products,
    product: (parent, {id}, {products}) => {
        const product = products.find(product => product.id === id)
        if (!products) return null
        return product
    },
    categories: (parent, args, {categories}) => categories,
    category: (parent, {id}, {categories}) => {
        return categories.find((category) => category.id === id)
    }
}