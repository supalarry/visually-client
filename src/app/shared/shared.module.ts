import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    // material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    // material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    // Visually
    FileUploadComponent,
  ],
})
export class SharedModule {}
