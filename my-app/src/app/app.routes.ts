import { Routes } from '@angular/router';
import { LabComponent } from './lab/lab.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'labs',
        component: LabComponent
    }

    
];
