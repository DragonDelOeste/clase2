import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public name:string = '';
  public apellido:string = '';
  public segundoNombre:string;

  constructor() {
    this.segundoNombre = 'Antonio'
   }

  ngOnInit(): void {
  }

  public cambiarValorPropiedad(){
    this.name = 'asdasdasdasd';
  }

  public change(event:Event){
    console.log(event);
  }

}
