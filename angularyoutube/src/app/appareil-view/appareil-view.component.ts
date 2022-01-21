import { Component, OnInit } from '@angular/core';
import { appareilService } from '../service/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit {
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 4000);
  });
  isAuth = false;

  appareils: any[] | undefined;

  constructor(private appareilService: appareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.SwitchOnAll();
  }

  ondown() {
    this.appareilService.SwitchOnDown();
  }
}
