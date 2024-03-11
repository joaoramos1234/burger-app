import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
