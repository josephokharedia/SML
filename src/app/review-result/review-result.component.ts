import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../model/review.model';

@Component({
  selector: 'app-review-result',
  templateUrl: './review-result.component.html',
  styleUrls: ['./review-result.component.css']
})
export class ReviewResultComponent implements OnInit {

  @Input()
  public review: Review;

  constructor() {
  }

  ngOnInit() {
  }

}
