function createBb() {
    var result = new Array();
    for(var i = 0; i < 5; i++) {
        result[i] = function () {
            console.log(i);
        }
    }
    return result;
}

var result = createBb();

result[0]();
result[1]();
result[2]();
result[3]();
result[4]();
aa();


+function aa(){
    console.log("saas");
}

