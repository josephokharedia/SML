import {ReviewSummaryComponent} from './review-summary/review-summary.component';
import {Routes} from '@angular/router';
import {ReviewComponent} from './review/review.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WriteReviewComponent} from './write-review/write-review.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchReviewComponent} from './search-review/search-review.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileSettingsComponent} from './profile-settings/profile-settings.component';
import {ProfileReviewsComponent} from './profile-reviews/profile-reviews.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/review-summary',
    pathMatch: 'full'
  },
  {
    path: 'review-summary',
    component: ReviewSummaryComponent
  },
  {
    path: 'review/:id',
    component: ReviewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'write-review',
    component: WriteReviewComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent
  },
  {
    path: 'search-review',
    component: SearchReviewComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'reviews'},
      {path: 'reviews', component: ProfileReviewsComponent},
      {path: 'settings', component: ProfileSettingsComponent},
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
