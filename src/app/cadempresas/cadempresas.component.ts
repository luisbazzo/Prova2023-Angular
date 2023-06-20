import { CadempresasService } from './../cadempresas.service';
import { Empresas } from './../empresas';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadempresas',
  templateUrl: './cadempresas.component.html',
  styleUrls: ['./cadempresas.component.css']
})
export class CadempresasComponent implements OnInit{

  empresas : Empresas[] = [];
  formGroupEmpresas : FormGroup;

  constructor(private empresaServices : CadempresasService,
              private formBuilder : FormBuilder
              ){
    this.formGroupEmpresas = formBuilder.group({
      id : [''],
      name : [''],
      contact : [''],
      location : [''],
      area : ['']
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveEmpresas(){
    this.empresaServices.saveEmpresas(this.formGroupEmpresas.value).subscribe(
      {
        next : data => {
          this.empresas.push(data);
          this.formGroupEmpresas.reset();
        }
      }
    );
  }



}
