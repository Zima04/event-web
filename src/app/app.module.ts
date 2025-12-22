import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

import { OrganizationChartModule } from 'primeng/organizationchart';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {TitleSectionComponent} from "./components/title-section/title-section.component";
import {ScheduleScreenComponent} from "./components/schedule-section/schedule-section.component";
import {CountdownModule} from "ngx-countdown";
import {DateCounterComponent} from "./components/date-counter/date-counter.component";
import {WishesSectionComponent} from "./components/wishes-section/wishes-section.component";
import {WelcomeCardComponent} from "./components/welcome-card/welcome-card.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DressCodeSectionComponent} from "./components/dress-code-section/dress-code-section.component";
import {ContactsSectionComponent} from "./components/contacts-section/contacts-section.component";
import {TelegramCardComponent} from "./components/telegram-card/telegram-card.component";
import {GoodbyeCardComponent} from "./components/goodbye-card/goodbye-card.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TitleSectionComponent,
    ScheduleScreenComponent,
    DateCounterComponent,
    WishesSectionComponent,
    WelcomeCardComponent,
    DressCodeSectionComponent,
    ContactsSectionComponent,
    TelegramCardComponent,
    GoodbyeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    TimelineModule,
    CardModule,
    ChipModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
