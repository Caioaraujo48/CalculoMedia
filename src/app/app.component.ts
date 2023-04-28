import { getLocaleId } from '@angular/common';
import { Component, getNgModuleById } from '@angular/core';
import { find, findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  CodigoRMA : number = 10001;
  Nome : string = "Manoel Gomes";
  nota1 : number = 9;
  nota2 : number = 10;
  nota3 : number = 7;
  nota4 : number = 9;
  media : number = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
  imagem : string = "../assets/img/ManoelGomes.jpg"

  title = 'CalcularMedia';
}
