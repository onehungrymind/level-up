import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { DevelopersListComponent } from './items/developers-list/developers-list.component';
import { DeveloperDetailsComponent } from './items/developer-details/developer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DevelopersListComponent,
    DeveloperDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
