import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleSectionComponent {

}
