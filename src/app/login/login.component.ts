import {Component, OnInit} from '@angular/core';
import {UiService} from '../ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileName: string;
  profileEmail: string;
  reauthEmail: boolean;

  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    this.uiService.setActiveNavId('login');
    this.reauthEmail = false;
    this.profileName = 'Joseph Okharedia';
    this.profileEmail = 'joseph@okharedia.com';
  }

}
