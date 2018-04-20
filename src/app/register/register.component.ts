import {Component, OnInit} from '@angular/core';
import {UiService} from '../ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    this.uiService.setActiveNavId('register');
  }

}
