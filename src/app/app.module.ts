import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HttpModule,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
