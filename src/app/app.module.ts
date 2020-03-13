import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkeletonLoaderPipe } from './skeleton-loader.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonLoaderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
