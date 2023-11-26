import React from 'react'
import './Descriptionfestival.css';
 
function Descriptionfestival() {
  return (
 <div> 
 <div className='desfes'  >

</div>
<h1>DECRIPTION</h1>
 <p className='para'>Nancy Ajram est la plus jeune chanteuse libanaise à avoir sorti un single. C'est en 1998, à l'âge de 15 ans, que sortent ses premiers singles "Hobbak Allam Albi elGheere" et "Oulha Kelma Ala Shani" ainsi que son premier album Mihtagalak ("J'ai besoin de toi"). L'album Sheel Oyoonak Anni ("Arrête de me fixer"), sorti en 2000 obtient un plus grand succès que le précédent. Le single (Akhasmak Ah) et l'album (Ya Salam) terminent premiers dans les hit-parades libanais et égyptiens (l'Égypte étant le plus grand marché de musique arabe).

Elle commence à chanter dès sa jeunesse en participant à des concours pour la chaîne de télévision libanaise arabophone LBC. Elle gagne un concours en chantant un morceau d'Oum Kalthoum dans l'émission Noujoum Al-Moustaqbal (Les étoiles du futur) sur Future TV. Sa carrière a réellement commencé en 2003, quand elle est arrivée à imposer un nouveau style avec le morceau Akhasmak ah.

C'est Nadine Labaki, la célèbre réalisatrice libanaise (Caramel…), qui a dirigé le tournage de certains de ses clips les plus célèbres comme Ah W Noss, Lawn Oyounak ou Enta Eih…

En 2010, elle est choisie pour interpréter en arabe avec K'naan Wavin' Flag, l'hymne de la coupe du monde de football de 2010.

Elle est désormais l'égérie de Coca-Cola et de la gamme de bijoux « Damas » dans le monde arabe.

En 2014 elle devient l'ambassadrice de la marque de Smartphones Huawei et devient l'égérie de leur nouveau produit, le Ascend Mate 7. De nombreuses pubs sont alors réalisées à partir de clips existants. En 2014, Nancy lance le Hashtag "Spread the Nancy love" en rapport avec son dernier album.

Jiji Lamara est le manager officiel de la chanteuse depuis ses débuts, il est donc avec elle lors de tous ses déplacements et prend soin de la Nancy et de sa carrière</p>
 
<div>
<h9 className='titre'>Billets</h9>
<p className='chgr'>Chaise <span className='prix'>90DT</span></p>
<div className="numbers-row">
     
<a className="plus">+</a>
  <input type="text" defaultValue={0} className="qty2 form-control" name="quantite_1172" />
  <a className="plus">-</a> </div>
  <p className='chgr'>Gradin<span className='prix'>60DT</span> </p>
  <div className="numbers">
     
     <a className="moin1">+</a>
       <input type="text" defaultValue={0} className="zero" name="quantite_1172" />
       <a className="moin">-</a> </div>
       <button  className='but'>Ajouter Au Panier</button>
</div>   
 </div>


 
 
  )
}

export default Descriptionfestival