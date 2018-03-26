import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable()
export class UserStorageService {

  constructor() { }

  /**
   * Permet de récupérer les Contacts depuis le
   * localStorage
   * @returns {Contact[]}
   */
  getContacts(): Contact[] {
    /**
     * avant de retourner les données, je m'assure
     * qu'il y a bien des contacts dans le localstorage.
     * S'il y en a pas, je retourne un nouveau tableau.
     */
    const contacts =  JSON.parse(localStorage.getItem('contacts'));
    console.log(contacts);
    if (contacts !== null) {
      return contacts;
    } else {
      return [];
    }
  }

  /**
   * Permet de sauvegarder nos Contacts
   * dans le localStorage
   * @param {Contact[]} contacts
   */
  save (contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

}
