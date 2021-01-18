import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { BuildingItem } from 'src/app/models/BuildingItem';

@Component({
	selector: 'app-dialog-edit-properties',
	templateUrl: './dialog-edit-properties.component.html',
	styleUrls: ['./dialog-edit-properties.component.css']
})
export class DialogEditPropertiesComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DialogEditPropertiesComponent>,
		@Inject(MAT_DIALOG_DATA) public data: BuildingItem
	) { }

	buildingPropertiesForm = new FormGroup({
		address: new FormControl(''),
		city: new FormControl(''),
		country: new FormControl(''),
		roof_material: new FormControl(''),
		roof_type: new FormControl(''),
		area: new FormControl(''),
		storeys: new FormControl(''),
		height: new FormControl(''),
		geometry: new FormControl({ value: '', disabled: true }),
	});

	ngOnInit(): void {
	}

	onDeleteClick(): void {
		console.log(`clicked delete`, this.data);
		this.dialogRef.close({ item: this.data, action: 'delete' });
	}

	onUpdateClick(): void {
		console.log(`clicked update`, this.data);
		this.dialogRef.close({ item: this.data, action: 'update' });
	}

}
