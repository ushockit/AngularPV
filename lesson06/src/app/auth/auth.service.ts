import {AccountInterface} from "./account.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  authUser: AccountInterface | undefined = undefined;

  accounts: AccountInterface[] = [
    {
      id: 1,
      email: 'vasya@gmail.com',
      phone: '09906789321',
      birth: new Date(1960, 10, 10)
    }
  ];

  login(email: string): boolean {
    this.authUser = this.accounts.find((acc: AccountInterface) => acc.email === email);
    return Boolean(this.authUser);
  }
  register(acc: AccountInterface) {
    this.accounts.push(acc);
  }
}
