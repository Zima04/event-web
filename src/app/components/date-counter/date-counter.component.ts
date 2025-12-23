import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'date-counter',
  templateUrl: './date-counter.component.html',
  styleUrls: ['./date-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateCounterComponent {
  public config: any

  ngOnInit() {
    this.config = {
      stopTime: new Date(2026, 3, 24, 12, 0, 0).getTime(),
      format: 'DD:HH:mm:ss',
      prettyText: this.prettyTemplate
    };
  }

  prettyTemplate = (text: string) => {

    const now = Date.now();
    let left = new Date(2026, 3, 24, 12, 0, 0).getTime() - now;

    if (left < 0) left = 0;

    const days = Math.floor(left / (1000 * 60 * 60 * 24));
    const hours = Math.floor((left / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((left / (1000 * 60)) % 60);
    const seconds = Math.floor((left / 1000) % 60);

    // добавляем ведущий ноль для часов/минут/секунд
    const hh = hours.toString().padStart(2, '0');
    const mm = minutes.toString().padStart(2, '0');
    const ss = seconds.toString().padStart(2, '0');

    return `
      <div class="d-flex">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="fs-72 pb-2">
              ${days}
            </div>
            <div class="fs-20 mulish-light">
              дней
            </div>
        </div>
        <span class="fs-72 px-2">:</span>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="fs-72 pb-2">
             ${hh}
            </div>
            <div class="fs-20 mulish-light">
              часов
            </div>
        </div>
         <span class="fs-72 px-2">:</span>
         <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="fs-72 pb-2">
             ${mm}
            </div>
            <div class="fs-20 mulish-light">
              минут
            </div>
        </div>
         <span class="fs-72 px-2">:</span>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="fs-72 pb-2">
             ${ss}
            </div>
            <div class="fs-20 mulish-light">
              секунд
            </div>
        </div>
      </div>
    `;
  };
}
