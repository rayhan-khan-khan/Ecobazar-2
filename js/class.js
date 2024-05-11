// const products = [
//     {id:1, name:'lenovo', price:78000},
//     {id:2, name:'dell', price:45000},
//     {id:2, name:'hp', price:40000},
//     {id:3, name:'mac', price:150000},
// ]


class Products {
    country = "Bangladesh";
    constructor(name){
        this.name = name;
    }
    speck(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Products('le le mama ki lekhe');
// console.log(lenovo);
// lenovo.speck('oba kita kau')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}
const tapan = new Teacher('Shajan', 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid', 'English')
console.log(rashid);