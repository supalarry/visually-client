import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { ExplanationComponent } from './explanation/explanation.component';
import { TryComponent } from './try/try.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, ExplanationComponent, TryComponent, EmailComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
