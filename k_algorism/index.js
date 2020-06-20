// 약수 구하기

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

console.log(divisors(13));
