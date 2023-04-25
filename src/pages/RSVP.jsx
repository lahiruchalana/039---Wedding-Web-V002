import React, { useState, useEffect } from 'react';
import { config } from '../../firebaseConfig.js';
import styles from "./../style";

import { motion, AnimatePresence } from "framer-motion";

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
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [attending, setAttending] = useState(false);
  // const [guests, setGuests] = useState(0);

  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAttendingChange = (event) => {
    setIsAttending(event.target.checked);
  };



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
    <div className={`bg-violet-950 ${styles.paddingX} ${styles.flexStart}`}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">RSVP</h1>
        <form className="flex flex-col items-center">
          <label htmlFor="name" className="font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-400 px-2 py-1 mb-4 rounded-md"
          />
          <label htmlFor="attending" className="font-bold mb-2">
            Will you be attending?
          </label>
          <input
            type="checkbox"
            id="attending"
            checked={isAttending}
            onChange={handleAttendingChange}
            className="mx-2"
          />
          <label htmlFor="attending">Yes</label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RSVP;


