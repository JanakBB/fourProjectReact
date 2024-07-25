const generateTicket = (n) => {
    // console.log(n)
    let arr = new Array(n);
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    // console.log(arr)
    return arr;
}

generateTicket(3)

const sum = (arr) => {
    return arr.reduce((sum, curr) => sum + curr, 0);
}

export {generateTicket, sum};