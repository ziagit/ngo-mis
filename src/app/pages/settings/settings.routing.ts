import { Routes, RouterModule } from "@angular/router";
import { SettingsComponent } from './settings.component';
import { ProvincesComponent } from './components/provinces/provinces.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { TypesComponent } from './components/types/types.component';

const routes: Routes =[
    {
        path: '',
        component: SettingsComponent,
        children:[
            {path: '', redirectTo: 'provinces', pathMatch: 'full'},
            {path: 'provinces', component: ProvincesComponent},
            {path: 'districts', component: DistrictsComponent},
            {path: 'sectors', component: SectorsComponent},
            {path: 'types', component: TypesComponent},
        ]
    }
]
export const routing = RouterModule.forChild(routes);