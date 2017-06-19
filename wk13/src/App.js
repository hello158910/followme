import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StackRouter, TabRouter } from './Router';

class App extends Component {
      componentWillMount() {
            firebase.initializeApp({
                  apiKey: "AIzaSyDMj4uClNXFSOnl8V627rpoLlFHM5AOwGs",
                  authDomain: "followme-6bdc8.firebaseapp.com",
                  databaseURL: "https://followme-6bdc8.firebaseio.com",
                  projectId: "followme-6bdc8",
                  storageBucket: "",
                  messagingSenderId: "1021086857885"
            });
      }
      render(){
      return(
        <TabRouter />
      );
}
}



export default App;
