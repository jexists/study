// 약수 구하기/////////////////////
function divisors(integer) {
  let arr = [];
  for (let i=2; i<integer; i++){
    if(integer % i == 0) {
      arr.push(i);
    }
  }
  if (!arr[0]) {
    return integer + ' is prime | 소수입니다'; 
  }else {
    return arr
  }
}
// console.log(divisors(13));
/////////////////////////////////////////////////

// 짧은 단어 수 나타내기
function findShort(word) {
  let wordArr = word.split(' ');
  // wordArr = ["첫번째단어","두번째단어", ...];
  let min = wordArr[0].length;
  // min = wordArr[첫번째단어]의 length 숫자
  for (let word of wordArr) {
    if(word.length < min) {
      min = word.length;
    }
  }
  return min;
}
//console.log(findShort('dkfjdlf dfjid dff'));
/////////////////////////////////////////////////

// 단어 지우기
function eraseWord(w) {
  let arr = w.split('HA');
  console.log(arr);
  let sentence = '';
  for (let word of arr) {
    if (word !== ''){sentence += word + ' '}
  }
  return sentence.trim();
  // 맨 뒤 스페이스 공백 지우기
  // return sentence;
}
// console.log(eraseWord('dgHAHAHAkha gkHAdgHAHA'));
/////////////////////////////////////////////////
  
// 보안 숫자 숨기기
function maskify(n) {
  let len = n.length;
  if (len <= 4){
    return n;
  } else {
    let mySlice = n.toString().slice(len - 4, len)
    let newNum = '';
    for(let i = 0; i < len-4; i++) {
      newNum += '#';
    } 
    return newNum += mySlice;
  }
}
// console.log(maskify("33444dd43"));
/////////////////////////////////////////////////

// 글자돌리기 =========================
// ERROR
function solution(n) {
  var answer = '';
  let watermelon = [];
  for (let i = 0; i < n; i++) {
      if(i % 2 == 0){
          watermelon.push('수');
      }else{
          watermelon.push('박');
      }
      answer = JSON.stringify(watermelon.join());
      console.log(answer);
    }
    console.log(answer);
  return answer;
}
solution(8);

function solution(n) {
  var answer = '';
  let watermelon = '';
  
  for (let i = 0; i < n; i++) {
      if(i % 2 == 0){watermelon += '수';
      }else{ watermelon += '박';}
      answer = watermelon;}
  return answer;
}
solution(8);
/////////////////////////////////////////////////

