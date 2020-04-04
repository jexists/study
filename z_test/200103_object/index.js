const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

dog.say(); //멍멍


const dog2 = {
  name: '멍멍이',
  sound: '멍멍!',
  say: ( ) => {
    console.log(this.sound);
  }
};

dog2.say(); //undefined
// function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문입니다.

const numbers = {
  a: 1,
  b: 2
};

numbers.a = 5;
console.log(numbers);