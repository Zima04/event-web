import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'wishes-section',
  templateUrl: './wishes-section.component.html',
  styleUrls: ['./wishes-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishesSectionComponent {
}
