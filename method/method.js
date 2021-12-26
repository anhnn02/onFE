// includes
// console.log({abc}.prototype.includes);
/* abc = Array => ok
        String => ok
        Number => not
        Object => not
        Date => not
  */

// var title = "Hello Anh nha!";
// console.log(title.includes("Anh", 2)); // từ index kí tự "e"

// var course2 = ['Anh', 'PHP', 'JS'];
// console.log(course2.includes("PHP", 2)); // Từ index 2 là phần tử thứ 2 của mảng có không => false
// console.log(course2.includes("PHP", 1)); // Từ index 1 là phần tử thứ 2 của mảng có không => true

// // 3 + -1 sẽ bắt đầu tìm từ vị trí số 2
// // nếu tổng nhỏ hơn 0 thì auto => 0
// console.log(course2.includes("PHP", -1)); // => not
// console.log(course2.includes("JS", -1)); // => ok

// var course = [
//     {
//         id: 1,
//         name: 'a',
//         price: 1
//     },
//     {
//         id: 2,
//         name: 'b',
//         price: 2
//     },
//     {
//         id: 3,
//         name: 'c',
//         price: 3
//     }
// ]

// function courseHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         price: course.price,
//         priceText: `Gia: ${course.price}`,
//         index: index,
//         originArr: course,
//     }
// }
// // lấy mỗi name tạo thàng mảng mới
// function courseHandler2(course, index) {
//     return /*html*/`<h2>name: Khoa hoc: ${course.name}</h2>`;
// }
// var newCourse = course.map(courseHandler2);
// console.log(newCourse.join(''));

// filter
// var course3 = [
//     {
//         id: 1,
//         name: 'a',
//         price: 1
//     },
//     {
//         id: 2,
//         name: 'b',
//         price: 2
//     },
//     {
//         id: 3,
//         name: 'c',
//         price: 3
//     }
// ]

// var filterCourse = course3.filter(function (course3, index, arr) {
//     return course3.price > 1;
// })
// console.log(filterCourse);

// some()
// var course4 = [
//   {
//     id: 1,
//     name: "a",
//     price: 1,
//     isFinish: false,
//   },
//   {
//     id: 2,
//     name: "b",
//     price: 2,
//     isFinish: true,
//   },
//   {
//     id: 3,
//     name: "c",
//     price: 3,
//     isFinish: true,
//   },
// ];

// var result = course4.some(function (course4, index, arr) {
//   return course4.isFinish;
// });
// // tối thiểu 1 cái thỏa mãn là trả về true
// console.log(result); // true
// // đưa arr rỗng thì kết quả là false, không hề duyệt qua course4 = Array(100)

// // every() true / fasle >< some() nếu gặp false sẽ ngừng ngay

// var result2 = course4.every(function (course4, index, arr) {
//   return course4.isFinish;
// });
// console.log(result2); // true

// // forEach()
// var course5 = ["JS", "PHP", "Ruby"];

// // forEach không quan tâm Length dù có gán course5.length = 100
// course5.forEach(function (course5, index, arr) {
//   console.log(course5, index, arr);
// });

// find()
// var courses6 = [
//   {
//     id: 1,
//     name: "a",
//     price: 1,
//   },
//   {
//     id: 2,
//     name: "b",
//     price: 2,
//   },
//   {
//     id: 3,
//     name: "c",
//     price: 3,
//   },
//   {
//     id: 4,
//     name: "b",
//     price: 3,
//   },
// ];

// var course6 = courses6.find(function (course6) {
//     return course6.name === "b";
// });
// console.log(course6);
// // trả ra thằng đầu tiên tìm thấy
// // nếu không thấy => undefined
// // k return vẫn có undefined

// // var courses6 = new Array(100);
// // dùng vòng for thường để chạy vì nó duyệt qua tất cả dù rỗng



// reduce()
var courses7 = [
  {
    id: 1,
    name: "a",
    price: 1,
  },
  {
    id: 2,
    name: "b",
    price: 2,
  },
  {
    id: 3,
    name: "c",
    price: 3,
  },
  {
    id: 4,
    name: "b",
    price: 3,
  },
];
function priceHandler(a, b){
    return a + b.price;
}
var course7 = courses7.reduce(priceHandler, 0); // giá trị khởi tạo cho biến lưu trữ var total = 0
console.log(course7);

