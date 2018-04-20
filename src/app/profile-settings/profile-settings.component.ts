import {Component, OnInit} from '@angular/core';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  @BlockUI('save') blockUI: NgBlockUI;
  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  isSaving(): boolean {
    return this.blockUI.isActive;
  }

  save() {
    console.log('I\'m saving');
    this.blockUI.start();
    setTimeout(() => {
      console.log('Doing something here!');
      this.blockUI.stop();
    }, 1000);
  }

}
