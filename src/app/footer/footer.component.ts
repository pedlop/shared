import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  text() {
    let i = 0;
    let idade = 21;
    let ano = 1996;
    while(i <= idade) {
      console.log('Eu tenho: ', i, 'anos no ano de ', ano);
      i++;
      ano = ano + 1;
    }

  }
}
