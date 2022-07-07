import {Injectable} from '@angular/core';
import {Project} from '../models/project';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore, CollectionReference} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly projectCollections: CollectionReference<Project>;
  readonly listProjects: Observable<Project[]>;

  constructor(private firestore: Firestore) {
    this.projectCollections = collection(firestore, "last-projects") as CollectionReference<Project>
    this.listProjects = collectionData(this.projectCollections);
  }
}
