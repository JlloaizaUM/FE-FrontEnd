import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UploadFilesService } from '../services/upload-files.service';
import { DomSanitizer } from '@angular/platform-browser';


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
    precio: 0,
    url: ''
  };

  priceEdit: boolean = false;
  nameEdit: boolean = false;
  descEdit: boolean = false;
  notNumber: boolean = false;

  @ViewChild("imgInput") imgInput: ElementRef;

  @Input() pageID: any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private uploadService: UploadFilesService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  onPriceEdit() {
    if (this.nDish.precio != null || !isNaN(this.nDish.precio)) {
      this.priceEdit = !this.priceEdit;
      this.notNumber = false;
    } else {
      this.notNumber = true;
    }
  }

  onNameEdit() {
    this.nameEdit = !this.nameEdit;
  }

  onDescEdit() {
    this.descEdit = !this.descEdit;
  }

  async sendChanges() {
    if (this.currentFile) {
      await this.uploadImg(this.currentFile).then(data=>{
        this.nDish.url=data.url;
      });
    }

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

  async uploadImg(file: File) {
    let promise = await this.uploadService.upload(file, this.pageID);
    return promise;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
