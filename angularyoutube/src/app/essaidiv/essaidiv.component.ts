import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-essaidiv',
  templateUrl: './essaidiv.component.html',
  styleUrls: ['./essaidiv.component.scss'],
})
export class EssaidivComponent implements OnInit {
  public toggle: boolean = true;

  ngOnInit(): void {}

  public change(): void {
    this.toggle = !this.toggle;
  }

  public expand(): void {
    if (this.toggle) {
      alert('hi');
    }
  }
}
