import * as firebase from 'firebase'

export default class Firebase{
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyCmftMh2x0QaC-6ATY4kpHZcPW19Fcugww",
        authDomain: "quiniela4winners.firebaseapp.com",
        databaseURL: "https://quiniela4winners.firebaseio.com",
        projectId: "quiniela4winners",
        storageBucket: "quiniela4winners.appspot.com",
        messagingSenderId: "317256750007"
        });
    }
}
