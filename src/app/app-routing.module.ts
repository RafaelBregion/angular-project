import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { CadastroCuidadorComponent } from './cadastro-cuidador/cadastro-cuidador.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-cuidador', component: CadastroCuidadorComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
