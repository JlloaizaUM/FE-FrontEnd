import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFilesService } from '../services/upload-files.service';
import { DomSanitizer } from '@angular/platform-browser';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {

  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  isSizeError: boolean = false;
  nDish: any = {
    name: 'Nombre del plato',
    descripcion: 'Descripción',
    precio: '0',
    url: ''
  };

  @ViewChild("imgInput") imgInput: ElementRef;

  @Input() cat: any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private uploadService: UploadFilesService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  sendChanges() {
    this.passEntry.emit(this.nDish);
    this.activeModal.close('Close click');
  }

  onClose() {
    this.activeModal.close('Close click');
  }

  async selectFile(event: Event) {
    const URL = window.URL || window.webkitURL;
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      let fileSize = ((fileList[0].size / 1024) / 1024);      

      if (fileSize <= 2) {
        this.currentFile = fileList[0];
        this.nDish.url = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(fileList[0]));
      } else {
        element.files = undefined;
        this.isSizeError = true;
        await this.delay(1000);
        this.isSizeError = false;
      }
    }
  }

  upload() {
    this.message = undefined;
    //this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.nDish.url = event.body.url;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    //this.selectedFiles = undefined;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
