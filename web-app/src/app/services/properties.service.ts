import { Injectable } from '@angular/core';
import { ResourceService } from './GenericResourceService';
import {BuildingItem} from '../models/BuildingItem';
import { HttpClient } from '@angular/common/http';
import { PropertiesSerializer } from '../models/PropertiesSerializer';
import { Observable, of as observableOf } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { PropertyChangeEvent} from '../models/PropertyChangeEvent';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService extends ResourceService<BuildingItem> {
	public onBuildingPropertyChange: EventEmitter<PropertyChangeEvent> = new EventEmitter<PropertyChangeEvent>();
	constructor(httpClient: HttpClient) {
		super(httpClient, "/api", "buildings/properties", new PropertiesSerializer());
    }

	getBuildingProperties(): Observable<any> {
		return this.list();
	};

	updateBuildingProperties(buildingItem: BuildingItem) {
        this.update(buildingItem).subscribe((item) => {
			return observableOf(item);
		})
	}

	deleteBuildingProperties(buildingItem: BuildingItem) {
		this.delete(buildingItem.id).subscribe((item) => {
			this.onBuildingPropertyChange.emit({ message: 'Building Deleted', eventId: 'DeletedBuildingItemEventID', eventPayload: buildingItem});
			return observableOf(item);
		});
	}

}
