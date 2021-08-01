alert('tổng hợp js');
// cách khai báo biến
let fullName = 'Đỗ Văn Cường';
let age = 31; 

alert(fullName);
alert(age);

// _comments trong JS (comments-1 dòng)
/**_comments nhiều dòng */
/* 
    Giới thiệu một số hàm built-in()
        1. Alert
        2. console (cách debug)
        3. confim  (xác nhận lựa chọn ng dùng /yes.no)
        4. prompt  (giống  'confim'-them ô input)
        5. set timeout (cho một đoạn cốt chạy sau khoảng time dc cài đặt)
        6. set Interval (thực thi 1 đoạn code ko ngừng sau 1 khoang time dc cài đặt)
*/
console.log('đây là console');
confirm('mời bạn chọn');
prompt('mời bạn nhập');

setTimeout(function()  {
    alerdt('ahihihi')
}, 2000);

setInterval(function(){
    console.log('ahihi' + Math.random())
},5000);

/* Giới thiệu về toán tử trong JS
    1. Toán tử số học- Arithmetic.
        +  cộng
        -  trừ
        *  nhân
        ** lũy thừa
        /  chia
        %  chia lấy dư
        ++ tăng 1 giá trị
        -- giảm 1 giá trị số
    2. toán tử gán- Assignment.
        =  (a = b)
        +=  (a = a + b)
        -=  (a = a - b)
        *=  (a = a * b)
        /=   (a = a / b)
        **=   (a = a ** b)
    3. Toán tử so sánh- Comparison.
    4. Toán tử logic- Logical.
        Boolean
        var isSuccess = true;
    5. Toán tử chuỗi- String.
 */
// 1
var a = 2+3;
console.log(a);


// 2.3
var a = 2;
var a = 3;
if (a > b){
    alert('dung');
}

// 4
var a = 1;
var b = 2;
if (a > 0 && b > 0){
    alert('dung');
}

/*  câu lệnh điều kiện if - else
if (dk){
thuc thi neu dk ddung
}else{
    thuc thi neu dk sai
}
*/

/* Kiểu dữ liệu trong JS
    1. kiểu dữ liệu nguyên thủy - Primitive Data
        _ Number
        _ String
        _ Boolean
        _ Undefiend
        _ Null
        _ Symbol
    2. kiểu dữ liệu phức tạp - Complex Data
        _ Function
        _ Object
*/

//  NUmbers type
var a = 1;
var a = 1.5;

//  String type
var fullName = " Van Cuong";
var fullName = 'Van Cuong';

//  Boolean type
var isSuccess = true;

//  Undefined type
var age;

//  Null type
var isNull = null;

// Symbol type
var id = Symbol('add'); // unique(duy nhất)

//  Function type
var myFunction = function(){
    alert('');
}
myFunction(); // khi này khối lệnh trong {} mới dc thực thi.

// Object types
var myObject = { //khi cần định nghĩa key
    name: "",
    age: "",
    address: "",
    myFunction: function () {

    }
};
console.log('myObject', myObject);

var myArray = [ // khi không cần định nghĩa key
    'js',
    'van',
];

// Cách kiểm tra kiểu dữ liệu
console.log(typeof biến);

/*  Chuỗi trong Js
1. Tạo chuỗi
    _ cách 1 var fullName = 'chuoi';
    _ cách 2 var fullName = new String('chuoi'); // đây là cách tạo hướng đối tượng
2. một số case sử dụng backslash (`)
3. Templeta string
csl(`a ${})
4. thay thế phần tử trong chuỗi- replace
// console.log(chuỗi.replace(/can-thay/g, 'nd thay')) // tất cả phần tử cần thay sẻ dc đỏi
5. convert chuyển đổi chữ
    console.log(myString.toUpperCase())
    console.log(myString.toLowerCase())
6. cắt chuỗi thành mảng(array)
    console.log(chuoi.split(','))
7. get a character by index
const myString = 'Van Cuong';
console.log(myString[index])
console.log(typeof+/myString.charAt(index))



*/
