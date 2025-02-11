// alert("안녕하세요!")

// //consol에 출력
// console.log("안녕하세요!")


// {/* < var 실습 >
// 콘솔 log에 x를 찍었는데, x의 값을 먼저 선언하지 않아서 undefined가 나온다. 먼저 호스트에 x의 공간을 만들어 놓으나 선언한 변수가 없어서 undefined가 나온다. 에러가 일어나지 않고 undifined가 나온 이유는 var은 호이스팅이 일어나기 때문이다.
// console.log(x);
// var x = 1; 
// console.log(x);

// < let 실습 >
// var과 다르게 let은 호이스팅이 일어나지 않는다. 그래서 선언하기 전에 사용하면 에러가 난다. const도 마찬가지이다.
// let y = 1; 
// console.log(y);
// let y = 1; 
// console.log(y); */}

// let x = 10; //변수 선언
// const y = 10; //상수 선언

// console.log('x = ', x, "y = ", y); 
// console.log("x = " + x +"y = ", y);
// console.log("x type = ", typeof(x));//자료형 확인

// // 자바스크립트는 ""와 ''를 구분하지 않는다.
// //java는 ""는 char, ''는 string이지만 자바스크립트는 구분하지 않는다.

// x = 'PNU'; 
// //변수값 재할당
// // y = 20; //상수값 재할당 -> 에러 발생, 상수는 재할당이 불가능하다.

// console.log("x = ", x, "y = ", y);
// console.log("x = " + x + "y = ", y);



// 함수선언 1
function check1() {
    // e.preventDefault();
    // console.log("check1");
    let s = document.getElementById("txt1").value;
    // document.getElementById("txt2").value  = s.length(); / = isNaN() 
    //s.length는 문자열의 길이를 숫자로 반환한다.
    //isNaN()은 숫자인지 아닌지 판별하는 함수이다.

    // let s2 = document.getElementById("txt2").value;
    // document.getElementById("msg").innerHTML = parseInt(s)+parseInt(s2);

    // document.getElementById("msg").innerHTML = s+s2;

    // document.getElementById("txt2").value = s[s.length-1];
    //문자열의 마지막 문자를 가져온다.

    // document.getElementById("txt2").value = s[-1];
    // js에서 -1은 불가능하다.

    // document.getElementById("txt2").value = s.charAt(s.length-1);
    //문자열의 마지막 문자를 가져온다. = s[s.length-1]

    // document.getElementById("txt2").value = s.split(",")[1];
    // console.log(s.split(","));
    //split()은 문자열을 나누어 배열로 만드는 함수이다. ,로 나누어 배열로 만들고 1번째 배열을 가져온다. 배열의 시작은 java처럼 0부터 시작한다.


    //문자열 출력
    console.log(s);


    //한 문자씩 출력
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]); 
//   }

//     //거꾸로 출력
//     for (let i = 0; i < s.length; i++) {
//         console.log(s[(s.length - 1) - i]); //for(let i = s.length-1; i >= 0; i--) 과 같음
//     }

    // //for of문
    // for (let c of s) {
    //     console.log(c);
    // }

    console.log(s.indexOf("s"));
    console.log(s.includes("s"));

    console.log(s.slice(0, 1));
}
    // 함수선언 2: 화살표 함수
    const check2 = (e) => {
        console.log("check2");
    }

