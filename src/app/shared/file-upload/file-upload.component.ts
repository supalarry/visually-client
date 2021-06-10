import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileUpload } from '../models/file-upload.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { environment } from '../../../environments/environment';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() fileType: string;
  @Output() onFileUploaded = new EventEmitter<FileUpload>();
  fileName = '';
  uploading = false;
  uploadSub: Subscription | null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('file', file);

      const upload$ = this.http
        .post(`${environment.visuallyApiVideosRender}`, formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));

      this.uploadSub = upload$.subscribe((event: any) => {
        if (event.type == HttpEventType.UploadProgress && event.total) {
          this.uploading = true;
          this.onFileUploaded.emit({
            name: this.fileName,
            status: 'progress',
            url: '',
          });
        } else if (event.type == HttpEventType.Response) {
          this.onFileUploaded.emit({
            name: this.fileName,
            status: 'finished',
            url: event.body?.url,
          });
        }
      });
    }
  }

  reset() {
    this.fileName = '';
    this.uploading = false;
    this.uploadSub = null;
  }
}
