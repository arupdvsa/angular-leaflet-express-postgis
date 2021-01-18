import { BuildingItem } from "./BuildingItem";


export class PropertyChangeEvent {
	message: string;
	eventId: string;
	eventPayload: BuildingItem;
}
