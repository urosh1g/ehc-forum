import { Route } from '@angular/router';
import { CategoryComponent } from '../categories/components/category/category.component';

export const appRoutes: Route[] = [
    {
        path: 'category',
        component: CategoryComponent
    }
];