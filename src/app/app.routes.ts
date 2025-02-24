import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormFillComponent } from './components/form-fill/form-fill.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [

    
    {path:'home',component:HomeComponent},
    {path:"form",component:FormFillComponent},
    {path:'',redirectTo:"home",pathMatch:"full"},


];
