import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { EmptyComponent } from './components/empty/empty.component';


const routes: Routes = [
  { path: '', component: EmptyComponent },
  { path: 'pokemon/:nr', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
