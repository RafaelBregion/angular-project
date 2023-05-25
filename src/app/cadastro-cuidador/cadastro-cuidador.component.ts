import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-cadastro-cuidador',
  templateUrl: './cadastro-cuidador.component.html',
  styleUrls: ['./cadastro-cuidador.component.css'],
})
export class CadastroCuidadorComponent implements OnInit {
  tab: string = 'cadastro-cuidador'

  cuidador = 'Cadastro do Cuidador'
  idoso = 'Cadastro do Idoso'

  constructor() {}

  ngOnInit() {}
}
