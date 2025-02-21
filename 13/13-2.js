const getFetch = async (dt, ul) => {
    // console.log(dt)
    let apiKey = '키값'
    let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;


    try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.boxOfficeResult.dailyBoxOfficeList)
       
        let tags ='';
        for(let item of data.boxOfficeResult.dailyBoxOfficeList){
            tags = tags + 
                `<li>
                <span class="sp">${item.rank}</span>
                ${item.movieNm}
                </li>` ;
        } ul.innerHTML = tags;

    } catch (err) {
        console.log(err)
    }
    console.log('getFetch', url);
}


document.addEventListener('DOMContentLoaded', () =>{
    
    //필요한 요소 가져 오기
    const dt = document.querySelector('#dt'); //날짜 가져오고
    const ul = document.querySelector('ul'); //ul 가져온다.

    dt.addEventListener('change', (e)=>{
        e.preventDefault; // 날짜 앞으로 못가게 default값 생성성

        console.log(dt.value); //change 이벤트가 발생하면 값을 가져 온다.
        getFetch(dt.value.replaceAll('-', ''), ul);

    });



});
