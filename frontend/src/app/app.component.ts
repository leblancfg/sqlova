import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  question = '';
  fileToUpload: File = null;
  @ViewChild('form') form;
  @ViewChild('variable') variable;
  isUploading = false;
  result = null;

  constructor(private MatSnackBar: MatSnackBar, private HttpClient: HttpClient) {}


  async sendQuestion() {
    try {
      this.isUploading = true;
      const formData: FormData = new FormData();
      formData.append('csv', this.fileToUpload, this.fileToUpload.name);
      formData.append('q', this.question);
      this.result = await this.HttpClient.post('api/process-question', formData).pipe().toPromise();
    }

    catch (err) {
      this.MatSnackBar.open(err.message, 'Error!', { duration: 5000 })
    }

    finally {
      this.isUploading = false;
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
