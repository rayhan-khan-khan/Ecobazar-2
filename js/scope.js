function add(a,b) {
    const total = a + b;
    console.log(a,b);
    if (b > 5) {
        const sum = 25 + a + b;
        console.log(sum);
    }
    return total;
}

add(5, 7);