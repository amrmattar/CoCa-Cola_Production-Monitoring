import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {
  HttpErrorResponse,
  HttpHeaders,
  HttpClient,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getEnergyMachines(): Observable<any> {
    return this.http.get(
      environment.sourceUrl +
        '/Machines/GetUnallocatedEnergyMachinesbyFactoryid/1'
    );
  }
  postEnergyMachines(newProduct) {
    return this.http.post<any>(
      environment.sourceUrl + `/UnitOfMeasurings`,
      newProduct,
      this.httpOptions
    );
  }
  deleteEnergyMachines(machine) {
    return this.http.delete(
      environment.sourceUrl + `/UnitOfMeasurings/${machine}`
    );
  }
  getUnitOfMeasurings(): Observable<any> {
    return this.http.get(environment.sourceUrl + '/UnitOfMeasurings');
  }
  postUnitOfMeasurings(newProduct) {
    return this.http.post<any>(
      environment.sourceUrl + `/UnitOfMeasurings`,
      newProduct,
      this.httpOptions
    );
  }
  deleteUnitOfMeasurings(machine) {
    return this.http.delete(
      environment.sourceUrl + `/UnitOfMeasurings/${machine}`
    );
  }
  postMachineFunctionality(newmachine) {
    return this.http.post<any>(
      environment.sourceUrl + `/MachineFunctionality`,
      newmachine,
      this.httpOptions
    );
  }
  deleteMachineFunctionality(machine) {
    return this.http.delete(
      environment.sourceUrl + `/MachineFunctionality/${machine}`
    );
  }
  getProducts() {
    return this.http.get(environment.sourceUrl + '/Products');
  }
  getProductSKUs() {
    return this.http.get(environment.sourceUrl + '/SKUs');
  }
  deleteProductSKUs(id) {
    return this.http.delete(environment.sourceUrl + `/SKUs/${id}`);
  }
  putmachine(machine) {
    return this.http.put<any>(
      environment.sourceUrl +
        `/Machines/EditMachines?Machineid=${machine.machineID}`,
      machine,
      this.httpOptions
    );
  }
  putproduct(product) {
    return this.http.put<any>(
      environment.sourceUrl + `/SKUs/${product.id}`,
      product,
      this.httpOptions
    );
  }
  postProductSKUs(newProduct) {
    return this.http.post<any>(
      environment.sourceUrl + `/SKUs`,
      newProduct,
      this.httpOptions
    );
  }

  postMachinesAssigned(newProduct) {
    return this.http.post<any>(
      environment.sourceUrl + `/Machines/PostMachine`,
      newProduct,
      this.httpOptions
    );
  }
  getUnMachinesAssigned() {
    return this.http.get(environment.sourceUrl + '/Machines/GetMachines');
  }
  deleteUnMachinesAssigned(machine) {
    return this.http.delete(
      environment.sourceUrl + `/Machines/DeleteMachine/${machine}`
    );
  }

  getUnAllocatedMachines() {
    return this.http.get(
      environment.sourceUrl + '/Machines/GetUnAllocatedMachines'
    );
  }
  getfactories(): Observable<any> {
    return this.http.get(environment.sourceUrl + '/Factories');
  }
  getMachineFunctionality(): Observable<any> {
    return this.http.get(environment.sourceUrl + '/MachineFunctionality');
  }
  getMachineTypes(): Observable<any> {
    return this.http.get(environment.sourceUrl + '/MachineTypes');
  }
  getLinesByFactory(id): Observable<any> {
    return this.http.get(
      environment.sourceUrl + `/Lines/GetLinesByFactoryID?factoryid=${id}`
    );
  }
  getLines(): Observable<any> {
    return this.http.get(environment.sourceUrl + `/Lines`);
  }

  getMaterials() {
    return this.http.get(environment.sourceUrl + '/Materials');
  }

  putEditProducts(Product) {
    return this.http.put<any>(
      environment.sourceUrl + `/Products/${Product.id}`,
      Product,
      this.httpOptions
    );
  }
  putEditMaterials(Material) {
    return this.http.put<any>(
      environment.sourceUrl + `/Materials/${Material.id}`,
      Material,
      this.httpOptions
    );
  }
  putProducts(newProduct) {
    return this.http.post<any>(
      environment.sourceUrl + `/Products`,
      newProduct,
      this.httpOptions
    );
  }
  putMaterials(newMaterials) {
    return this.http.post<any>(
      environment.sourceUrl + `/Materials`,
      newMaterials,
      this.httpOptions
    );
  }
}
