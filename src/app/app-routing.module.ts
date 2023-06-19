import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

const routes: Routes = [
  { path: 'bootstrap', component: BootstrapTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
