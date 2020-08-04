import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService {
  private _database: any;
  
  constructor() { }

  createDb() {
    this._database = {};
    this.makeUserTableAndDummyData();
    return this._database;
  }

  private createTable(tableName: string, initialData: any[]) {
    this._database[tableName] = initialData;
  }

  private makeUserTableAndDummyData() {
    const dummyUserData: User[] = [
      {id: 1, name: 'Ruth', age: 32},
      {id: 1, name: 'Dave', age: 53},
      {id: 1, name: 'Haha', age: 24},
    ];
    this.createTable('users', dummyUserData);
  }
}
