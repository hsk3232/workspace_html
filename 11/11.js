document.addEventListener('DOMContentLoaded', () => {

    //버튼과 이미지 가져오기기
    const bt = document.querySelector('button');
    const img = document.querySelector('img');
    
    //화면이 로드되면, 랜덤 숫자를 불러 오기기

    let n = Math.floor(Math.random())+1

    let obj = {num:n};
    
    console.log(obj.num)
    
    bt.addEventListener("click", ()=>{
        if (n > input.value)
            img.setAttribute('src', `../img/up.png`);

        else if (n < input.value)
            img.setAttribute('src', `../img/down.png`);

        else (n == input.value)
            img.setAttribute('src', `../img/good.png`);

    });

});
