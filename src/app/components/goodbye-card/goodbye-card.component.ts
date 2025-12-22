import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'goodbye-card',
  templateUrl: './goodbye-card.component.html',
  styleUrls: ['./goodbye-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodbyeCardComponent {

}
