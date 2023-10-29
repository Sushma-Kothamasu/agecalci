import React, { useState } from 'react';


const Agecalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }

        setAge(age);
    };

    const resetCalculator = () => {
        setBirthdate('');
        setAge(0);
      };

    return (
        <>
            <div className='Container'>
             <h2 className='heading container_title'>Age Calculator</h2>
             
             <div className='Container_middle'>
                    <div className='right'>
                        <h4>Date of Birth</h4>
                        <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                        <div className='button_div'>
                        <button className='button-65' onClick={calculateAge} color='blue'>Calculate Age</button>
                      

                        </div>
                    </div>

                    <div className='left'>
                        
                            <h1>Your Age is</h1>
                        
                        <h1 className='age_heading'>{age > 0 ? ` ${age}` : ''}</h1>
                    </div>
             </div>
            </div>
        </>
    );
};

export default Agecalculator;