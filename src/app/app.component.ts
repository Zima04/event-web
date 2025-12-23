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
    },3000)

    // const images = [
    //   '/assets/images/vlad.png',
    //   '/assets/images/maria.png'
    // ];
    //
    // await this.preloader.preloadAll(images);
    // this.loading = false;

    AOS.init();
    AOS.refresh();

    window.addEventListener('scroll', () => {
      AOS.refresh();
    }, { once: true });
  }
}
