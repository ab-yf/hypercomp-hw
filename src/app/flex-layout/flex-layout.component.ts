
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ColorsActions from '../state/colors.actions';
import { AppState } from '../state';
import { LayoutService } from '../layout.service';



@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})
export class FlexLayoutComponent implements OnInit {
  headerColor: string;
  footerColor: string;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';


  constructor(
    private store: Store<AppState>,
    private layoutService: LayoutService
  ) {
    this.store.select('colors').subscribe(colors => {
      this.headerColor = colors.headerColor;
      this.footerColor = colors.footerColor;
    });
  }

  ngOnInit(): void {}

  changeColors(color: string): void {
    this.store.dispatch(ColorsActions.changeHeaderFooterColor({ color }));
  }

  submitForm(): void {
    // Handle form submission logic here

    // Toggle layout on submit
    this.layoutService.toggleLayout();
  }

  resetColors(): void {
    this.store.dispatch(ColorsActions.changeHeaderFooterColor({ color: '#ddd' }));
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
    this.input4 = '';
  }
}
