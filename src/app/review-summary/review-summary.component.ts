import {Component, OnInit} from '@angular/core';
import {ResidentialType} from '../search/search.component';
import {Review} from '../model/review.model';
import {ReviewService} from '../review.service';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.css']
})
export class ReviewSummaryComponent implements OnInit {

  // I need this so I can have access to enum values in html
  public ResidentialType = ResidentialType;

  constructor(private reviewService: ReviewService) {
  }

  private _latestReviews: Review[];
  private _mostViewedReviews: Review[];

  search(event: string) {
    console.log('review-summary: place-id:', event);
  }

  get latestReviews(): Review[] {
    return this._latestReviews;
  }

  set latestReviews(value: Review[]) {
    this._latestReviews = value;
  }

  get mostViewedReviews(): Review[] {
    return this._mostViewedReviews;
  }

  set mostViewedReviews(value: Review[]) {
    this._mostViewedReviews = value;
  }

  ngOnInit() {
    this.latestReviews = this.reviewService.getLatestReviews();
    this.mostViewedReviews = this.reviewService.getMostViewedReviews();
  }


}
