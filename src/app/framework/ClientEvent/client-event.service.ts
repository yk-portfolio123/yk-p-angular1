import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientEventService {

  constructor() { }

  private dataSource = new Subject<any>();
  public data = this.dataSource.asObservable();
  public sendEvent(msg:any){
    this.dataSource.next(msg);
  }
  private map:Map<string,any> = new Map();
  public setData(key:string,val:any){
    if(this.map.has(key)){
      this.map.delete(key);
    }
    this.map.set(key,val);
  }
  public getData(key:string){
    return this.map.get(key);
  }
  public deleteData(key:string){
    if(this.map.has(key)){
      this.map.delete(key);
    }
  }
}
