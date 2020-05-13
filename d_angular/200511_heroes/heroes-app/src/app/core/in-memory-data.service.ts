import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '슈퍼맨' },
      { id: 12, name: '베트맨' },
      { id: 13, name: '스파이더맨' },
      { id: 14, name: '원더우먼' },
      { id: 15, name: '아이언맨' },
      { id: 16, name: '헐크' },
      { id: 17, name: '아쿠아맨' },
      { id: 18, name: '블렉펜서' },
      { id: 19, name: '토르' },
      { id: 20, name: '닥터스트레인지' }
    ];
    return {heroes};
  }

  // 히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  // 히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  // 히어로 목록이 비어있지 않으면 히어로 id의 최대값에 1을 더해서 반환합니다.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}