import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, pipe, throwError } from "rxjs";
import { Resource } from "../models/Resource";
import { Serializer } from "../models/Serializer";
import { catchError, map, retry, tap } from "rxjs/operators";

export class ResourceService<T extends Resource> {
	constructor(
		private httpClient: HttpClient,
		private url: string,
		private endpoint: string,
		private serializer: Serializer
	) {}
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json; charset=utf-8 '
		})
	}
	public create(item: T): Observable<T> {
		return this.httpClient
			.post<T>(
				`${this.url}/${this.endpoint}`,
				this.serializer.toJson(item)
			)
			.pipe(map((data) => this.serializer.fromJson(data) as T));
	}

	public update(item: T): Observable<T> {
		return this.httpClient
			.put<T>(
				`${this.url}/${this.endpoint}/${item.id}`,
				this.serializer.toJson(item),
				this.httpOptions
			)
			.pipe(
				retry(2),
				catchError(this.handleError)
			);
	}

	read(id: number): Observable<T> {
		return this.httpClient
			.get(`${this.url}/${this.endpoint}/${id}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as T));
	}

	// list(queryOptions: QueryOptions): Observable<T[]> {
	// 	return this.httpClient
	// 		.get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
	// 		.pipe(map((data: any) => this.convertData(data.items)));
	// }

	list(): Observable<T[]> {
		return this.httpClient
			.get(`${this.url}/${this.endpoint}`)
			.pipe(
				tap((data:any) => console.log(`list data is`,data)),
				map((data: any) => this.convertData(this.serializer.mapResponse(data))));
	}

	delete(id: number) {
		return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`, this.httpOptions);
	}

	private convertData(data: any): T[] {
		return data.map((item) => this.serializer.fromJson(item));
	}

	// Handle API errors
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	};
}
