import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    // AOS.init({disable: 'mobile'});
    AOS.init();
    AOS.refresh();
  }
}
