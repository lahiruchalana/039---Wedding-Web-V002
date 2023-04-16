import React, { useState, useEffect } from 'react';
import { config } from '../../firebaseConfig.js';
// import { initializeApp } from '/node_modules/.vite/deps/firebase_app.js?v=c4e2b1a8';
// import { database } from 'firebase/database';
// import 'firebase/database';

import firebase from 'firebase/compat/app';
import 'firebase/database';

import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: config.REACT_APP_FIREBASE_API_KEY,
  authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: config.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.REACT_APP_FIREBASE_SENDER_ID,
  appId: config.REACT_APP_FIREBASE_APP_ID 
};

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();


// Initialize the app
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);


function RSVP() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState(false);
  const [guests, setGuests] = useState(0);

  // useEffect(() => {
  //   // Load initial data from Firebase
  //   database.ref('rsvp').once('value').then(snapshot => {
  //     const data = snapshot.val();
  //     if (data) {
  //       setName(data.name);
  //       setEmail(data.email);
  //       setAttending(data.attending);
  //       setGuests(data.guests);
  //     }
  //   });
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();

    // Set a value in the database
    set(ref(db, 'test'), 'Hello, World!');  

    // // Save data to Firebase
    // database.ref('rsvp').set({
    //   name,
    //   email,
    //   attending,
    //   guests
    // });
  };

  return (
    <div>
      <h1>RSVP</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="attending">Attending:</label>
        <input
          type="checkbox"
          id="attending"
          checked={attending}
          onChange={e => setAttending(e.target.checked)}
        />

        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          min="0"
          value={guests}
          onChange={e => setGuests(parseInt(e.target.value))}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RSVP;