import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  addBuildingPropertiesPopup(data: any): string {
      console.log(`addBuildingProperties`, data);
	  return `<div>address: ${data.address}</div>
			  <div>city: ${data.city}</div>
			  <div>roof_material: ${data.roof_material}</div>
			  <div>area: ${data.area}</div>
			  <div>storeys: ${data.storeys}</div>
			  <div>height: ${data.height}</div>
      		  <div>country: ${ data.country}</div>`;
  }
}
