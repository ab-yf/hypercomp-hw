
import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isFlexLayout: boolean;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.isGridLayout$.subscribe(isGridLayout => {
      this.isFlexLayout = !isGridLayout;
    });
  }
}
