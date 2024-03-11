import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompanyComponent } from './components/company/company.component';
import { OrderComponent } from './components/order/order.component';
import { FaqComponent } from './components/faq/faq.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Burger-app',
  },
  {
    path: 'order',
    component: OrderComponent,
    title: 'Burger-app-order',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Burger-app-contact',
  },
  {
    path: 'company',
    component: CompanyComponent,
    title: 'Burger-app-company',
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'Burger-app-faq',
  },
];

export default routeConfig;
