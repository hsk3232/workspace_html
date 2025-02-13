function lotto() {
    //1. 로또번호생성
    //1-1. 로또배열 
    let arrLotto = [] ;
  
    //1-2. 6개
    while( arrLotto.length < 6 ) {
      let n = Math.floor(Math.random() * 45) + 1 ; // 1~45까지 
  
      if (!arrLotto.includes(n)) arrLotto.push(n) ;
    }
    //1-2. 6개 번호 정렬
    arrLotto.sort((a, b) => a - b) ;
  
    //1-3.  + 1개 번호 추출
    // console.log("+ ");
    // while( arrLotto.length < 7 ) {
    //   let n = Math.floor(Math.random() * 45) + 1 ; // 1~45까지 
  
    //   if (!arrLotto.includes(n)) arrLotto.push(n);
    // }
  
    // console.log(arrLotto) ;

    let bonus;
    while (true) {
        let n = Math.floor(Math.random() * 45) + 1;
        if (!arrLotto.includes(n)) {
            bonus = n;
            break;
        }
    }

    console.log([...arrLotto, "+", bonus]);
  

    let spanTgs = arrLotto.map(item => `<span class='sp${Math.floor(item/10)}'>${item}</span>`).join(' ') 
                + ` <span class='plus'>+</span> ` 
                + `<span class='sp${Math.floor(bonus/10)}'>${bonus}</span>`;


    // let spanTgs  = arrLotto.map(item => `<span class ='sp${Math.floor(item/10)}'>${item}</span>`).join('');
    // console.log(spanTgs) ;
    document.getElementById("msg").innerHTML = spanTgs;
  }