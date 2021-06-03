import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    // material
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    // material
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
