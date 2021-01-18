import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class ShapeService {
	constructor(private http: HttpClient) {}

	getBuildingGeoShapes(): Observable<any> {
		return this.http
			.get("/api/buildings")
			.pipe(map((data) => data[0].jsonb_build_object));
	}
}
