import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postAlbum(data:any){
    return this.http.post<any>("http://localhost:3000/albumy", data);
  }

  getAllAlbum(){
    return this.http.get<any>("http://localhost:3000/albumy");
  }

  deleteAlbum(id:any){
    return this.http.delete<any>("http://localhost:3000/albumy/"+id);
  }

  editAlbum(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/albumy/"+id, data);
  }
}
