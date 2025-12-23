import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";
import {AssetsPreloadService} from "./services/assets-preload.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading = true;

  constructor(private preloader: AssetsPreloadService) {}

  async ngOnInit() {

    setTimeout(()=>{
      this.loading = false;
    },4000)

    const images = [
      '/assets/images/vlad.png',
      '/assets/images/maria.png'
    ];

    const fonts = [
      'Cherish', 'Marck', 'Mulish', 'Mulish-Light', 'Majestic', 'Isadora'
    ];

    await this.preloader.preloadAll(images,fonts);

    AOS.init();
    AOS.refresh();

    window.addEventListener('scroll', () => {
      AOS.refresh();
    }, { once: true });
  }
}
