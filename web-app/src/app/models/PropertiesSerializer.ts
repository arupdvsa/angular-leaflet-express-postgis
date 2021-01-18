
import { BuildingItem } from "./BuildingItem";
import { Resource } from "./Resource";
import { Serializer } from "./Serializer";

export class PropertiesSerializer implements Serializer {
	mapResponse(data: any) {
		return data;
	}
	fromJson(json: any): Resource {
		const buildingItem: BuildingItem = new BuildingItem(
			{...json}
		);
        return buildingItem;
	}
	toJson(resource: Resource) {
		console.log(`toJson =>`, JSON.stringify(resource));
		return JSON.stringify(resource);
	}

}
