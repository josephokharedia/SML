import {Component, OnInit} from '@angular/core';
import {Navigation} from '../model/navigation.model';
import {UISettings} from '../model/UISettings';
import {Observable} from 'rxjs/Observable';
import {UiService} from '../ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  private _loggedIn = false;
  private _uiSettingsObservable: Observable<UISettings>;
  private _navigations: Navigation[] = [];

  constructor(private uiService: UiService) {
    this._uiSettingsObservable = this.uiService.uiSettingsObservable;
  }

  get navigations() {
    return this._navigations;
  }

  ngOnInit() {

    const allLinks: Navigation[] = this._getAllLinks();

    allLinks.forEach((nav) => {
      if (
        (this._loggedIn && nav.showOnlyWhenNotAuthenticated) ||
        (!this._loggedIn && nav.showOnlyWhenAuthenticated)
      ) {
      } else {
        this._navigations.push(nav);
      }
    });

    this._uiSettingsObservable.subscribe(uiSettings => {

      this._navigations.forEach((nav) => {
        nav.active = nav.id === uiSettings.navbarActiveId;
      });
    });

  }

  _getAllLinks(): Navigation[] {

    const logout: Navigation = new Navigation.Builder('logout')
      .withText('Logout')
      .withLink('/')
      .withShowOnlyWhenAuthenticated(true)
      .build();

    const login: Navigation = new Navigation.Builder('login')
      .withText('Login')
      .withLink('/login')
      .withShowOnlyWhenNotAuthenticated(true)
      .build();

    const register: Navigation = new Navigation.Builder('register')
      .withText('Sign Up')
      .withLink('/register')
      .withShowOnlyWhenNotAuthenticated(true)
      .build();

    const writeReview: Navigation = new Navigation.Builder('write-review')
      .withText('Write a Review')
      .withLink('/write-review')
      .withIconClass('far fa-edit')
      .withBoxed(true)
      .build();

    const searchReview: Navigation = new Navigation.Builder('search-review')
      .withText('Search Review')
      .withLink('/search-review')
      .withIconClass('fas fa-search')
      .build();

    const profile: Navigation = new Navigation.Builder('profile')
      .withText('josephokharedia')
      .withLink('/profile')
      .withIconClass('far fa-user-circle')
      .withShowOnlyWhenAuthenticated(true)
      .build();


    return [logout, login, register, writeReview, searchReview, profile];
  }
}
