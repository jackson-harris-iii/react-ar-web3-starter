import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDQeV1Qz28IQHJsXMho5i5d-KPBpBt60as',
//   authDomain: 'pintrading-5f72f.firebaseapp.com',
//   projectId: 'pintrading-5f72f',
//   storageBucket: 'pintrading-5f72f.appspot.com',
//   messagingSenderId: '733654854944',
//   appId: '1:733654854944:web:2abac78b02cb0003797b45',
//   measurementId: 'G-14P2Z8DZ46',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDZnMYpzx4oVf-_fpb-_YGNQTnggmTevD8',
  authDomain: 'spotx-prod.firebaseapp.com',
  projectId: 'spotx-prod',
  storageBucket: 'spotx-prod.appspot.com',
  messagingSenderId: '603645477644',
  appId: '1:603645477644:web:89d6f9a13ab2d36af17f29',
  measurementId: 'G-PBSPGR6LVM',
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);
