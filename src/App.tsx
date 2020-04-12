import React from 'react';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import Layout from 'components/layout'
import 'styles/app.scss';

function App() {
  return (
      <DndProvider backend={HTMLBackend}>
        <Layout />
      </DndProvider>
  );
}

export default App;
