/**
 * Pour déclarer une classe comme composant de notre application, on importe "component" via @angular/core
 */

import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {UserApiService} from './services/user-api.service';
import {UserStorageService} from './services/user-storage.service';



/**
 * @component est ce qu'on appelle un décorateur.
 * IL va nous permettre de définir 3 paramètres essentiels à notre application
 */
@Component({
  /**
   * Le sélecteur determine la manière dont le composant sera affiché dans votre HTML : <app-root></app-root>
   * Vous devez obligatoirement avoir la balise d'ouverture et de fermeture
   */
  selector: 'app-root',
  /**
   * TemplateUrl ou "template" est la partie visible du composant.
   * C'est ce qui s'affiche à l'écran lorsque le composant est utilisé
   */
  templateUrl: './app.component.html',
  /*template: `
    <h1> Bilal est toujours un connard</h1>
    <p>Il faut le savoir</p>`,

  styles:[`
    h1 {color: pink;}
`]*/
/**
 * La déclaration des styles avec "stylesUrls" ou "styles"[]
 */
  styleUrls: ['./app.component.css']
})
/**
 * La class contient les données du composants, mais aussi son comportement (fonctoin etc).
 * Dans notre contexte MVVM, notre class correspond au ViewModel
 */
export class AppComponent implements OnInit {

  constructor(private userApiService: UserApiService,
              private userStorageService: UserStorageService) {}

  // déclaration d'une variable titre
  title = 'Gestion de mes contacts';

  // --contact choisi par mon utilisateur
  contactActif: Contact;

  // -- déclaration d'un objet contact
  unContact: Contact = {
    id        : 1,
    name      : 'Valentin Poulard',
    username  : 'valentinpoulard',
    email     : 'valentin.poulard@gmail.com'
  };
  // --Tableau de contacts
  mesContacts: Contact[] = [
    {
      id        : 1,
      name      : 'Hugo LIEGEARD',
      username  : 'hugoliegeard',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        : 2,
      name      : 'Bilal MEHDI',
      username  : 'bilalbilal',
      email     : 'bilal.m@hl-media.fr'
    },
    {
      id        : 3,
      name      : 'Lilian SABATTE',
      username  : 'liliansabatte',
      email     : 'lilian.s@hl-media.fr'
    },
    {
      id        : 4,
      name      : 'Manu SICARD',
      username  : 'manusicard',
      email     : 'manu.s@hl-media.fr'
    },
  ];


  ngOnInit(): void {
   /* this.userApiService.getContacts().subscribe(x
        console.log(contacts);
        this.mesContacts = contacts;
      }
    );*/
    /**
     * Au chargement de l'application, je récupère
     * les contacts du localstorage
     */
    this.mesContacts = this.userStorageService.getContacts();
  }


  /**
   * Ma fonction choisirContact, prend un contact
   * en paramètre et le transmet à la variable contactActif
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }

  /**
   * Fonction qui permet de rajouter un contact dans la liste
   * @param event
   */
  ajouterContactDansLaListe(event: any) {

    console.log(event);
    // Récupération du Contact via l'évènement
    const leContact: Contact = event.leContact;

    // Attribution d'un ID au contact
    let id: number = this.mesContacts.length;

    // Ajout du Contact dans le Tableau
    leContact.id = id += 1;
    this.mesContacts.push(leContact);

    // -- On sauvegarde les Contacts
    this.saveContacts();
  }
  /**
   * Déclenche la sauvegarde des contacts
   */
  saveContacts() {
    this.userStorageService.save(this.mesContacts);
  }
}
