import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { 
    this.init();
  }
  
  //crear storatge
  async init()
  {
    await this.storage.create();
  }

  //funciones del storage
  // agregar usuarios
  async agregar(key: string, valor: any)
  {
    await this.storage.set(key, valor);
  }

  // leer los datos que están guardados 
  async leer(key: string)
  {
    return await this.storage.get(key);
  }
 
  // por si a caso
  async listar()
  {
    let listado = []
    await this.storage.forEach((v,k) => { listado.push(v[0]); });
    return listado;
  }
  
 // ocupar para cerrar sesionS 
  async eliminar(key: string)
  {
    this.storage.remove(key);
  }
}
