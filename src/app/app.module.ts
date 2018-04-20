import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {NavBarComponent} from './navbar/navbar.component';
import {ReviewSummaryComponent} from './review-summary/review-summary.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {UiService} from './ui.service';
import {ReviewComponent} from './review/review.component';
import {RatingComponent} from './rating/rating.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {appRoutes} from './app.route';
import {AdSpaceComponent} from './ad-space/ad-space.component';
import {ReviewService} from './review.service';
import {WriteReviewComponent} from './write-review/write-review.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {ReviewResultComponent} from './review-result/review-result.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchReviewComponent } from './search-review/search-review.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileReviewsComponent } from './profile-reviews/profile-reviews.component';
import { BlockUIModule } from 'ng-block-ui';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    ReviewSummaryComponent,
    FooterComponent,
    PageNotFoundComponent,
    ReviewComponent,
    RatingComponent,
    LoginComponent,
    RegisterComponent,
    AdSpaceComponent,
    WriteReviewComponent,
    SearchResultComponent,
    ReviewResultComponent,
    SearchReviewComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    ProfileReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BlockUIModule.forRoot({
      delayStart: 500,
      delayStop: 500
    })
  ],
  providers: [UiService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
