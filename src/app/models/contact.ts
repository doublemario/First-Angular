export class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  // Le point d'interrogation permet de dire que le paramètre n'est pas obligatoire
  adress?: object;
  phone?: number;
  website?: string;
  company?: object;
}
