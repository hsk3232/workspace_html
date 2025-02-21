
// 단위 변경 <함수로 표현>
const unitChange = (s1, s2, sel1, sel2, txt1, txt2, sps) => {

    if (s1.value == "℃") {
        s2.value = "℉";

    } else {
        s2.value = "℃";
    }
    sps[0].textContent = sel1.value;
    sps[1].textContent = sel2.value;
    txt1.value = "";
    txt2.value = "";
    txt1.focus(); // .foucus => 페이지 로딩이 끝나면,
    //  텍스트 커서가 자동으로 <input>에 가도록 하는 코드로 사용자가
    // 양식 필드를 직접 클릭할 필요 없이 바로 집중해 시작할 수 있도록 도움.

}

// const unitChange2 = (s1, s2, txt1, txt2, sps) => {

//     let s1Id = s1.getAttribute('id');
//     console.log("s1Id", s1Id)
//     if(s1Id != 'sel1') {
//         let stp = s1;
//         s1 = s2;
//         s2 = stp;
//     }
//     if(s1.value == "℃") {
//         s2.value = "℉";

//       } else {s2.value = "℃";        

//     } 
//         sps[0].textContent = s1.value;
//         sps[1].textContent = s2.value;
//         txt1.value = "";
//         txt2.value = "";   
//         txt1.focus();
// }


//dom 생성 후
document.addEventListener('DOMContentLoaded', () => {
    // 콜백 함수로 dom 로드 됐을 때 이벤트리스너가 감지 된다.

    //요소 가져오기 (셀렉터)
    const sel1 = document.getElementById('sel1');
    //아이디를 찾아라 이기 때문에 id 이름만 붙임
    const sel2 = document.querySelector('#sel2')
    //쿼리 셀렉터로 찾아라 이기 때문에 아이디 속성인 #을 붙어야 함. getElemnetbyId보다 포괄적으로 찾기

    //input box
    // const txt1 = document.querySelector('input'); //All이 아니기 때문에 처음 만나는 input만 찾음
    // const txt2 = document.querySelector('input[readonly]');
    // ↑↓ 같은 코드드
    const txt1 = document.querySelector('.unit input');
    const txt2 = document.querySelector('.unit input[readonly]');



    //span -> node list
    const sps = document.querySelectorAll('span');

    // //span -> node list 중에 첫번째 요소만 가져올 거야.
    // const sp1 = document.querySelectorAll('span')[0];

    // console.log(sel1.value)
    // console.log(sel2.value)
    // console.log(txt1.value)
    // console.log(txt2.value)
    // console.log(sps[0].textContent) //Node의 속성, <script>, <style> 태그에 관계 없이 text 값을 모두 가져와라라
    // console.log(sps[1].innerText) //Elemnet의 속성, element내에서 "사용자에게 보여지는" text 값을 가져와라

    //첫번째 select 값이 변경됐을 때
    sel1.addEventListener('change', () => {
        console.log("sel1", sel1.value)
        unitChange(sel1, sel2, sel1, sel2, txt1, txt2, sps);
        // if(sel1.value == "℃") sel2.value = "℉";
        // else sel2.value = "℃";
        // sps[0].textContent = sel1.value;
        // sps[1].textContent = sel2.value;
        // txt1.value = "";
        // txt2.value = "";

    });

    //두번째 select 값이 변경됐을 때
    sel2.addEventListener('change', () => {
        console.log("sel2", sel2.value)
        unitChange(sel2, sel1, sel1, sel2, txt1, txt2, sps);

        //     if(sel2.value == "℃"){
        //         sel1.value = "℉"
        //     } else sel1.value = "℃";

        // sps[0].textContent = sel1.value;
        // sps[1].textContent = sel2.value;
        // txt1.value = "";
        // txt2.value = "";

    });

    txt1.addEventListener('input', () => {
        console.log(txt1.value);

        if (sel1.value == "℃") {
            txt2.value = (parseFloat(txt1.value) * (9 / 5)) + 32;

        } else {
            txt2.value = (parseFloat(txt1.value) - 32) * (5 / 9);
        }


    });
});





