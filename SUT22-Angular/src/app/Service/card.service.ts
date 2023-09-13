import {HttpClient} from "@angular/common/http";
import { CardModel } from "../Models/card.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CardService{
    baseUrl = 'https://localhost:7110/api/Card'
    constructor(private http:HttpClient){ 
        
    }


    getAllCards():Observable<any[]>{
        return this.http.get<any[]>(this.baseUrl)
    }

    addCard(card:CardModel):Observable<CardModel>{
        card.id = '00000000-0000-0000-0000-000000000000';
        return this.http.post<CardModel>(this.baseUrl,card)
    }

    deleteCard(id:string):Observable<CardModel>{
        return this.http.delete<CardModel>(this.baseUrl + '/' + id)
    }

    updateCard(card:CardModel):Observable<CardModel>{
        return this.http.patch<CardModel>(this.baseUrl + '/' + card.id, card)
    }
}

