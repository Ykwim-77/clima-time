import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class OpenWeatherService {
    apiKey = "df7e579b75bed9feef7a6b65c50974e7";
    apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    constructor() {}

    buscarInfoClimaCidadeAtual (){



        const url = this.apiUrl + '?q=Dois Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metric';
    
        console.log(url);
    }
}