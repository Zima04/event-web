import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsPreloadService {

  constructor() {}

  preloadImages(imageUrls: string[]): Promise<void[]> {
    const promises = imageUrls.map(url =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // чтобы не зависло на ошибках
      })
    );
    return Promise.all(promises);
  }

  preloadFonts(): Promise<void> {
    return document.fonts.ready.then(() => {});
  }

  preloadAll(imageUrls: string[]): Promise<void> {
    return Promise.all([
      this.preloadFonts(),
      this.preloadImages(imageUrls)
    ]).then(() => {});
  }
}
