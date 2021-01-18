import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		component: DashboardComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes), CommonModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
