import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Guardando datos...')
    setTimeout(() => {
      console.log('Datos guardados...')
      // this.router.navigate(['/'])
      this.router.navigateByUrl('/')
    }, 1200)
  }

}
