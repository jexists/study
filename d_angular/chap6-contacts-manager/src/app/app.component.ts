import { Component } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  searchedUser: User;

  constructor(
    public userService: UserService
  ) {
    this.user = new User();
  }

  findUser(id) {
    const onSuccess = res => {
      const user = res.data;
      this.searchedUser = user;
    };
    this.userService.getUser(id, onSuccess);
  }

  addUser() {
    const newUser = { name: this.user.name, age: this.user.age };
    const callback = res => {
      const newUser: User = res.data;
      console.log(JSON.stringify(newUser));
      alert(`id:${newUser.id}\n name:${newUser.name}\n age:${newUser.age}\n`)
    };
    // this.userService.addUser(newUser);
    this.userService.addUser(newUser, callback);
    this.user = new User();
  }

  modifyUser() {
    if (this.user.id === 0) {
      this.addUser();
      return;
    }

    const callback = res => {
      const newUser: User = res;
      console.log(JSON.stringify(newUser));
      alert(`id:${newUser.id}\n name:${newUser.name}\n age:${newUser.age}\n`)
    }
    this.userService.modifyUser(this.user, callback);
  }

  //삭제 수정
  removeUser(id) {
    const onSuccess = res => {
      // console.log(res.status);
      if(res) {
        alert(`user Id: ${id} deleted`);
        console.log(res);
        return;
      }
      alert('Delete Fail');
    };
    this.userService.removeUser(id, onSuccess);
  }

}
