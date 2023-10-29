import { useState } from 'react';
import AgeCalculatorForm from './Agefo';
import Ageres from './Ageres';
import {
  differenceInYears
} from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);

    setAge({
      years: ageYears,
    });
  };

  return (
    <section className='App'>
      <div className='old'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Age Calculator
        </h1>
        <AgeCalculatorForm calculateAge={calculateAge} />
        {age && <Ageres age={age} />}
      </div>
    </section>
  );
}

export default App;
