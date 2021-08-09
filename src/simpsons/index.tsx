import React from 'react';
import Ear from './components/Ear';
import Eyes from './components/Eyes';
import Hair from './components/Hair';
import Head from './components/Head';
import Nose from './components/Nose';
import Screen from './components/Screen';
import Television from './components/Television';
import Titles from './components/Titles';
import Wall from './components/Wall';

// REMEMBER: You cannot change anything here. Add CSS in the component files.
const App = () => {
  return (
    <Wall>
      <Television>
        <Screen>
          <Nose />
          <Eyes />
          <Ear />
          <Hair />
          <Head />
          <Titles />
        </Screen>
      </Television>
    </Wall>
  );
};

export default App;
