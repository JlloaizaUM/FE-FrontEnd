import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadDishService } from '../../services/upload-dish.service';
import { UploadFilesService } from '../../services/upload-files.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  priceEdit: boolean = false;
  nameEdit: boolean = false;
  descEdit: boolean = false;
  notNumber: boolean = false;
  isSizeError: boolean = false;
  currentFile: File;

  editableDish: any;

  @Input() dish: any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer,
    private uploadService: UploadFilesService) { }

  ngOnInit() { 
    this.editableDish = Object.assign({}, this.dish); 
  }

  onPriceEdit() {
    console.log(this.editableDish.precio);
    if (this.editableDish.precio != null || !isNaN(this.editableDish.precio)) {
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
        this.editableDish.url=data.url;
      });
    }

    if (JSON.stringify(this.editableDish) !== JSON.stringify(this.dish)) {
      this.passEntry.emit(this.editableDish);
    }
    this.activeModal.close('Close click');
  }

  async selectFile(event: Event) {
    const URL = window.URL || window.webkitURL;
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      let fileSize = ((fileList[0].size / 1024) / 1024);
      if (fileSize < 2) {
        this.currentFile = fileList[0];
        let url = URL.createObjectURL(fileList[0]);
        this.editableDish.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(this.editableDish);
      } else {
        element.files = undefined;
        this.isSizeError = true;
        await this.delay(1000);
        this.isSizeError = false;
      }
    }
  }

  async uploadImg(file: File) {
    let promise = await this.uploadService.upload(file, this.editableDish.id);
    return promise;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
