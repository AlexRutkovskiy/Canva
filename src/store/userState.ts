import { makeAutoObservable } from "mobx";

class UserState {

  private session: string = '';
  private name: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  setSessionId(id: string) {
    this.session = id
  }

  get sessionId(): string {
    return this.session;
  }

  setUserName(name: string) {
    this.name = name;
  }

  get userName(): string {
    return this.name;
  }
}

export default new UserState();