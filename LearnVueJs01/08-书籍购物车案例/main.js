const app = new Vue({
    el: '#app',
    data: {
        books: [
            { id: "1", name: "《算法导论》", date: "2022-01-02", num: 1, onePrice: 70, price: 70 },
            { id: "2", name: "《编程思想》", date: "2022-01-02", num: 1, onePrice: 60, price: 60 },
            { id: "3", name: "《代码大全》", date: "2022-01-02", num: 1, onePrice: 90, price: 90 }
        ]
    },
    methods: {
        btnSub(index) {
            this.books[index].num--;
            this.books[index].price = this.books[index].onePrice * this.books[index].num;
        },
        btnAdd(index) {
            this.books[index].num++;
            this.books[index].price = this.books[index].onePrice * this.books[index].num;
        },
        removeBook(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            //三种for循环演示
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].num;
            // }
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].num;
            // }
            // for (let item of this.books) {
            //     totalPrice += item.price * item.num;
            // }
            // for (let item of this.books) {
            //     totalPrice += item.price * item.num;
            // }
            totalPrice = this.books.reduce(function(preValue,book){
                return preValue+book.price*book.num;
            },0)
            return totalPrice
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
})

const nums = [10, 12, 8, 20, 37, 6, 29, 110, 121];
// let newNums=[];
// //取出小于100的数
// for(let n of nums){
//     if(n<100){
//         newNums.push(n);
//     }
// }

// let newNums2=[];
// for(let n of newNums){
//     if(n<100){
//         newNums2.push(n*2);
//     }
// }



