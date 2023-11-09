const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'phone',
        img: 'https://s1.eestatic.com/2020/11/11/omicrono/hardware/hardware_535208624_164897216_1706x960.jpg',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    },
    {id: '2', name: 'Samsung S22', price: 900, category: 'celular', img: 'https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?fit=382%2C255&p=1'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}