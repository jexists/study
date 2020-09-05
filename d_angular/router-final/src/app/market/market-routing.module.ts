import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market.component';


const routes: Routes = [
    {
        path: '',
        children: [
            // { path: '', redirectTo: 'market'},
            { path: '', 
              component: MarketComponent, 
              pathMatch: 'full', },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketRoutingModule { }
