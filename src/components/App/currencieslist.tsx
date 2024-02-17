
import { useEffect, useState } from 'react';
import './currencieslist.scss';

function Currencieslist({currencieslist}){


    const [basevalue, setBaseValue] = useState(1);
    const [change, setChange] = useState(0);
    const [changename, setChangeName] = useState('');

    const inputElement = document.querySelector(".change"); 

    const handlehover = (e) => {
        
        let hovered = e.currentTarget.innerText.split('--');

        setChangeName(() => hovered[0] );

        setChange(() => (hovered[1]*basevalue).toFixed(2) );


      };


    return (



        <>

        <h2>Change for <input type="text" className="change" placeholder="1" onChange={e => setBaseValue(inputElement.value)} /> Euros: {changename} {change}   </h2>
        


        <div className='currenciesbox'>



       {currencieslist.map(currencie => (


               <li key={currencie.code} onMouseEnter={handlehover}> {currencie.description} --  <a className="rate">{currencie.rate.toFixed(2)}</a></li> 


        ))} 


        </div>

        </>

  

    );





}


export default Currencieslist;