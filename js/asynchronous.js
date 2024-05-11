const fun1 = () =>{
    console.log('fun1');
}
const fun2 = () =>{
    console.log('fun2');
}
const fun3 = () =>{
    setTimeout(fun2, 2000)
}

fun1()
fun2()
fun3()