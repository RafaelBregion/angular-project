import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { CadastroCuidadorComponent } from './cadastro-cuidador/cadastro-cuidador.component'
import { CadastroIdosoComponent } from './cadastro-idoso/cadastro-idoso.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-cuidador', component: CadastroCuidadorComponent },
  { path: 'cadastro-idoso', component: CadastroIdosoComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
