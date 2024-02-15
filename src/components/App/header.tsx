
import './header.scss' ;

type header ={

    title: String;
    thumbnail: String;
    author: String;
    difficulty: String;

}


function Header ({header}: header){

    return (

    <>
    <h1> {header.title} </h1>
    <img src={header.thumbnail} />
    <p> {header.author} - {header.difficulty} </p>

    </>);

    

}


export default Header;