import {Component, OnInit} from '@angular/core';
import {ReviewService} from '../review.service';
import {Review} from '../model/review.model';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.css']
})
export class ProfileReviewsComponent implements OnInit {

  public myReviews: Review[];

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.myReviews = [];//this.reviewService.getLatestReviews();
  }

}
