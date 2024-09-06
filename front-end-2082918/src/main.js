
// objetos relacionados y funciones 
const game = {

    id: 1,
    name: 'god of war ',
    dev: 'Santa Monica Studios',
    console: 'playstation consoles',
    brand: {
        id: 1,
        name: 'Sony',
        location: 'USA',
    },
    cost: 800,
    yearRelease: 2018,
    status: 'available',
    stock: function () {
        return `this product is currently: ${this.status}`
    } 

}

