import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  userId: string = ''
  userInfo$: Observable<any> | null = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    // this.activatedRoute.snapshot
    this.activatedRoute.paramMap
      .subscribe((params) => {
        if (params.has('id')) {
          this.userId = params.get('id')!

          this.userInfo$ = this.http.get(`http://localhost:3000/users/${this.userId}`)
        }
      })
  }

}
