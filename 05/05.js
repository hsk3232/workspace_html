// alert("안녕하세요!")

//consol에 출력
console.log("안녕하세요!")


// < var 실습 >
// 콘솔 log에 x를 찍었는데, x의 값을 먼저 선언하지 않아서 undefined가 나온다. 먼저 호스트에 x의 공간을 만들어 놓으나 선언한 변수가 없어서 undefined가 나온다. 에러가 일어나지 않고 undifined가 나온 이유는 var은 호이스팅이 일어나기 때문이다.
// console.log(x);
// var x = 1; 
// console.log(x);

// < let 실습 >
// var과 다르게 let은 호이스팅이 일어나지 않는다. 그래서 선언하기 전에 사용하면 에러가 난다. const도 마찬가지이다.
// let y = 1; 
// console.log(y);
// let y = 1; 
// console.log(y);

let x = 10; //변수 선언
const y = 10; //상수 선언

console.log("x = ", x, "y = ", y); //10 10
console.log("x = " + x +"y = ", y); //10 10
// 자바스크립트는 ""와 ''를 구분하지 않는다.
//java는 ""는 char, ''는 string이지만 자바스크립트는 구분하지 않는다.

