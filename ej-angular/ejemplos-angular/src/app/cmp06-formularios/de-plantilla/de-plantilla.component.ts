import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-de-plantilla',
  templateUrl: './de-plantilla.component.html',
  styleUrls: ['./de-plantilla.component.css']
})
export class DePlantillaComponent implements OnInit {
  datosFormulario: any = {
    username: 'ssss',
    email: 'aaa@aaa.com',
    password: '12345678'
  }

  constructor() { }

  ngOnInit(): void {
  }

  registro(form: NgForm) {
    // console.log(this.datosFormulario)
    console.log(form)

    // console.log(form.value)
  }

  mostrar(input: any) {
    console.log(input)
  }

}
