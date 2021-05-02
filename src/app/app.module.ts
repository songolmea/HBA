import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AttendanceComponent } from './content/attendance/attendance.component';
import { SystemComponent } from './content/system/system.component';
import { ClassesComponent } from './content/classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AttendanceComponent,
    SystemComponent,
    ClassesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
