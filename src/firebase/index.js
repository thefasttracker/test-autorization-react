import firebase from "firebase";

import { config } from "../../config/config";

firebase.initializeApp(config);

// export const githubProvider = new firebase.auth.GithubAuthProvider()
export const firebaseRef = firebase.database().ref();
export const auth = firebase.auth();
export default firebase;
