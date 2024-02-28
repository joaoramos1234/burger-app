import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { StepComponent } from '../step/step.component';
import { CtaComponent } from '../cta/cta.component';
import { PhoneComponent } from '../phone/phone.component';
import { FaqComponent } from '../faq/faq.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StepComponent,
    CtaComponent,
    PhoneComponent,
    FaqComponent,
    MenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
