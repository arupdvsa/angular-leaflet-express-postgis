import { BuildingGeo } from "./BuildingGeo";
import { MarkerPoint } from "./MarkerPoint";
import BuildingGeoProperties from "./BuildingGeoProperties";
import { Resource } from "./Resource";
import {Serializer} from "./Serializer";

export class FeatureSerializer implements Serializer {
	mapResponse(data: any) {
		return data[0].jsonb_build_object.features;
	}

	toJson(resource: Resource) {
		throw new Error("Method not implemented.");
	}

	fromJson(json: any): BuildingGeo {
		const buildingGeo: BuildingGeo = new BuildingGeo();
		const coordinates = json.geometry.geometries.find(g => g.type === 'Point').coordinates;
		buildingGeo.properties = new BuildingGeoProperties(
			{ address: json.properties.address, city: json.properties.city, country: json.properties.country, roof_material: json.properties.roof_material, area: json.properties.area, storeys: json.properties.storeys, height: json.properties.height }		);
		buildingGeo.markerPoint = new MarkerPoint(coordinates[1], coordinates[0]);

		return buildingGeo;
	}
}
