import { Component, Input, OnInit } from '@angular/core';
import { appareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string | undefined;
  @Input() appareilStatus: string | undefined;
  @Input() indexOfAppareil: number;
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  constructor(private appareilService: appareilService) {}
  onSwitchOn() {
    this.appareilService.SwitchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.SwitchDownOne(this.indexOfAppareil);
  }

  ngOnInit(): void {}
}
