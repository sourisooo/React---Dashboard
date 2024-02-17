
import { useEffect, useState } from 'react';
import './currencieslist.scss';

function Currencieslist({currencieslist}){

    const [basevalue, setBaseValue] = useState(1);
    const [calcvalue, setCalcValue] = useState(0);
    const [change, setChange] = useState(0);
    const [changename, setChangeName] = useState('');

    const inputElement = document.querySelector(".change"); 

    const handlehover = (e) => {
        
        let hovered = e.currentTarget.innerText.split('--');

        setChangeName(() => hovered[0] );

         setChange(() => (hovered[1]*basevalue).toFixed(2) );

         setCalcValue(() => change);


      };

      const updatechange = (e) => {

        setBaseValue(inputElement.value);

        setCalcValue (() => (change*inputElement.value).toFixed(2) );

        console.log(basevalue);


      }


    return (



        <>

        <h2>Change for <input type="text" className="change" placeholder="1" onChange={updatechange} /> Euros: {changename} {calcvalue}   </h2>
        


        <div className='currenciesbox'>



       {currencieslist.map(currencie => (


               <li key={currencie.code} onMouseEnter={handlehover}> {currencie.description} --  <a className="rate">{currencie.rate.toFixed(2)}</a></li> 


        ))} 


        </div>

        </>

  

    );





}


export default Currencieslist;