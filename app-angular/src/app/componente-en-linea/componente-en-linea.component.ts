import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
    <h1>{{tituloComponenteInLine}}</h1>
    <p>fuente mas grande</p>
  `,
  styles: `
    h1 {
      color: blue;
    }

    p {
      font-size: 20px;
    }
  `
})
export class ComponenteEnLineaComponent {
  tituloComponenteInLine = "Componente Inline";
}
