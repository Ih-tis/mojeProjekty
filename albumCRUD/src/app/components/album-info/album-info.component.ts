import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/api-service.service';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css']
})
export class AlbumInfoComponent implements OnInit {

  albumForm!: FormGroup;
  albumModel: any;
  albumDetails: any;
  showAddBtn: boolean=true;
  showEditBtn: boolean=false;

  constructor(private api: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllAlbumDetails();
    this.createAlbumForm();
  }

  createAlbumForm(){
    this.albumForm = this.fb.group({
      userId: [''],
      id:[''],
      title:['']
    });
  }

  addClick(){
    this.showAddBtn=true;
    this.showEditBtn=false;
  }

  getAllAlbumDetails(){
    this.api.getAllAlbum().subscribe(res=>{
      this.albumDetails = res;
    }, err=>{
      console.log(err);
    })
  }

  postAlbumDetails(){
    this.albumModel = Object.assign({}, this.albumForm.value);

    this.api.postAlbum(this.albumModel).subscribe(res=>{
      ((response) => response.json())
      alert("Dodano album!");
      let close = document.getElementById('close');
      close?.click();
      this.albumForm.reset();
      this.getAllAlbumDetails();
    }, err=>{
      alert("Error!");
      
    })
  }

  deleteAlbumDetails(id:any){
    this.api.deleteAlbum(id).subscribe(res=>{
      alert("Album usunięty");
      this.getAllAlbumDetails();
    }, err=>{
      alert("Nie udało się usunąć albumu");
    })
  }

  edit(album:any){
    this.showAddBtn=false;
    this.showEditBtn=true;
    this.albumForm.controls["id"].setValue(album.id);
    this.albumForm.controls["userId"].setValue(album.userId);
    this.albumForm.controls["title"].setValue(album.title);
  }

  updateAlbumDetails(){
    this.albumModel = Object.assign({}, this.albumForm.value);
    this.api.editAlbum(this.albumModel, this.albumModel.id).subscribe(res=>{
      alert("album został pomyslnie edytowany");
      let close = document.getElementById('close');
      close?.click();
      this.albumForm.reset();
      this.getAllAlbumDetails();
      this.albumModel={};
    }, err=>{
      alert("Błąd podczas edytowania albumu");
    })
  }


}
