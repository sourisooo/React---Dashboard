
import './currencieslist.scss';

function Currencieslist({currencieslist}){

    console.log (currencieslist);

    return (



        <>

        <ul> Change for 1 Euro </ul>


        <div className='currenciesbox'>



       {currencieslist.map(currencie => (


               <li key={currencie.code}> {currencie.description} <a className="rate">{currencie.rate}</a></li> 


        ))} 


        </div>

        </>

  

    );





}


export default Currencieslist;