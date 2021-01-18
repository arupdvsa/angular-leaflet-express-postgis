import { Resource } from "./Resource";
export class BuildingItem extends Resource {
	address: string;
	city: string;
	country: string;
	roof_material: string;
	roof_type: string;
	area: number;
	storeys: number;
	height: number;
	geometry: string;

	constructor({id, address, city, country, roof_material,roof_type, area, storeys, height, geometry }:
		{ id: number; address: string; city: string; country: string; roof_material: string;
			roof_type: string; area: number; storeys: number; height: number; geometry: string; }) {
		super();
		this.id = id;
		this.address = address;
		this.city = city;
		this.country = country;
		this.roof_material = roof_material;
		this.roof_type = roof_type;
		this.area = area;
		this.storeys = storeys;
		this.height = height;
		this.geometry = geometry;
	}
}
