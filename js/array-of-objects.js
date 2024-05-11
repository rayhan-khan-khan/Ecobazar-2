const products = [
    {id:1, name:'lenovo', price:78000},
    {id:2, name:'dell', price:45000},
    {id:2, name:'hp', price:40000},
    {id:3, name:'mac', price:150000},
]

const names = products.map(nam => nam.name)
// console.log(names);
const price = products.map(pri => pri.price);
// console.log(price);

// products.forEach(p => console.log(p.id))

const expensive = products.filter(hei => hei.price > 50000);
// console.log(expensive);

const affordable = products.find(p => p.price < 50000);
console.log(affordable);

const totalPrice = products.reduce((previous, current) => previous + current.price, 0);
console.log(totalPrice);