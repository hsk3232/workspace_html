function showmsg(m) {
    document.getElementById("txt2").value = m;
}



function check1() {

    //1. 입력 문자열 가져오기
    let s = document.getElementById("txt1").value; //문자열을 가져온다.

    //2. 문자열 뒤집어진 문자열 생성
    let sr = '';
    for (let i = s.length - 1; i >= 0; i--) {
        sr += s[i];
    }
    console.log(s, sr);

    //3. 입력 문자열과 뒤집어진 문자열 비교
    if (s == sr) {
        // document.getElementById("txt2").value = "회문입니다.";

        showmsg("회문입니다.");
    } else {
        document.getElementById("txt2").value = "회문이 아닙니다.";
        //showMag("회문이 아닙닙니다.");
    
    }

}

const check2 = () => {
    let s = document.getElementById("txt1").value;
    let sum = 0;
    for (let c of s) {
        if (!isNaN(c)) {
            sum += parseInt(c);
        }
    }

    // document.getElementById("txt2").value = sum;
    showmsg(sum);

}