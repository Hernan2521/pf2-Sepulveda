import { Component, OnInit } from '@angular/core';

import { RxjsPromesaService } from '../../services/rxjs-promesa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  alumno:any=[];
  //nombre:any= JSON.parse(this.alumno)

  constructor(
    private rxjsService: RxjsPromesaService
  ) { 
    this.rxjsService.obtenerNombres().then((alumno)=>{
      this.alumno=alumno;

    }).catch((error)=>{
      console.log(error)
    })
  }

  ngOnInit(): void {
    
  }

}
