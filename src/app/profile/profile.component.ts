import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../ui.service';
import {Navigation} from '../model/navigation.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private _navigations: Navigation[];
  private _navActiveId;

  constructor(public uiService: UiService) {
  }

  get navigations() {
    return this._navigations ? this._navigations : [];
  }

  ngOnInit() {
    this.uiService.setActiveNavId('profile');
    this._navActiveId = 'reviews';

    this._navigations = [];
    this._getAllLinks().forEach((nav) => {
      this._navigations.push(nav);
    });
  }

  ngOnDestroy(): void {
    this.uiService.reset();
  }

  isActive(nav: Navigation) {
    return (nav.id === this._navActiveId);
  }

  _setActive(nav: Navigation) {
    this._navActiveId = nav.id;
  }

  menuAction(nav: Navigation) {
    this._setActive(nav);
  }

  _getAllLinks(): Navigation[] {

    const reviews: Navigation = new Navigation.Builder('reviews')
      .withText('Reviews')
      .withLink('reviews')
      .withIconClass('fas fa-star')
      .build();

    const settings: Navigation = new Navigation.Builder('settings')
      .withText('Settings')
      .withLink('settings')
      .withIconClass('fas fa-cog')
      .build();

    return [reviews, settings];
  }

}
