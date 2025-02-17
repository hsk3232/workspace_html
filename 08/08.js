//dom이 로드 됐을 때 이벤트 발생

document.addEventListener('DOMContentLoaded', () => {

    //요소 가져오기 (버튼, 이미지지)
    const bt = document.querySelector('button');
    const img = document.querySelector('img');

    //버튼이 클릭될 경우
    bt.addEventListener("click", ()=>{

        //이미지 속성 변경
        //렌덤 수 변경

        let n = Math.floor(Math.random() * 6) + 1 ; // 1~6까지

        img.setAttribute('src', `../img/${n}.png`);
        img.setAttribute("alt", `${n}`);

});


}); 
