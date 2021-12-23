import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/cmp07-servicios/servicios/auth.service';

@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.component.html',
  styleUrls: ['./logueado.component.css']
})
export class LogueadoComponent implements OnInit {
  nombre: string = 'Charles'
  estasLogueado: boolean = false

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
