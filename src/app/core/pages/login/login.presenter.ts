import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class LoginPresenter {
  form!: FormGroup;

  username = new FormControl('', [Validators.required]);

  password = new FormControl('', [Validators.required]);

  constructor() {
    this.form = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

}
