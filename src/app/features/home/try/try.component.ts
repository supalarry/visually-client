import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../shared/models/file-upload.model';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss'],
})
export class TryComponent implements OnInit {
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
