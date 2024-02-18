
import {  useEffect, useState } from 'react';
import './header.scss' ;
import PendingOrder from './pendingorder';


type header ={

    title: String;
    thumbnail: String;
    author: String;
    difficulty: String;

}




 function Header ({recipes, buy, setBuy}){


    let [order, setOrder] = useState(0);

        // console.log(recipes.recipes[0],recipes.recipes.length);

    // useEffect(PendingOrder(), [buy, order]);


    const Nextbutton = () => {

        if(order<recipes.length-1 ){ setOrder(()=>  (order+1));} else {setOrder(0)}

    }

    const Prevbutton = () => {

        if(order==0 ){ setOrder(()=>  (recipes.length-1));} else {setOrder(()=>  (order-1));}


    }


    const Buyone = () => {

        {buy.push(recipes[order].header.title)}   ;

        // console.log(buy, buy.length, recipes[order].header.title);

    }


    return (


    <>

     

        {order< recipes.length && order>0? <h1> {recipes[order].header.title} </h1> : <h1> {recipes[0].header.title} </h1> }

        {order< recipes.length && order>0? <img src={recipes[order].header.thumbnail} />  : <img src={recipes[0].header.thumbnail} />}

        {order< recipes.length && order>0? <p> {recipes[order].header.author} - {recipes[order].header.difficulty} </p> : <p> {recipes[0].header.author} - {recipes[0].header.difficulty} </p>}

        <button type="button" onClick={Prevbutton}>Previous recipe</button> <button type="button" onClick={Nextbutton}>Next recipe</button>

        <button type="button" onClick={Buyone}> Buy one </button>


        <ul> 
               <h2>Les ingredients</h2> 

            {recipes[order].ingredients.map((ingredient) => (
                
                <>

                  <li key={ingredient.id}>
                  <a className='qt'>  {ingredient.quantity } {ingredient.unit }</a>  {ingredient.name}
                 </li>

                 </>
    
         ))}

        </ul>


        <ul>
            <h2>Les instructions</h2>

        {recipes[order].instructions.map(instruction => (


            <li key={instruction.id}>{instruction}</li>


        ))

        }

    </ul>

  



    </>



    );

    

}


export default Header;