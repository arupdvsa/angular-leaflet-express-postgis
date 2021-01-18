import BuildingGeoProperties from "./BuildingGeoProperties";
import { MarkerPoint } from "./MarkerPoint";
import { Resource } from "./Resource";

export class BuildingGeo extends Resource {
	properties: BuildingGeoProperties;
	markerPoint: MarkerPoint;
	geometry: string;
}
