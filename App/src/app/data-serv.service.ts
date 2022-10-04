import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPYEzqU4JL6JQXeVnc_IPZeU6uGvz5ixw",
  authDomain: "to-do-list-web-app-5aa6b.firebaseapp.com",
  projectId: "to-do-list-web-app-5aa6b",
  storageBucket: "to-do-list-web-app-5aa6b.appspot.com",
  messagingSenderId: "457062508711",
  appId: "1:457062508711:web:ceef490a8c5e29b43b5382",
  ddatabaseURL: "https://to-do-list-web-app-5aa6b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

@Injectable({
  providedIn: 'root'
})



export class DataServService {

  currentTasks: string[] = ["Eat food","Take a bath","Watch Movies","Sleep","Workout","Study"];

  constructor() { 
    this.writeUserData("Plato");
  }

  writeUserData(name:string) {
    const db = getDatabase();
    set(ref(db, 'To-Do/'), {
      username: name,
    });
  }

  getData(){
    return this.currentTasks;
  }
}
