interface FileUpload {
  name: string;
  status: 'progress' | 'finished';
  url: string;
}

export { FileUpload };
