import { Component, OnInit } from '@angular/core';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploader: Uploader = new Uploader({apiKey: "free"});
  options: UploaderOptions = {
    multi: false
  };
  onUpdate = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  width = "600px";
  height = "375px"

}
