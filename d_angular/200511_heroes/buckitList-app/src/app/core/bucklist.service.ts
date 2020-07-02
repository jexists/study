import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { BuckitList } from './buckitlist';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BuckitListService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private buckitListUrl = 'api/buckitLists';

  //히스토리 메세지 입력
  private log(message: string) {
    this.messageService.add(`${message}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getBuckitLists (): Observable<BuckitList[]> {
    return this.http.get<BuckitList[]>(this.buckitListUrl)
      .pipe(
        tap(_ => this.log('버킷리스트 로딩 완료')),
        catchError(this.handleError<BuckitList[]> ('버킷리스트 로딩', []))
      );
  }

  /** GET: id에 해당하는 버킷리스트 데이터 가져오기. 존재하지 않으면 404를 반환 */
  getBuckitList(id: number): Observable<BuckitList> {
    const url = `${this.buckitListUrl}/${id}`;
    return this.http.get<BuckitList>(url).pipe(
      tap(_ => this.log(`${id}번째 버킷리스트 이동`)),
      catchError(this.handleError<BuckitList>(`getBuckitlists id=${id}`))
    );
  }
  
  /** PUT: 서버에 저장된 버킷리스트 데이터를 변경 */
  updateBuckitList (buckitList: BuckitList): Observable<any> {
    return this.http.put(this.buckitListUrl, buckitList, this.httpOptions).pipe(
      tap(_ => this.log(`${buckitList.id}번째 버킷리스트 수정`)),
      catchError(this.handleError<any>('updatebuckitList'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} 실패: ${error.message}`);
      return of(result as T);
    }
  }

  /** POST: 서버에 새로운 버킷리스트를 추가 */
  addBuckitList (buckitlist: BuckitList): Observable<BuckitList> {
    return this.http.post<BuckitList>(this.buckitListUrl, buckitlist, this.httpOptions).pipe(
      tap((newBuckit: BuckitList) => this.log(`${newBuckit.id}번째 버킷리스트 추가`)),
      catchError(this.handleError<BuckitList>('addBuckitList'))
    );
  }

  /** DELETE: 서버에서 버킷리스트를 제거 */
  deleteBuckitList (buckitList: BuckitList | number): Observable<BuckitList> {
    const id = typeof buckitList === 'number' ? buckitList : buckitList.id;
    const url = `${this.buckitListUrl}/${id}`;

    return this.http.delete<BuckitList>(url, this.httpOptions).pipe(
      tap(_ => this.log(`${id}번째 버킷리스트 삭제`)),
      catchError(this.handleError<BuckitList>('deleteBuckitList'))
    );
  }

  /* GET: 입력된 문구가 이름에 포함된 버킷리스트 목록을 반환 */
  searchBuckitList(term: string): Observable<BuckitList[]> {
    if (!term.trim()) {
      // 입력된 내용이 없으면 빈 배열을 반환
      return of([]);
    }
    return this.http.get<BuckitList[]>(`${this.buckitListUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`"${term}"으로 검색한 결과`) :
         this.log(`"${term}"으로 검색한 결과 X`)),
      catchError(this.handleError<BuckitList[]>('searchBuckitLists', []))
    );
  }
}
