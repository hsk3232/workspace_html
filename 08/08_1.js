document.addEventListener('DOMContentLoaded', () => {
    //button요소 모두 가져오기
    //1개인 경우도 노드리스트
    const bts = document.querySelectorAll('button'); //id가 bt1인 요소를 가져온다.
    console.log(bts);


    // bts[0].addEventListener("click", ()=>{
    //     console.log('bt1')
    // }); //bt1에 click이벤트가 발생하면 check1함수를 실행한다.


// 노드리스트 순회
 for(let bt of bts) {
    bt.addEventListener("click", ()=>{ // 속성변경경
        bt.setAttribute("id", bt.textContent) // id 요소를 설정하는 것것

    
        // bt.innerHTML = bt.textContent + "1" ; //값을 가져오고 붙이고가 가능함.
        //innnerHTML은 요소의 teg도 가져온다.
        //innerText는 요소의 내용만만 가져오고 설정한다.
        console.log(bt.getAttribute); // id 요소를 가져오는 것.
    });
 }

}); 
