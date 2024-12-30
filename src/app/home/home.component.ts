import {Component, inject} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Injectable} from '@angular/core';
import {collection, Firestore} from '@angular/fire/firestore';
import {addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  firestore = inject(Firestore);


  async addTestEntry(): Promise<void> {
    const testEntry = {
      name: 'Test',
      timestamp: new Date(),
    };

    try {
      let collectionRef = collection(this.firestore, 'testCollection');
      await addDoc(collectionRef, testEntry);

      console.log('Testeintrag erfolgreich erstellt!');
    } catch (error) {
      console.error('Fehler beim Erstellen des Testeintrags:', error);
    }
  }
}
