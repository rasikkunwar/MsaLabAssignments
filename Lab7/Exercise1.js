const isPrime = num => new Promise(function (resolve,reject) {
    setTimeout(function () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return reject({prime:false});
        resolve({prime:num > 1});
    }, 500);
});

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log('end');