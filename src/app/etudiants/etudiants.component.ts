import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations;
  listEtudiant ;
  currentformation={id:-1} ;
  constructor( private httpclient : HttpClient) { }

  ngOnInit() {
    this.httpclient.get("http://localhost:8091/formations").subscribe(data=>{
      this.listFormations=data
    },errer=>{
      console.log(errer)
    })
  }
  ongetetudiant(f){
    this.currentformation=f;
    this.httpclient.get("http://localhost:8091/formations/"+f.id+"/etudiants").subscribe(data=>{
      this.listEtudiant=data
    },errer=>{
      console.log(errer)
    })
  }

}
