import logo from './logo.svg';
import './App.css';
import { IonInput } from '@ionic/react';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(34)

  const handleChange = (e) => {
    console.info('I need to save this value', e.detail.value)
    setValue(e.detail.value)
  }

  return (
    <div className="App">
      <IonInput type="number" inputMode='decimal' value={value} onIonChange={handleChange} />
    </div>
  );
}

export default App;
