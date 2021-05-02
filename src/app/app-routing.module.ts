import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './content/system/system.component';
import { AttendanceComponent } from './content/attendance/attendance.component';
import { ClassesComponent } from './content/classes/classes.component';

const routes: Routes = [
  { path: '', redirectTo: 'system-component', pathMatch: 'full' },
  { path: 'system-component', component: SystemComponent },
  { path: 'attendance-component', component: AttendanceComponent },
  { path: 'classes-component', component: ClassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
