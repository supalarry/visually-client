import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../shared/models/file-upload.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  progress = false;
  finished = false;
  url = '';
  constructor() {}

  ngOnInit(): void {}

  onFileUploaded(file: FileUpload) {
    if (file.status === 'progress') {
      this.progress = true;
    } else if (file.status === 'finished') {
      this.url = file.url;
      this.finished = true;
      this.progress = false;
    }
  }
}
