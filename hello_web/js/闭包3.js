function createBb() {
    let result = new Array();
    for (var i = 0; i < 5; i++) {
        result[i] = (function (num) {
            return function () {
                console.log(num);
            }
        })(i)
    }
    return result;
}

let result = createBb();

result[0]();
result[1]();
result[2]();
result[3]();
result[4]();
