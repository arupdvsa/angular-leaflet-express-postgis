import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { MarkerService } from "./services/marker.service";
import { PopUpService } from "./services/pop-up.service";
import { ShapeService } from "./services/shape.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { TableBuildingPropertiesComponent } from "./components/table-building-properties/table-building-properties.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertiesService } from "./services/properties.service";
import { DialogEditPropertiesComponent } from './components/dialog-edit-properties/dialog-edit-properties.component';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		DashboardComponent,
		TableBuildingPropertiesComponent,
		DialogEditPropertiesComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		MatTableModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
	],
	providers: [MarkerService, PopUpService, ShapeService, PropertiesService],
	bootstrap: [AppComponent],
})
export class AppModule {}
