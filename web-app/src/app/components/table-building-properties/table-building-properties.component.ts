import { AfterViewInit, OnDestroy } from "@angular/core";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { take } from "rxjs/operators";
import { PropertyChangeEvent } from "src/app/models/PropertyChangeEvent";
import { PropertiesService } from "src/app/services/properties.service";
import { DialogEditPropertiesComponent } from "../dialog-edit-properties/dialog-edit-properties.component";


@Component({
	selector: "app-table-building-properties",
	templateUrl: "./table-building-properties.component.html",
	styleUrls: ["./table-building-properties.component.css"],
})
export class TableBuildingPropertiesComponent implements AfterViewInit, OnDestroy{
	displayedColumns: string[] = ["address", "area", "city", "country", "actions"];
	dataSource;
	private _serviceSubscription;
	constructor(private propertiesService: PropertiesService,
		public dialog: MatDialog) {
			this._serviceSubscription = this.propertiesService.onBuildingPropertyChange.subscribe({
				next: (event: PropertyChangeEvent) => {
					console.log(`Received message #${event.eventId}: ${event.message}`);
					this.dataSource = this.dataSource.filter(prop => prop.id !== event.eventPayload.id);
				}
			})
	}

	ngOnDestroy(): void {
		this._serviceSubscription.unsubscribe();
	}

	ngAfterViewInit(): void {
	    this.propertiesService.getBuildingProperties().subscribe((buildingProperties) =>{
			this.dataSource = buildingProperties;
		})
	}

	edit(e: any) {
		const dialogRef = this.dialog.open(DialogEditPropertiesComponent, {
			width: '350px',
			data: e
		});

		dialogRef.afterClosed().pipe(take(1)).subscribe(editresult => {
			switch(editresult.action) {
				case 'delete':
					this.propertiesService.deleteBuildingProperties(editresult.item);
					break;

				case 'update':
					this.propertiesService.updateBuildingProperties(editresult.item);
					break;
			}
		});
	}

}
