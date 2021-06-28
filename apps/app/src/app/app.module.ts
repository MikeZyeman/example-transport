import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectionsComponent } from './connections/connections.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnectionsDetailComponent } from './connections/connections-detail/connections-detail.component';
import { StationComponent } from './station/station.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ConnectionsComponent, ConnectionsDetailComponent, StationComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, SharedModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
