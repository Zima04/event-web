import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'telegram-card',
  templateUrl: './telegram-card.component.html',
  styleUrls: ['./telegram-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelegramCardComponent {

}
