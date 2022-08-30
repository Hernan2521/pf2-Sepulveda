import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @Input() notas: Array<any> =[];
  constructor() { }

  ngOnInit(): void {
  }

}
