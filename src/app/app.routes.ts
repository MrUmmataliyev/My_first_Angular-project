import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:'home', title: 'Home Page', component: HomeComponent},
    {path:'', title: 'Home Page', component: HomeComponent},
    {path:'about', title: 'About us', component: AboutComponent},
    {path:'contact', title: 'Contacts', component: ContactComponent}
];
