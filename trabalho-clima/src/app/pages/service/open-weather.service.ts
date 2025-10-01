import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { weatherResponse } from "../models/weather-response.model";

@Injectable({
    providedIn: "root",
})
export class OpenWeatherService {
    private apiKey = "df7e579b75bed9feef7a6b65c50974e7";
    private apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    private http = inject(HttpClient);

    constructor(){

    }

    buscarInfoClimaCidadeAtual (): Observable<weatherResponse> {



        const url = 
            this.apiUrl + '?q=Dois Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metric';
    
        return this.http.get<weatherResponse>(url);
    }
}
