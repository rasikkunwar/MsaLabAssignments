const isPrime = num => new Promise(function (resolve,reject) {
    setTimeout(function () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return reject({prime:false});
        resolve({prime:num > 1});
    }, 500);
});

const isPrimeSync = async(num) => {
    try{
    let result = await isPrime(num);
    console.log(result);
    }
    catch(e){
        console.log(e.message)
    }
}
console.log('start');
isPrimeSync(7);
console.log('end');