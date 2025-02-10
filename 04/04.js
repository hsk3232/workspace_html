function hello(){
    alert("Hello JS!!");
}
    // alert은 경고창을 띄워주는 함수 / 위치는 head에 있어도 body에 있어도 상관없음
    // 그러나 head에 위치 하는 것이 좋음

    // 화살표 함수

    const hello2 = () => {
        alert("Hello2 JS!!");
    }
    const myHello = (msg) => {
        // alert("Hello" + msg + "!!") ;
    
    document.getElementById("msg").innerHTML = "Hello " + "<span>" + msg + "</span>" + "!!";
    }

