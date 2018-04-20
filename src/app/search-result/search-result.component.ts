import {Component, OnInit} from '@angular/core';
import {UiService} from '../ui.service';
import {ReviewService} from '../review.service';
import {Review} from '../model/review.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public reviews: Review[];

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.reviews = this.reviewService.getLatestReviews();
  }

}
