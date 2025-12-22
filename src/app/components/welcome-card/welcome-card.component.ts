import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeCardComponent {

}
