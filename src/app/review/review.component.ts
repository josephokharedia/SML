import {Component, OnInit} from '@angular/core';
import {Review} from '../model/review.model';
import {ReviewService} from '../review.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public review: Review;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.route
      .paramMap
      .subscribe((params) => {
        console.log(`Route observed with id:${params['id']}`);
        this.review = this.reviewService.getReview(+params['id']);
      });
  }

}
