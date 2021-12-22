import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationStart, ParamMap, Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit, OnDestroy {
  userId: string = ''
  userInfo$: Observable<any> | null = null
  usuario: any = {}
  subscription: Subscription | null = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private http: HttpClient) { }

  ngOnInit(): void {
    // const routeData: any = this.activatedRoute.snapshot
    // console.log(routeData)
    // this.userId = routeData.params.id
    // this.userInfo$ = this.http.get(`http://localhost:3000/users/${this.userId}`)

    // this.subscription = this.router.events
    //   .pipe(
    //     filter(e => e instanceof NavigationStart)
    //   )
    //   .subscribe(e => {
    //     const navigation = this.router.getCurrentNavigation();
    //     console.log(navigation)
    //     // this.userInfo$ = new Observable(o => o.next(navigation?.extras?.state?.['usuario']))
    //     // this.userId = navigation?.extras?.state?.['usuario'].id
    //     this.usuario = navigation?.extras?.state?.['usuario']
    //     this.userId = this.usuario.id
    //   });

    // console.log(history.state)

    this.activatedRoute.paramMap
      .subscribe((params) => {
        if (params.has('id')) {
          this.userId = params.get('id')!

          this.userInfo$ = this.http.get(`http://localhost:3000/users/${this.userId}`)
        }
      })
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

}
