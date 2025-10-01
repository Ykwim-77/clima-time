import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../service/open-weather.service';
import { weatherResponse } from '../models/weather-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import {DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-clima',
  standalone: true,
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
  imports: [TitleCasePipe, DecimalPipe],
})
export class ClimaComponent {

  navegaodr = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima = toSignal<weatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual()
    .pipe(  
      catchError(error => {
        console.error('erro ao buscar dados do clima  ',error);
        return of(null)
      })
    ),
    {initialValue: null}
  )
  constructor() { }

  navegarParaTelaTelaPesquisa() {
    this.navegaodr.navigate(['/pesquisa']);
  }
}
