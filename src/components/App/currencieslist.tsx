
import './currencieslist.scss';

function Currencieslist({currencieslist}){

    console.log (currencieslist);

    return (



        <>

        <h2> Change for 1 Euro </h2>


        <div className='currenciesbox'>



       {currencieslist.map(currencie => (


               <li key={currencie.code}> {currencie.description} <a className="rate">{currencie.rate}</a></li> 


        ))} 


        </div>

        </>

  

    );





}


export default Currencieslist;