import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstwhithtabsPage } from './firstwhithtabs.page';

const routes: Routes = [
  {
    path: '',
    component: FirstwhithtabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstwhithtabsPage]
})
export class FirstwhithtabsPageModule {}
