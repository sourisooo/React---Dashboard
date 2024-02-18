import { useEffect, useState } from "react";


function PendingOrder({buy, setBuy}){

    const [update, setUpdate] = useState(false);

    const updatestate = () => {

        let listelement = document.querySelector('.pendingul');

        listelement.innerHTML='';


   

        if (update==false) {setUpdate(true);} {setUpdate(false);}

        addelement();

    }

    // console.log(buy, buy.length);

    const addelement = () => {

        buy.map((e, index) => {

        let list = document.querySelector('.pendingul');

        let newbuy = document.createElement('a');

        let deleteb = document.createElement('button');

        deleteb.setAttribute('type', 'button');

        deleteb.setAttribute('className', 'delete');

        deleteb.innerText = 'x';

        newbuy.innerText = `${e}`;

        newbuy.setAttribute('id', index);

        newbuy.setAttribute('className', 'pendinga');

        newbuy.appendChild(deleteb);

        newbuy.style.backgroundColor = 'white';

        newbuy.style.padding = '0.5em';

        newbuy.style.borderRadius = '25px';

        list?.appendChild(newbuy);

        // console.log(newbuy);

        console.log(buy);

    })

    }


        const deletestate = (e) => {

            console.log(e.target.parentNode.innerText.slice(0, -1));

            // setBuy(buy.filter(f => f != e.target.parentNode.innerText.slice(0, -1)));

            let index;

            setBuy(buy.toString().replace(`${e.target.parentNode.innerText.slice(0, -1)}`, '').replace(' ,', '').replace(',,', '').split(', '));


            // setBuy(index = buy.filter(f => f != e.target.parentNode.innerText.slice(0, -1)));

            // e.target.parentNode.remove();

            console.log(buy);


        }


    // useEffect(addelement, [updatestate, update, buy, setBuy])

    return (

   
        <div className='pending' onMouseEnter={updatestate} onClick={deletestate}>

        <h2> Pending Order (hover me to update order!) </h2>

        <ul className='pendingul' >

      
   
       {buy.map((e) => (
                
      

          <li>
           {e} - <button type="button" className="delete">X</button>
         </li>

   

 ))}

        </ul>       

        </div>

       


    )

  
}


export default PendingOrder;