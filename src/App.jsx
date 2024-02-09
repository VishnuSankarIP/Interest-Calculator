
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  // create state to store data

  const [interest, setinterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)


  const [principleAmountValid, setPrincipleAmountValid] = useState(true)
  const [rateAmountValid, setRateAmountValid] = useState(true)
  const [yearAmountValid, setYearAmountValid] = useState(true)

  const handleReset = () => {
    setinterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }
  const handleValidation = (tag) => {

    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    // if(!!value.match(/^[0-9]*.?[0-9]+$/))
    if (!!value.match(/^\d*\.?\d+$/)) {
      // valid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }
      else if (name == "rate") {
        setRate(value)
        setRateAmountValid(true)
      }
      else {
        setYear(value)
        setYearAmountValid(true)
      }
    } else {
      // invalid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }
      else if (name == "rate") {
        setRate(value)
        setRateAmountValid(false)
      }
      else {
        setYear(value)
        setYearAmountValid(false)
      }

    }
  }
  const handleCalculate = () => {
    if (principle && rate && year) {
      setinterest(principle * rate * year / 100)
    }
    else {
      alert("please fill form")
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h1 >Simple Interest App</h1>
        <p>Calculate your Simple Interest</p>
        <div className='d-flex rounded p-3 bg-warning justify-content-center align-item-center shadow flex-column text-light'  >
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total simple Interest</p>
        </div>
        <form className='p-5'>
          <div className='mb-3' >
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={e => handleValidation(e.target)} />
          </div>
          {!principleAmountValid && <div className='text-danger mb-3'>*Invalid principle amount</div>}
          <div className='mb-3' >
            <TextField className='w-100' id="outlined-basic-rate" label="₹ Rate of Interest % " variant="outlined" value={rate || ""} name='rate' onChange={tag => handleValidation(tag.target)} />
          </div>
          {!rateAmountValid && <div className='text-danger mb-3'>*Invalid rate amount</div>}
          <div className='mb-3' >
            <TextField className='w-100' id="outlined-basic-time" label="₹ Time period" variant="outlined" value={year || ""} name='year' onChange={tag => handleValidation(tag.target)} />
          </div>
          {!yearAmountValid && <div className='text-danger mb-3'>*Invalid year </div>}
          <Stack direction="row" spacing={2}>
            <Button disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{ width: '50%', height: '50px' }} variant="contained" className='bg-dark' onClick={handleCalculate}>Calculate</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '50px' }} variant="outlined" color='error'>RESET</Button>
          </Stack>


        </form>
      </div>
    </div>
  )
}

export default App
