import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-no-encontrado',
  templateUrl: './no-encontrado.component.html',
  styleUrls: ['./no-encontrado.component.sass']
})
export class NoEncontradoComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  irAInicio() {
    this._router.navigate(
      ['/inicio'],
      {
        queryParams: {
          query: 'Analy',
        }
      });
  }
}
