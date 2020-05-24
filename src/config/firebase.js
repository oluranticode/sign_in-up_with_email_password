import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyClaNrQ_EoD6M4EZ7f9gxeK4bjrdC7pv-c",
  authDomain: "register-92703.firebaseapp.com",
  databaseURL: "https://register-92703.firebaseio.com",
  projectId: "register-92703",
  storageBucket: "register-92703.appspot.com",
  messagingSenderId: "429072445153",
  appId: "1:429072445153:web:14791fae3dc933e00451a0",
  measurementId: "G-XBJGGF41DV"
};

  const fire = firebase.initializeApp(config);
  export default fire;