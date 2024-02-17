
import { useEffect, useState } from 'react';
import './header.scss' ;

type header ={

    title: String;
    thumbnail: String;
    author: String;
    difficulty: String;

}


function Header (recipes){


    let [order, setOrder] = useState(0);


    // console.log(recipes.recipes[0],recipes.recipes.length);


    const Nextbutton = () => {

        if(order<recipes.recipes.length-1 ){ setOrder(()=>  (order+1));} else {setOrder(0)}

    }

    const Prevbutton = () => {

        if(order==0 ){ setOrder(()=>  (recipes.recipes.length-1));} else {setOrder(()=>  (order-1));}


    }


    return (


    <>

        {order< recipes.recipes.length && order>0? <h1> {recipes.recipes[order].header.title} </h1> : <h1> {recipes.recipes[0].header.title} </h1> }

        {order< recipes.recipes.length && order>0? <img src={recipes.recipes[order].header.thumbnail} />  : <img src={recipes.recipes[0].header.thumbnail} />}

        {order< recipes.recipes.length && order>0? <p> {recipes.recipes[order].header.author} - {recipes.recipes[order].header.difficulty} </p> : <p> {recipes.recipes[0].header.author} - {recipes.recipes[0].header.difficulty} </p>}

        <button type="button" onClick={Prevbutton}>Previous recipe</button> <button type="button" onClick={Nextbutton}>Next recipe</button>


        <ul> 
               <h2>Les ingredients</h2> 

            {recipes.recipes[order].ingredients.map((ingredient) => (
                
                <>

                  <li key={ingredient.id}>
                  <a className='qt'>  {ingredient.quantity } {ingredient.unit }</a>  {ingredient.name}
                 </li>

                 </>
    
         ))}

        </ul>


        <ul>
            <h2>Les instructions</h2>

        {recipes.recipes[order].instructions.map(instruction => (


            <li key={instruction.id}>{instruction}</li>


        ))

        }

    </ul>


    </>



    );

    

}


export default Header;