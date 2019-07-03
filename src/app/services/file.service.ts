import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  isCordova: boolean;

  constructor(private file: File, private plt: Platform) {
    this.isCordova = plt.is('cordova');
  }

  public async checkFile(path: string[], file: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.isCordova) {
        this.file.checkFile([this.file.dataDirectory, ...path].join('/'), file).then(found => {
          resolve(found);
        }).catch(error => {
          resolve(false);
        })
      } else {
        resolve(false);
      }
    });
  }


}
