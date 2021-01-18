import { BuildingGeo } from "./BuildingGeo";
import { Resource } from "./Resource";

export class FeatureCollection extends Resource {
  buildingFeatures: BuildingGeo[];
}
