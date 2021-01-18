import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import * as L from "leaflet";
import { PropertyChangeEvent } from "src/app/models/PropertyChangeEvent";
import { MarkerService } from "src/app/services/marker.service";
import { PropertiesService } from "src/app/services/properties.service";
import { ShapeService } from "src/app/services/shape.service";

const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
	iconRetinaUrl,
	iconUrl,
	shadowUrl,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
	selector: "app-map",
	templateUrl: "./map.component.html",
	styleUrls: ["./map.component.css"],
})
export class MapComponent implements AfterViewInit, OnDestroy {
	private map;
	private buildings;
	private _serviceSubscription;

	constructor(
		private markerService: MarkerService,
		private shapeService: ShapeService,
		private propertiesService: PropertiesService,
	) {
		this._serviceSubscription = this.propertiesService.onBuildingPropertyChange.subscribe({
			next: (event: PropertyChangeEvent) => {
				console.log(`map Received message #${event.eventId}: ${event.message}`);
				this.map.remove();
				this.initMap();
				this.markerService.addBuildingMarkers(this.map);
				this.shapeService.getBuildingGeoShapes().subscribe((buildings) => {
					this.buildings = buildings;
					this.initBuildingLayer();
				});
			}
		})

	}
	ngOnDestroy(): void {
		this._serviceSubscription.unsubscribe();
	}

	ngAfterViewInit() {
		this.initMap();
		this.markerService.addBuildingMarkers(this.map);
		this.shapeService.getBuildingGeoShapes().subscribe((buildings) => {
			this.buildings = buildings;
			this.initBuildingLayer();
		});
	}

	private initMap(): void {
		this.map = new L.map("map", {
			center: L.latLng(40.7415482499998, -73.9784868481707),
			zoom: 14,
		});

		const tiles = L.tileLayer(
			"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				maxZoom: 19,
				attribution:
					'© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			}
		);

		tiles.addTo(this.map);
	}
	private initBuildingLayer() {
		const buildingLayer = L.geoJSON(this.buildings, {
			style: (feature) => ({
				weight: 3,
				opacity: 0.5,
				color: "#008f68",
				fillOpacity: 0.8,
				fillColor: "#6DB65B",
			}),
		});

		this.map.addLayer(buildingLayer);
	}
}
