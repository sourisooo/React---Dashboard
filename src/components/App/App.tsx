import logo from '../../assets/logo.svg';
import './App.scss';
import Currencieslist from './currencieslist';
import currencies from './currencies';
import Header from './header';
import Ingredients from './ingredients';
import Instructions from './instructions';
import Fullgame from './fullgame';
import Fullgame2 from './fullgame2';
import Fullgame3 from './fullgame3';



function App() {

  const header = {
  title: 'Crêpes raffinées',
  thumbnail: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  author: 'John Deuf',
  difficulty: 'Facile'}

  const ingredients = [
    {
      id: 1,
      quantity: 375,
      unit: 'g',
      name: 'de farine tamisée',
    },
    {
      id: 2,
      quantity: 3,
      unit: 'pincées',
      name: 'de sel',
    },
    {
      id: 15,
      quantity: 50,
      unit: 'g',
      name: 'de sucre en poudre',
    },
    {
      id: 28,
      quantity: 6,
      unit: '',
      name: 'oeufs entiers',
    },
    {
      id: 4,
      quantity: 80,
      unit: 'g',
      name: 'de beurre fondu',
    },
    {
      id: 3,
      quantity: 1,
      unit: 'L',
      name: 'de lait',
    },
    {
      id: 845,
      quantity: 3,
      unit: 'cuillerées à soupe',
      name: 'de rhum ambré ou vieux',
    },
  ];


  const instructions= [
    'Tamiser la farine',
    'Rajouter le sucre et le sel',
    'Rajouter les oeufs tout en mélangeant',
    'Rajouter le beurre fondu tout en mélangeant',
    'Rajouter le lait petit à petit tout en mélangeant',
    'Rajouter le rhum tout en mélangeant. À ce stade si vous fatiguez, n\'hésitez pas à vous en servir un petit verre avant d\'attaquer la suite.',
    'Laisser reposer une heure',
    'Faire cuire à la poêle ou à la machine à crêpes.',
    'Dégustez !',
  ];



  return (



    <div className="app">


  
      <div className="app-header">

      <Header header = {header}/>

      <Ingredients ingredients = {ingredients}/>

      <Instructions instructions= {instructions}/>


      </div>

      <div className="app-add">

      <div className="app1"> <Currencieslist currencieslist= {currencies} /></div>

        {/* <div className="app2">  <Fullgame2/>  </div> */}

        <div className="app2">  <Fullgame3/>  </div>

        <div className="app3">  <Fullgame/>  </div>

      </div>

    </div>

 


  );
}



          
export default App;
