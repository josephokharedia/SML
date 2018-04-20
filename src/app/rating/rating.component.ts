import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  private static _DEFAULT_COLOR: string = '#212529';
  private static _COLORS: Map<number, string> = new Map<number, string>();
  @Input('rating')
  private _currentRating: number;
  @Input('editable')
  private _editable: boolean;
  @Input('size')
  private _size: RatingSize;

  constructor() {
    RatingComponent.init();
  }

  static init() {
    RatingComponent._COLORS.set(1, '#e8441f');
    RatingComponent._COLORS.set(2, '#ffb128');
    RatingComponent._COLORS.set(3, '#ffd02d');
    RatingComponent._COLORS.set(4, '#73d7a8');
    RatingComponent._COLORS.set(5, '#31b744');
  }

  ngOnInit() {
    this._currentRating = this._currentRating ? +this._currentRating : 0;
    this._size = this._size === undefined ? RatingSize.NORMAL : this._size;
    this._editable = Boolean(this._editable);
  }

  getRatingColor(i: number): string {
    if (this.lessOrEqualToCurrentRating(i)) {
      return RatingComponent._COLORS.get(+this._currentRating);
    }

    return RatingComponent._DEFAULT_COLOR;
  }

  lessOrEqualToCurrentRating(i: number): boolean {
    return i <= this._currentRating;
  }

  setCurrentRating(i: number): void {
    if (!this._editable) return;
    this._currentRating = i;
  }

  isEditable() {
    return this._editable;
  }

  isNormalSize() {
    return this._size === RatingSize.NORMAL;
  }

  isLargeSize() {
    return this._size === RatingSize.LARGE;
  }

}

export enum RatingSize {
  NORMAL = 1,
  LARGE
}
