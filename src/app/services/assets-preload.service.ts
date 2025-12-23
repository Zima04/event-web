import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsPreloadService {

  constructor() {}

  private preloadImages(imageUrls: string[]): Promise<void[]> {
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

  private preloadFonts(fonts: string[] = []): Promise<void[]> {
    const promises = fonts.map(f =>
      (document as any).fonts.load(`1em ${f}`)
    );
    return Promise.all(promises);
  }

  public preloadAll(imageUrls: string[],fonts: string[]): any{
    return Promise.all([
      this.preloadFonts(fonts),
      this.preloadImages(imageUrls)
    ])
  }
}
