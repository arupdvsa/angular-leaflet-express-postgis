import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as L from "leaflet";
import { ResourceService } from "./GenericResourceService";
import { FeatureSerializer } from "../models/FeatureSerializer";
import { BuildingGeo } from "../models/BuildingGeo";
import { PopUpService } from "./pop-up.service";

@Injectable({
	providedIn: "root",
})
export class MarkerService extends ResourceService<BuildingGeo> {
	constructor(httpClient: HttpClient, private popupService: PopUpService) {
		super(httpClient, "/api", "buildings", new FeatureSerializer());
	}

	addBuildingMarkers(map: L.map): void {
		this.list().subscribe((res: BuildingGeo[]) => {
			console.log(`addBuildingMarkers`, res);
			for (const buildingGeo of res) {
				// const circle = L.circleMarker([buildingGeo.markerPoint.longitude, buildingGeo.markerPoint.latitude],
				// 	{
				// 		radius: 20
				// 	});//.addTo(map);
				// circle.bindPopup(this.popupService.addBuildingPropertiesPopup(buildingGeo.properties));
				// circle.addTo(map);

				const marker = L.marker([
					buildingGeo.markerPoint.longitude,
					buildingGeo.markerPoint.latitude,
				]); //.addTo(map);
				marker.bindPopup(
					this.popupService.addBuildingPropertiesPopup(
						buildingGeo.properties
					)
				);
				marker.addTo(map);
			}
		});
	}
}
