import { Component } from '@angular/core';
import { CardModel } from './Models/card.model';
import { CardService } from './Service/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SUT22-Angular';

  cards : CardModel[] = [];


  card: CardModel = {
    id:'',
    holderName:'',
    cardNumber:'',
    expireMonth:'',
    expireYear:'',
    cvc:''
  }

  constructor(private cardservice : CardService){

  }

  ngOnInit():void{
    this.getAllCard();
  }

  //get
  getAllCard(){
    this.cardservice.getAllCards().subscribe(response => {
      this.cards = response
    })
  }

  onSubmit(){
    if(this.card.id == ''){
      this.cardservice.addCard(this.card).subscribe(response => {
        this.getAllCard();
        this.card = {
          id:'',
          cardNumber:'',
          holderName:'',
          expireMonth:'',
          expireYear:'',
          cvc:''
        }
      })
    }
    else{
      this.updateCard(this.card);
    }
  }

  updateCard(card:CardModel){
    this.cardservice.updateCard(card).subscribe(response =>{
      this.getAllCard()
    })
  }

  deleteCard(id:string){
    this.cardservice.deleteCard(id).subscribe(response => {
      this.getAllCard()
    })
  }

  populateForm(card:CardModel){
    this.card = card;
  }

}
