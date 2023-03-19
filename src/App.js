import logo from './logo.svg';
import './App.css';
import {  useEffect, useRef, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { NavLink, Route, Routes } from 'react-router-dom';
import Description from './Description';

function App() {

const[list,setlist]=useState([
 
  { name:"la casa del papel",video:"https://www.youtube.com/embed/emo8VqrXEyc",imgsr:"https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/la-casa-de-papel-netflix-que-vaut-la-saison-5-4676832/99576756-1-fre-FR/La-Casa-de-Papel-Netflix-Que-vaut-la-saison-5.jpg",rate:"4",descr:"Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution"},
  {name:"prison breack",video:"https://www.youtube.com/embed/xxTdo_ch-VE",imgsr:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/81B830426805BFB41DCAC2E010EA45661FF55AC9F45D871DC0CEAF342376EFEF/scale?width=1200&aspectRatio=1.78&format=jpeg",rate:"3",descr:"Prison Break is telling the story of a man (Michael Scofield) who wants to help his brother (Lincoln Burrows - who thinks he's innocent) to escape from the prison where he has been incarcerated."},
  {name:"fantastic four",video:"https://www.youtube.com/embed/gPbtiDdhGH4",imgsr:"https://cdn.britannica.com/38/182838-050-F71E4278/image-Fantastic-Four.jpg",descr:"Reed Richards s'apprête à explorer le coeur du cosmos pour percer les mystères de nos origines. À ses côtés: l'astronaute Ben Grimm, son ex-compagne Sue Storm et le pilote casse-cou Jimmy Storm. Au cours de leur mission, la station spatiale s'engouffre dans un nuage de particules radioactives. Les codes génétiques des quatre astronautes en sont altérés à jamais.",rate:"2.5"},
]) 

const[filtrerdList,setfilter]=useState(list)
useEffect(

()=>{
  setfilter(list)
},[list]) 


const p=useRef()
const p2=useRef()
const p3=useRef()
const p4=useRef()
const add=()=>{
  setlist([...list,{name:p.current.value,
    imgsr:p3.current.value,
    rate:p2.current.value,
    
  }])
}
const filtrer=()=>{
  setfilter(list.filter(e=>e.name.includes(p4.current.value)))
}
  return (
    <div className="App">
    
      <div className="name">
      <input type={"text"}ref={p}placeholder="name mouve"></input>
      
      <input type={"text"}ref={p2}placeholder="rate"></input>

      <input type={"text"}ref={p3}placeholder="image link"></input>
      
      <input type={"text"} onChange={filtrer} ref={p4}></input>
      
      
      <button onClick={add}className='button'>+</button>
      </div>
      <br></br>
      <Routes>
        <Route path='/'element ={<div className='movielist'>
      {filtrerdList.map((e,index)=>
     <NavLink to={index.toString()}>
      <p className='deux'>
            <img src ={e.imgsr}></img>
        {e.name}
        <StarRatingComponent 
          name="rate2" 
         
          starCount={5}
          value={e.rate}
        />
  
      
      
      </p></NavLink>)}
      
      </div>} ></Route>
      </Routes>
      
      <Routes>
        <Route path={'/:id'} element={<Description mouvie={list}></Description>} ></Route>
      </Routes>
    </div>
  
  );
}

export default App;
