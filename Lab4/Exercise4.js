const fibonacciModule = (function(){
    let data = {}
    return {
        data,
        calcFibonacci(n){
            if (data[n]) {
                return data[n];
            }
            else {
                if (n <= 1) {
                    return n;
                }
                data[n] = this.calcFibonacci(n - 1) + this.calcFibonacci(n - 2);
                return data[n];
            }
        }
    }
})()

function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.time("Memoized version calculation: ")
console.log(fibonacciModule.calcFibonacci(45));
console.timeEnd("Memoized version calculation: ")
console.log(fibonacciModule.data);
console.time("Not Memoized version calculation: ")
console.log(fibonacci2(45));
console.timeEnd("Not Memoized version calculation: ")