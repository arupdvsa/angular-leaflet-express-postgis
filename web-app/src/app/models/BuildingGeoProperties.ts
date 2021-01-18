
export default class BuildingGeoProperties {
	address: string;
	city: string;
	country: string;
	roof_material: string;
	roof_type: string;
	area: number;
	storeys: number;
	height: number;

	constructor({ address, city, country, roof_material, area, storeys, height }: { address: string; city: string; country: string; roof_material: string; area: number; storeys: number; height: number; }) {
		this.address = address;
		this.city = city;
		this.country = country;
		this.roof_material = roof_material;
		this.area = area;
		this.storeys = storeys;
		this.height = height;
	}
}
