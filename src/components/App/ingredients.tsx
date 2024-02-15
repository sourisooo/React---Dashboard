
import './ingredients.scss'

function Ingredients ({ingredients}){

    console.log(ingredients);

    return (

        <ul> 
               <h2>Les ingredients</h2> 

            {ingredients.map((ingredient) => (
                
                <>

               

                  <li key={ingredient.id}>
                  <a className='qt'>  {ingredient.quantity } {ingredient.unit }</a>  {ingredient.name}
                 </li>

                 </>
    
         ))}

        </ul>



    );

}




export default Ingredients;