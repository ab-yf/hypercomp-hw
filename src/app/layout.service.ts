
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isGridLayoutSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isGridLayout$: Observable<boolean> = this.isGridLayoutSubject.asObservable();

  toggleLayout(): void {
    this.isGridLayoutSubject.next(!this.isGridLayoutSubject.value);
  }
}
