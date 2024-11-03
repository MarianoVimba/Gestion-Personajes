import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [

    {
        path: 'lista',
        component: ListComponent
    },
    {
        path: 'detalles/:id',
        component: DetailComponent
    },
    {
        path: 'formulario',
        component: FormComponent
    },
];
