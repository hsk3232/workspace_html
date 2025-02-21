//영화api 
const mvApi = '';
const baseMvUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'

//TMDB
const rmdbApi = '';
const baseTMDBUrl = 'https://api.themoviedb.org/3/search/movie?'

//영화포스터 저장 배열
let posterArr = [];

//포스터 가져오기
const getPoster = async(movieNm) => {
    let url = `${baseTMDBUrl}api_key=${rmdbApi}&query=${movieNm}`;

 

    console.log('getPoster', movieNm, url)
    const resp = await fetch(url);
    const data = await resp.json();

    if (data == undefined)
        posterArr.push('');
    else
        posterArr.push(data.results[0].poster_path);

}

//박스오피스 가져오기
const getBoxOfficeList = async() => {
    const ul = document.querySelector('ul');
    const mvPoster = document.querySelector('#mvPoster')

    const mvType = document.querySelector('[type=radio]:checked').value;
    const dt = document.querySelector('[type=date]').value.replaceAll('-', '');
    console.log("mvType", mvType, dt)

    //포스터 배열 초기화 및 포스터 가져오기
    posterArr = [];
    let url = `${baseMvUrl}&key=${mvApi}&targetDt=${dt}`;
    if (mvType == 'K' || mvType == 'F') {
        url = `${url}&repNationCd=${mvType}`;
    }

    //fetch
    const resp = await fetch(url);
    const data = await resp.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

    let tags = '';
    for (let item of dailyBoxOfficeList) {
        tags = tags +
            `<li>
            <span class="sp">${item.rank}</span>
            ${item.movieNm}
        </li>` ;


        await getPoster(item.movieNm);
    }
    ul.innerHTML = tags;

    const lis = document.querySelectorAll('li');
    for (let [i, li] of lis.entries()) {
        li.addEventListener('mouseenter', () => {
            posterArr[i] == ''
                ? mvPoster.innerHTML = "자료없음"
                : mvPoster.innerHTML = `<img src = "https://image.tmdb.org/t/p/w500${posterArr[i]}">`;

        })
    }

    console.log("posterArr", posterArr);
}



//과거 일자만 선택 가능하게 만들기
const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 1);

    //연도
    let year = dt.getFullYear();

    //월
    let month = String(dt.getMonth() + 1).padStart(2, '0');
    //    month = month <10 ? '0' + month : month //삼항연산자로 월을 2자리로 표기

    //일
    let day = String(dt.getDate()).padStart(2, '0');

    return (year + "-" + month + "-" + day);
}

//페이지 안에서 이벤트가 일어나는데, 문서가 로딩되면서 시작된다.
document.addEventListener("DOMContentLoaded", () => {

    //HTML 문서에 있는 노드 중 date와 radio 타입을 선택한다.
    const inputDate = document.querySelector('[type = date]');
    const radios = document.querySelectorAll('[type = radio]');
    const bt = document.querySelector('button');
    //어제 날짜짜
    const yesterday = getYesterday();
    inputDate.max = yesterday;
    inputDate.value = yesterday;


    //박스오피스 가져오기
    getBoxOfficeList();

    bt.addEventListener('click', (e) => {
        e.preventDefault;

        getBoxOfficeList();
    });

    console.log(yesterday);
});