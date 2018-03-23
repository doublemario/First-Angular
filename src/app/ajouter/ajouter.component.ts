import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active = true;
  constructor() { }

  ngOnInit() {
  }

  submitContact() {
    /**
     * Lorsque mon formulaire est soumis j'émet un évènement qui sera écouté par mon application et
     * qui récupèrera les données du nouveau contact
     * Value en grisé est rajouté automatiquement par webstorm
     */
    this.unContactEstCree.emit({leContact: this.nouveauContact});


    //-- Je réinitialise le nouveau contact
    this.nouveauContact = new Contact();


    //-- Je réinitialise le formulaire
    this.active = false;
    setTimeout(()=>this.active = true,0)
    /**
     * Je passe mon formulaire à false, puis immédiatement à true
     * ce qui a pour conséquence de le détruire dans le DOM puis le recréer
     */
  }

}
