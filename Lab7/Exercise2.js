Array.prototype.removeDuplicatesAsync = function () {
    let data = this;
    new Promise(function (resolve, reject) {
        if (data.length) {
            resolve([...new Set(data)]);
        }
        else {
            reject("Empty array");
        }

    }).then(res => console.log(res))
        .catch(err => console.log(err));;
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync()
console.log(`end`);