import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  // o onChanges ele geralmente é utilizado quando o componente irá receber ou não algum valor na inicializacao ou via request
  @Input() rating: number = 0
  
  startWith: number = 0

  ngOnChanges(): void {
    this.startWith = this.rating * 64 / 5
  }

}
