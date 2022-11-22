import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  profileLogout = this.formBuilder.group({
  });

  logout(): void {
    localStorage.clear();
    console.log("kek");
    this.router.navigate(['/news']);
  }

}

