import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumInfoComponent } from './components/album-info/album-info.component';

const routes: Routes = [
  {path:'', component: AlbumInfoComponent},
  {path: 'album-info', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
