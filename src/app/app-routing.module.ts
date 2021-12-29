import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MachinesComponent } from './machines/machines.component';
import { PlanningComponent } from './planning/planning.component';
import { EnergyComponent } from './Resource/energy/energy.component';
import { ManPowerComponent } from './Resource/man-power/man-power.component';
import { MaterialComponent } from './Resource/material/material.component';
import { EnvironmentalParametersComponent } from './setting/environmental-parameters/environmental-parameters.component';
import { SettingProductComponent } from './setting/setting-product/setting-product.component';
import { SettingComponent } from './setting/setting.component';
import { UsageRatioSetComponent } from './setting/usage-ratio-set/usage-ratio-set.component';
import { SiteFactoriesComponent } from './site/site-factories/site-factories.component';
import { SiteFunctionsComponent } from './site/site-functions/site-functions.component';
import { SiteLinesComponent } from './site/site-lines/site-lines.component';
import { SiteMachinesComponent } from './site/site-machines/site-machines.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'planning',
    component: PlanningComponent,
    pathMatch: 'full',
  },
  {
    path: 'setting',
    component: SettingComponent,
    pathMatch: 'full',
  },
  {
    path: 'Environmental-Parameters',
    component: EnvironmentalParametersComponent,
    pathMatch: 'full',
  },
  {
    path: 'UsageRatioSetComponent',
    component: UsageRatioSetComponent,
    pathMatch: 'full',
  },
  {
    path: 'Setting-Product',
    component: SettingProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'machines/:tab',
    component: MachinesComponent,
    pathMatch: 'full',
  },
  {
    path: 'site-machine',
    component: SiteMachinesComponent,
    pathMatch: 'full',
  },
  {
    path: 'site-functions',
    component: SiteFunctionsComponent,
    pathMatch: 'full',
  },
  {
    path: 'site-lines',
    component: SiteLinesComponent,
    pathMatch: 'full',
  },
  {
    path: 'site-factories',
    component: SiteFactoriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'resource-material/:tab',
    component: MaterialComponent,
    pathMatch: 'full',
  },
  {
    path: 'resource-energy',
    component: EnergyComponent,
    pathMatch: 'full',
  },
  {
    path: 'resource-man-power',
    component: ManPowerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
