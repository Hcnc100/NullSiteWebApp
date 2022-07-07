import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  serverTimestamp
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Email} from "../models/Email";
import {DocumentData} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  readonly listProjects: Observable<Email[]>;
  private readonly emailsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.emailsCollection = collection(firestore, "emails");
    this.listProjects = collectionData(this.emailsCollection as CollectionReference<Email>);
  }

  async sendNewEmail(email: Email) {
    await addDoc(this.emailsCollection, {
      ...email,
      timestamp: serverTimestamp()
    })
  }
}
