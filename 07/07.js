//object
//배열은 인덱스를 통해 접근하지만, 객체는 키를 통해 접근한다.
//arr=[1,2,3,4,5] ;
//console.log(arr[0]) ;
//object = {a:1, b:2, c:3} ;
//console.log(object['a']) ;
//console.log(object.a) ; // 표기법은 2가지이나 한글일 경우 전자를 사용하는 것이 좋다.

let obj = {'appple':'🍎',
           '바나나':'🍌',
            '오이':'🥒'
        } ;

console.log(obj['appple']);
console.log(obj.바나나);

//추가
obj['당근'] = '🥕' ;
console.log(obj.당근);

//수정
obj.appple = '🍏' ;
console.log(obj);

//삭제
delete obj.오이 ;
console.log(obj);

//순회
//Object.keys() 메소드 //객체의 키를 배열로 반환
console.log(Object.keys(obj));

//Object.values() 메소드   //객체의 값들을 배열로 반환
console.log(Object.values(obj));

//entries() 메소드 // 객체의 키와 값들을 배열로 반환
console.log(Object.entries(obj));


//순회
for(let i = 0; i < Object.keys(obj).length ; i++) {
    console.log(Object.keys(obj)[i], Object.values(obj)[i], obj[Object.keys(obj)[i]]);
}
//in은 배열의 키 값을 가져온다.
for(let i in Object.keys(obj)) { 
    console.log(Object.keys(obj)[i], Object.values(obj)[i], obj[Object.keys(obj)[i]]);
}

//of는 배열의 값을 가져온다.
for(let item of Object.keys(obj)) {
    console.log(item, obj[item]);
}

//entries() 메소드는 구조 분해 할당을 사용할 수 있다.
for(let [k, v] of Object.entries(obj)){
    console.log(k,v);
}

// 전개 연산자
let obj2 = {'수박':'🍉'} ;
let obj3 = {...obj, ...obj2} ; //객체를 합칠 때는 ...을 사용한다.
console.log(obj3);

let obj4 = {
    '과일' : {
        '사과':'🍎', '바나나':'🍌'},
    '채소' : {'오이':'🥒', '당근':'🥕'}
} 
console.log(obj4['과일']['사과']) ;
console.log(obj4.과일.사과) ;
console.log(obj4['채소'].오이) ;