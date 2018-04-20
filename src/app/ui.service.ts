import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UISettings} from './model/UISettings';

@Injectable()
export class UiService {

  private uiSettings: UISettings = new UISettings();
  private uiFlagSubject = new BehaviorSubject<UISettings>(this.uiSettings);
  uiSettingsObservable = this.uiFlagSubject.asObservable();

  reset() {
    this.uiSettings.navbarActiveId = '';
    this.uiFlagSubject.next(this.uiSettings);
  }

  setActiveNavId(id: string) {
    this.uiSettings.navbarActiveId = id;
    this.uiFlagSubject.next(this.uiSettings);
  }
}
