import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CadastroCuidadorComponent } from './cadastro-cuidador/cadastro-cuidador.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, CadastroCuidadorComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
