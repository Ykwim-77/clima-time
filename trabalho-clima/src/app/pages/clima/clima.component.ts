import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  navegaodr = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  navegarParaTelaTelaPesquisa() {
    this.navegaodr.navigate(['pesquisa']);
  }
}
