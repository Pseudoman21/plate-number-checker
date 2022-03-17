import React, { useState } from 'react';
import './App.css';
import { Col, Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [plateNum, setNum] = useState({
    number: '',
    valid: true,

  });
  const [renewDate, setDate] = useState({
    month: '',
    week: '',
    date: ''
  });
  const [week, setWeek] = useState('');
  const [display, setDisplay] = useState('d-none');
  function handleInputChange(e){
    setNum({ ...plateNum, number: e.target.value });
  }

  function checkRenewDate(){
    var matches = plateNum.number.match(/(\d+)/);
    if(matches && plateNum.number != ''){
      var lastTwo = matches[0].slice(-2);

      lastTwo = lastTwo.toString().split('');
      lastTwo = lastTwo.map(Number)
      if(lastTwo[1]===1){
        setDate({ ...renewDate, month: 'January'});
        setWeek(prevWeek => prevWeek = 'January');
      }
      else if(lastTwo[1]===2) {
        setDate({ ...renewDate, month: 'February'});
      }

      switch (lastTwo[1]) {
        case 1:
          setDate({ ...renewDate, month: 'January'});         
          break;
        case 2:
          setDate({ ...renewDate, month: 'February'});
          break;
        case 3:
          setDate({ ...renewDate, month: 'March'});
          break;
        case 4:
          setDate({ ...renewDate, month: 'April'});
          break;
        case 5:
          setDate({ ...renewDate, month: 'May'});
          break;
        case 6:
          setDate({ ...renewDate, month: 'June'});
          break;
        case 7:
          setDate({ ...renewDate, month: 'July'});
          break;
        case 8:
          setDate({ ...renewDate, month: 'August'});
          break;
        case 9:
          setDate({ ...renewDate, month: 'September'});
          break;
        case 0:
          setDate({ ...renewDate, month: 'October'});
          break;
        default:
          
      }

      if(lastTwo[0]=== 1 || lastTwo[0] === 2 || lastTwo[0] === 3){
        setWeek('Week 1');         
        // console.log(week);
      }
      else if(lastTwo[0]=== 4 || lastTwo[0] === 5 || lastTwo[0] === 6){
        setWeek('Week 2');
        // console.log(week);
      }
      else if(lastTwo[0]=== 7 || lastTwo[0] === 8){
        setWeek('Week 3');
        // console.log(week);

      }
      else if(lastTwo[0]=== 9 || lastTwo[0] === 0){
        setWeek('Week 4');   
        // console.log(week);
      }
      setDisplay('d-block');
    }


  }

  function clearInputs(){
    setNum({ ...plateNum, number: '' });
    setDisplay('d-none');
    setWeek('');
    setDate({ ...renewDate, month: ''});
  }
  return (
    <div className="App">
        <header className="App-header">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your plate number</Form.Label>
            <Form.Control className="text-center" type="text" name="plateNum" value={plateNum.number} onChange={handleInputChange} placeholder="Enter Plate Number" />
          </Form.Group>
          <Button variant="secondary" className="mr-2" onClick={clearInputs}>
            Clear
          </Button>
          <Button variant="primary" className="mr-2" type="submit" onClick={checkRenewDate}>
            Submit
          </Button>
          <div className={display}>
            <h5 className="mt-4">Renew Date: {week} of {renewDate.month}</h5>
          </div>
        </Form>
        <div className='container mt-5'>
          <div className='col-lg-12 mt-5 pt-5'> 
          <FontAwesomeIcon icon={faLink} /> <a target='_blank' href='https://www.facebook.com/AngIyongKasangga' className='text-white' style={{ textDecoration: 'none' }}>KasanggaVlogs</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
