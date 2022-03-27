import { Component, OnInit } from '@angular/core';
import { ExistsURLService } from '../services/exists-url.service';
import { GetRestDataService } from '../services/get-rest-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadFilesService } from '../services/upload-files.service';
import { UpdatePageService } from '../services/update-page.service';

@Component({
    selector: 'app-panel-config',
    templateUrl: './panel-config.component.html',
    styleUrls: ['./panel-config.component.css']
})
export class PanelConfigComponent implements OnInit {

    currentFile: File;
    isSizeError: boolean = false;
    isValidUrl: boolean;
    validated: boolean;
    page = {
        id: '',
        name: '',
        description: '',
        user_url: '',
        img_avatar: './assets/img/no-image.jpg',
        img_banner: '',
        footer_info: ''
    };
    img_url: any;

    apage = {
        id: '',
        name: '',
        description: '',
        user_url: '',
        img_avatar: './assets/img/no-image.jpg',
        img_banner: '',
        footer_info: ''
    };

    focus;
    focus1;

    constructor(
        private existsUrlService: ExistsURLService,
        private restDataService: GetRestDataService,
        private sanitizer: DomSanitizer,
        private uploadService: UploadFilesService,
        private updatePageService: UpdatePageService
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    async getData(){
        this.restDataService.getRestaurantData('frisby').then(
            data => {
                this.page = Object.assign(this.page, data);
                this.apage = Object.assign(this.apage, data);
            }
        );
    }

    async selectFile(event: Event) {
        const URL = window.URL || window.webkitURL;
        const element = event.currentTarget as HTMLInputElement;
        let fileList: FileList | null = element.files;
        if (fileList) {
            let fileSize = ((fileList[0].size / 1024) / 1024);

            if (fileSize <= 2) {
                this.currentFile = fileList[0];
                let url = URL.createObjectURL(fileList[0]);
                this.img_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            } else {
                element.files = undefined;
                this.isSizeError = true;
                await this.delay(1000);
                this.isSizeError = false;
            }
        }
    }

    async uploadImg(file: File) {
        let promise = await this.uploadService.upload(file, this.page.id);
        return promise;
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async existsUrl() {
        this.validated = true;
        if (this.page.user_url != this.apage.user_url) {
            await this.existsUrlService.getURLExists(this.page.user_url).then(
                data => {
                    this.isValidUrl = !data['exists'];
                }
            );
        } else {
            this.isValidUrl = true;
        }
    }

    img_restablish() {
        this.img_url = null;
    }

    async update() {
        await this.existsUrl();

        if (this.isValidUrl){
            if (this.currentFile) {
                await this.uploadImg(this.currentFile).then(data => {
                    this.page.user_url = data.url;
                });
            }

            this.updatePageService.updatePage(this.page).subscribe(
                data=>{this.getData();}
            );
            
        }
    }

    regresar(){
        
    }
}
