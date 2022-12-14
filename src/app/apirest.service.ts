import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class ApirestService {
 listado = []; 
 item : any; 
 private urlApi = 'http://localhost:3000/'; //url de la api
  constructor( private httpClient : HttpClient) { }

  // traer a todos los usuario 
  getUsers()
  {
    // definir url para solicitud
    let url = this.urlApi + "alumnos";
    this.listado =[]; 
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(item => {this.listado.push(item);})
      },
      error => 
      {
        console.log("Errror en la comunicación del server");
      });
    });
  }

  async getUser(id)
  {
    let url = this.urlApi + 'alumnos/' + id;
    this.listado = []; 
    return new Promise((resolve, reject) => 
    {
      this.httpClient.get(url).subscribe((data: any) =>
      {
        resolve(data);
        this.item = data;
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }
  async getUserpr(id)
  {
    let url = this.urlApi + 'profesores/' + id;
    this.listado = []; 
    return new Promise((resolve, reject) => 
    {
      this.httpClient.get(url).subscribe((data: any) =>
      {
        resolve(data);
        this.item = data;
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }
  
  // metodo de post 

  getUsersp()
  {
    // definir url para solicitud
    let url = this.urlApi + "profesores";
    this.listado =[]; 
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(item => {this.listado.push(item);})
      },
      error => 
      {
        console.log("Errror en la comunicación del server");
      });
    });
  }


}
