// console.log('rxjs');

// import { Observable } from 'rxjs';

// const observable = new Observable((observer) => {
//   //observer
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   // observer.complete();
//   setTimeout(()=>{
//     observer.next(4);
//     observer.complete();
//     observer.next(5); //X
//   },1000)
// });

// const observer = {
//   next(x: number) {
//     console.log('got value ' + x);
//   },
//   error(err: string) {
//     console.log('error' + err);
//   },
//   complete() {
//     console.log('done'); 
//   }
// }

// observable.subscribe(observer);


// Create Observable
import { Observable } from 'rxjs';