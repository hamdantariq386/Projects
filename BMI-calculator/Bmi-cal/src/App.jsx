import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [years, setYears] = useState(0);
    const [emi, setEMI] = useState(0);

    const handleChange = (e) => {
      console.log(e.target.id, e.target.value)
      const id = e.target.id
      const value = e.target.value
      if (id === 'principal') {
        setPrincipal(value)
        } else if (id === 'interest') {
          setInterest(value)
          } else{
            setYears(value)
            }
    }
    const calculateEMI = () => {
      let r = interest;
      if (principal && r && years){
        r= r/12/100;
        const calcPow = Math.pow(1 + r, years * 12);
        const amount = principal * ((r * calcPow) / (calcPow - 1));
        setEMI(amount);
        setEMI(Math.round(amount)); 
        }
      }
    useEffect(()=>{
      calculateEMI();
    },[principal,interest,years])

  return (
    <>
      <div className="loan-cal">
        <h2>Mortgage Calculator</h2>
        <div className="inputs">
          <p>Principal</p>
          <input onChange={handleChange} type="number" id='principal' />

          <p>Interest</p>
          <input onChange={handleChange} type="number" id='interest' />

          <p>Years</p>
          <input onChange={handleChange} type="number" id='years' />
        </div>
        <div className="output">
          Your EMI is {emi}
        </div>
      </div>
    </>
      
  )
}

export default App
