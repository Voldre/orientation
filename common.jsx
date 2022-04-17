
// Super important : tout les éléments doivent être inclus dans UN SEUL COMPOSANT
// Autrement dit, on ne peut pas faire return(<div1></div1> <div2></div2>)
// Il faut tout intégrer dans "un seul et même bloc" return (<div3>...</div3>)

function Header() {
    return (<div class="title" >
   <h1 style={{textDecoration:'underline'}} >Orientation ...</h1>
   <h3>L'outil d'orientation fait par les jeunes, pour les jeunes</h3>
   <h3>*Autres = Réorientation (issu d'une autre université) + Etrangés + Reprise d'étude</h3>
   <br/><br/>
</div>) } 

function Menu(){ return( <div>
<nav>
   <ul>
       <li class="deroulant ">
           <a href="# "><img src="images/menu.png" class="icon " /></a>
           <ul class="sous ">
               <li><a href="index.html ">Vue d'ensemble</a></li>
               <li><a href="alternance.html">L'alternance</a></li>
               <li><a href="questionnaire.html">Formations et passions</a></li>
               <li><a href="# ">. . .</a></li>
               <li><a href="# ">. . .</a></li>
           </ul>
       </li>
   </ul>
</nav><br/></div>)}


function Footer(){
    return(<div><div class="conteneur ">
    <h2>Qu'est-ce que c'est ?</h2>
    <br/>
    <p>Un outil en ligne vous permettant de ...</p>
    </div><div class="conteneur ">
    <h2>Sources</h2><br/>
    <ul>
        <li>Répartition des lycéens par formation et origines : <a href={"https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup-2018/export/"}>
        Parcoursup 2018 - vœux de poursuite d'études et de réorientation dans l'enseignement supérieur et réponses des établissements </a></li>
    </ul>
    </div></div>)
 }