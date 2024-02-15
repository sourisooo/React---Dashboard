
import './instructions.scss';

function Instructions ({instructions}){

return (

    <ul>
            <h2>Les instructions</h2>

        {instructions.map(instruction => (


            <li key={instruction.id}>{instruction}</li>


        ))

        }

    </ul>





)


}


export default Instructions;