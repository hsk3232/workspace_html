//dom이 로드 됐을 때 이벤트 발생

document.addEventListener('DOMContentLoaded', () => {

    //요소 가져오기 (버튼, 이미지지)
    const bts = document.querySelectorAll('button')
    const imgs = document.querySelectorAll('img');

    //버튼이 클릭될 경우
        for(let bt of bts) {
            bt.addEventListener("click", ()=>{ // 속성변경
                let comN = Math.floor(Math.random() * 6) + 1 ; // 1~6까지
                imgs[0].setAttribute('src', `../img/${comN}.png`);
                imgs[0].setAttribute("alt", `${comN}`);


                bt.setAttribute("id", bt.innerHTML)
                console.log(bt.getAttribute);


                bt.innerHTML

                for(let [k, v] of Object.entries(obj)){
                    console.log(k,v);
                }

        //이미지 속성 변경
        //렌덤 수 변경

    


        
});

};
    });
