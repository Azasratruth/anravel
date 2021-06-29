import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    base_uri = 'http://127.0.0.1:8000/api/';

    constructor(private httpClient: HttpClient) { }

    getData() {
        return this.httpClient.get(this.base_uri + 'employees');
    }

    insertData(data: any) {
        return this.httpClient.post(this.base_uri + 'addEmployee', data);
    }

    deleteData(id) {
        return this.httpClient.delete(this.base_uri + 'deleteEmployee/' + id);
    }

    getEmployee(id) {
        return this.httpClient.get(this.base_uri + 'employee/' + id);
    }

    updateData(id, data) {
        return this.httpClient.put(this.base_uri + 'updateEmployee/' + id, data);
    }

}