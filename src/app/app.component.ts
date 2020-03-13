import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vm = null;
  skeletonMode: boolean = false;
  showLoading() {
    this.skeletonMode = true;
    of({ name: 'Anuj Sharma', role: 'UI Developer', address: 'Noida, India', country: 'India', region: 'U.P.' })
      .pipe(delay(5000))
      .subscribe(res => {
        this.skeletonMode = false;
        this.vm = res;
      });
  }
}
