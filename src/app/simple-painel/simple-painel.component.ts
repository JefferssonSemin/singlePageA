import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-painel',
  templateUrl: './simple-painel.component.html',
  styleUrls: ['./simple-painel.component.css']
})
export class SimplePainelComponent implements OnInit {

    @Input() titulo;
    @Input() col;
    @Input() tipo = 'info';

  constructor() { }

  ngOnInit() {
  }

}
