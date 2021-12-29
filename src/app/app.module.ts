import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './Shared/side-bar/side-bar.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeLineComponent } from './dashboard/time-line/time-line.component';
import { CurrentActivityComponent } from './dashboard/current-activity/current-activity.component';
import { PerformanceComponent } from './dashboard/performance/performance.component';
import { CycleTimeComponent } from './dashboard/cycle-time/cycle-time.component';
import { FullComponent } from './full/full.component';
import { ButtonModule, CheckBoxAllModule, CheckBoxModule, ChipListModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MenuAllModule, SidebarModule, TabAllModule, ToolbarModule, TreeViewAllModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewAllModule, ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DropDownListAllModule, DropDownListModule, ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { PerformanceCircleProgressBarComponent } from './dashboard/performance/performance-circle-progress-bar/performance-circle-progress-bar.component';
import { PerformanceStraightProgressBarComponent } from './dashboard/performance/performance-straight-progress-bar/performance-straight-progress-bar.component';
import { CalendarModule, DatePickerAllModule, DatePickerModule, DateRangePickerModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerComponent } from './Shared/side-bar/date-picker/date-picker.component';
import { MachinesComponent } from './machines/machines.component';
import { MachineInfoComponent } from './machines/machine-info/machine-info.component';
import { MachineStateComponent } from './machines/machine-state/machine-state.component';
import { RouterModule, Routes } from '@angular/router';
import { SplineChartComponent } from './machines/machine-state/spline-chart/spline-chart.component';
import { ColumnStackedChartComponent } from './machines/machine-state/column-stacked-chart/column-stacked-chart.component';
import { ColumnStackedFullHChartComponent } from './machines/machine-state/column-stacked-full-h-chart/column-stacked-full-h-chart.component';
import { SiteMachinesComponent } from './site/site-machines/site-machines.component';
import { EditService, GridAllModule, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http';
import { SiteFactoriesComponent } from './site/site-factories/site-factories.component';
import { SiteFunctionsComponent } from './site/site-functions/site-functions.component';
import { SiteLinesComponent } from './site/site-lines/site-lines.component';
import { CommonModule } from '@angular/common';
import { NumericTextBoxAllModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ColorPickerModule,
  SliderModule,
} from '@syncfusion/ej2-angular-inputs';
import { BulletChartAllModule } from '@syncfusion/ej2-angular-charts';
import { MachineHistoryComponent } from './machines/machine-history/machine-history.component';
import { MachineHistoryTimeLineComponent } from './machines/machine-history/machine-history-time-line/machine-history-time-line.component';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MaterialComponent } from './Resource/material/material.component';
import { EnergyComponent } from './Resource/energy/energy.component';
import { ManPowerComponent } from './Resource/man-power/man-power.component';
import { ResourceMaterialNavbarComponent } from './Resource/material/resource-material-navbar/resource-material-navbar.component';
import { ResourceMaterialTimeLineComponent } from './Resource/material/resource-material-time-line/resource-material-time-line.component';
import { ResourceMaterialSupplyComponent } from './Resource/material/resource-material-supply/resource-material-supply.component';
import { ResourceMaterialWeightComponent } from './Resource/material/resource-material-weight/resource-material-weight.component';
import { ResourceMaterialConsumptionComponent } from './Resource/material/resource-material-consumption/resource-material-consumption.component';
import { ResourceMaterialProductScrapComponent } from './Resource/material/resource-material-product-scrap/resource-material-product-scrap.component';
import { DatePickerCompairComponent } from './Shared/side-bar/date-picker-compair/date-picker-compair.component';
import { PlanningComponent } from './planning/planning.component';
import { PlanningRouteComponent } from './planning/planning-route/planning-route.component';
import { PlanningProcessesComponent } from './planning/planning-processes/planning-processes.component';
import { PlanningRouteFunctionComponent } from './planning/planning-route/planning-route-function/planning-route-function.component';
import { PlanningRouteTimeComponent } from './planning/planning-route/planning-route-time/planning-route-time.component';
import { PlanningRouteMachineComponent } from './planning/planning-route/planning-route-machine/planning-route-machine.component';
import { PlanningRouteResourceComponent } from './planning/planning-route/planning-route-resource/planning-route-resource.component';
import { MachineInfoSecondLevelComponent } from './machines/machine-info/machine-info-second-level/machine-info-second-level.component';
import { PlanningMachineSecondLevelComponent } from './planning/planning-route/planning-route-machine/planning-machine-second-level/planning-machine-second-level.component';
import { FactoriesComponent } from './dashboard/factories/factories.component';
import { LossTreeComponent } from './dashboard/loss-tree/loss-tree.component';
import { CurrentSplineChartComponent } from './dashboard/current-activity/current-spline-chart/current-spline-chart.component';
import { SettingComponent } from './setting/setting.component';
import { SettingAssignedMachinesComponent } from './setting/setting-assigned-machines/setting-assigned-machines.component';
import { SettingRawMachinesComponent } from './setting/setting-raw-machines/setting-raw-machines.component';
import { SettingProductComponent } from './setting/setting-product/setting-product.component';
import { EnvironmentalParametersComponent } from './setting/environmental-parameters/environmental-parameters.component';
import { UsageRatioSetComponent } from './setting/usage-ratio-set/usage-ratio-set.component';
import { UsageRatioTopComponent } from './setting/usage-ratio-set/usage-ratio-top/usage-ratio-top.component';
import { UsageRatioBottomComponent } from './setting/usage-ratio-set/usage-ratio-bottom/usage-ratio-bottom.component';

enableRipple(true);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,
    TimeLineComponent,
    CurrentActivityComponent,
    PerformanceComponent,
    CycleTimeComponent,
    FullComponent,
    PerformanceCircleProgressBarComponent,
    PerformanceStraightProgressBarComponent,
    DatePickerComponent,
    MachinesComponent,
    MachineInfoComponent,
    MachineStateComponent,
    SplineChartComponent,
    ColumnStackedChartComponent,
    ColumnStackedFullHChartComponent,
    SiteMachinesComponent,
    SiteFactoriesComponent,
    SiteFunctionsComponent,
    SiteLinesComponent,
    MachineHistoryComponent,
    MachineHistoryTimeLineComponent,

    MaterialComponent,
    EnergyComponent,
    ManPowerComponent,
    ResourceMaterialNavbarComponent,
    ResourceMaterialTimeLineComponent,
    ResourceMaterialSupplyComponent,
    ResourceMaterialWeightComponent,
    ResourceMaterialConsumptionComponent,
    ResourceMaterialProductScrapComponent,
    DatePickerCompairComponent,
    PlanningComponent,
    PlanningRouteComponent,
    PlanningProcessesComponent,
    PlanningRouteFunctionComponent,
    PlanningRouteTimeComponent,
    PlanningRouteMachineComponent,
    PlanningRouteResourceComponent,
    MachineInfoSecondLevelComponent,
    PlanningMachineSecondLevelComponent,
    FactoriesComponent,
    LossTreeComponent,
    CurrentSplineChartComponent,
    SettingComponent,
    SettingAssignedMachinesComponent,
    SettingRawMachinesComponent,
    SettingProductComponent,
    EnvironmentalParametersComponent,
    UsageRatioSetComponent,
    UsageRatioTopComponent,
    UsageRatioBottomComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    TimePickerModule,
    MenuAllModule,
    TextBoxModule,
    DropDownListModule,
    ButtonModule,
    ListBoxAllModule,
    TreeViewAllModule,
    ListViewAllModule,
    DropDownButtonModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    AccumulationChartAllModule,
    ProgressBarModule,
    FormsModule,
    DatePickerModule,
    GridModule,
    ChipListModule,
    CommonModule,
    ToolbarModule,
    GridAllModule,
    NumericTextBoxAllModule,
    DialogModule,
    DatePickerAllModule,
    DropDownListAllModule,
    CalendarModule,
    ReactiveFormsModule,
    CheckBoxModule,
    DashboardLayoutModule,
    SwitchModule,
    NgApexchartsModule,
    BulletChartAllModule,
    ColorPickerModule,
    SliderModule,
    FormsModule,
    ButtonModule,
    DateRangePickerModule,
    CheckBoxAllModule,
    TabAllModule,
    GridModule,
    ListViewModule,
    TreeViewModule,
    DateTimePickerModule,
    // Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [CategoryService, LineSeriesService, EditService, ToolbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
