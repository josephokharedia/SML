import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

declare var google;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public simple: boolean;
  @Input()
  public residentialType: ResidentialType;
  @Output('placeChanged')
  public placeChangedEvent: EventEmitter<string> = new EventEmitter<string>();
  private autoComplete;
  @ViewChild('searchControl')
  public searchElementRef: ElementRef;
  private options;


  ngOnInit() {

    this.options = {
      componentRestrictions: {country: 'za'}
    };

    this.autoComplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, this.options);
    this.autoComplete.addListener('place_changed', () => {
      const place = this.autoComplete.getPlace();
      if (!place.geometry) {
        console.log('Nothing to see here');
        return;
      }
      console.log('[place-id]:', place.place_id);
      this.placeChangedEvent.emit(place.place_id);
    });



    this.simple = Boolean(this.simple);
    this.residentialType = this.residentialType === undefined ? ResidentialType.STREET : this.residentialType;
  }

  setToComplex(): void {
    this.residentialType = ResidentialType.COMPLEX;
  }

  setToStreet(): void {
    this.residentialType = ResidentialType.STREET;
  }

  isStreet(): boolean {
    return this.residentialType === ResidentialType.STREET;
  }

  isComplex(): boolean {
    return this.residentialType === ResidentialType.COMPLEX;
  }
}

export enum ResidentialType {
  STREET = 1,
  COMPLEX
}
