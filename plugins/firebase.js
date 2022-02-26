import { initializeApp } from "firebase/app";

// This app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDDTayLbzyHbo7HLc1Y80WxZrsXHvAxDA",
  authDomain: "search-app-40e51.firebaseapp.com",
  projectId: "search-app-40e51",
  storageBucket: "search-app-40e51.appspot.com",
  messagingSenderId: "1036374188691",
  appId: "1:1036374188691:web:fffc102d90d78619d5e366"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// https://nuxtjs.org/ja/docs/directory-structure/plugins
export default ( context, inject ) => {
  inject('firebaseApp', firebaseApp)
}
