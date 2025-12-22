import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'contacts-section',
  templateUrl: './contacts-section.component.html',
  styleUrls: ['./contacts-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsSectionComponent {

}
