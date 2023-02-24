import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildViewComponent } from './child/child-view.component';
import { CmsAddComponent } from './cms/cms-add/cms-add.component';
import { CmsUpdateComponent } from './cms/cms-update/cms-update.component';
import { CmsViewComponent } from './cms/cms-view/cms-view.component';

const routes: Routes = [
  { path: 'child', component: ChildViewComponent },
  { path: 'cms/view', component: CmsViewComponent },
  { path: '', component: CmsViewComponent },
  { path: 'cms/add', component: CmsAddComponent },
  { path: 'cms/update', component: CmsUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
