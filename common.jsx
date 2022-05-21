
// fetch to getJSON from JS : https://stackoverflow.com/questions/1639555/return-get-data-in-a-function-using-jquery 

function getJSON(file)
{
     var result = null;
     $.ajax({
        url: file,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data;
        } 
     });
     return result;
}


// props permet de récupérer tous les paramètres (attributs) défini dans le composent
// Exemple ici : props.id et props.data, les arguments/attributs de mes composents #HTML
function ChartComponent(props){
    //console.log("props:");
    //console.log(props);
    var monId = "pie-chart-" + props.id;
    if(props.size == undefined){
            props.size = 280;
    }
    return(<div class="chart" style={{width:props.size}}> 
    <canvas id={monId}>
    </canvas>
    </div>)
}

//fetch("fr-esr-parcoursup-2018.json ")

//$.getJSON('parcoursup-2018-diplomes.json', function(data) {
    //console.log('data',data); });


// Super important : tout les éléments doivent être inclus dans UN SEUL COMPOSANT
// Autrement dit, on ne peut pas faire return(<div1></div1> <div2></div2>)
// Il faut tout intégrer dans "un seul et même bloc" return (<div3>...</div3>)

function Header() {
    return (<div class="title" >
   <h1 style={{textDecoration:'underline'}} >Orientation Etudiant</h1>
   <h3>L'outil d'orientation fait par les jeunes, pour les jeunes</h3>
   <br/><br/>
 </div>) } 

function Menu(){ return( <div><div>
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
</nav></div><img src="images/logo transparent.png" style={{zIndex:'-1',position:'absolute',top:'17px',right:'25px',width:'220px'}} />
<br/></div>)}


function Footer(){
    return(<div><div class="conteneur ">
    <h2>Orientation Etudiant - Qu'est-ce que c'est ?</h2>
    <br/>
    <p>C'est un outil en ligne développé par des jeunes, pour des jeunes. Afin de vous accompagner dans votre orientation après le Bac.<br/>
    Ainsi, ce site à pour objectif de vous donner <strong>une vision réelle</strong> de ce que sont les études supérieures aujourd'hui, avec à l'appui des vrais chiffres.</p>
    <br/>
    <h3>Pourquoi ce projet ?</h3>
    <p>Nous sommes nous-même des étudiants et nous avons vécu la même situation que vous. Ainsi, nous avons conscience des choses que nous aurions aimés connaître il y a quelques années.<br/>
    De plus, nous avons constaté suite à une <a title="Afficher l'étude" target='_blank' href='images/devenir1an.png' class='etude' >étude du gouvernement</a> que plus d' <strong>1 étudiant sur 4</strong> se réoriente ou abandonne après sa première année d'étude supérieure.<br/>
    Et cette étude ne prend même pas en compte le fort taux de redoublement, parfois dû à une mauvaise orientation.</p>
    </div><div class="conteneur">
    <h2>Sources</h2><br/>
    <ul>
        <li>Répartition des lycéens par formation et origines : <a target="_blank" href={"https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup-2018/export/"}>
        Parcoursup 2018 - vœux de poursuite d'études et de réorientation dans l'enseignement supérieur et réponses des établissements </a></li>
        <li>Rémunération en alternance : <a target="_blank" href={"https://www.alternance-professionnelle.fr/salaire-alternant/"}>Contrat d'apprentissage et de professionnalisation</a> (début 2021 et début 2022) </li>
        <li>Hausse du SMIC le 1er mai 2022 : <a target="_blank" href={"https://travail-emploi.gouv.fr/actualites/presse/communiques-de-presse/article/smic-revalorisation-de-2-65-a-compter-du-1er-mai-2022#:~:text=Avec%20cette%20augmentation%2C%20le%20SMIC,euros%20%C3%A0%201645%2C58%20euros."}>Revalorisation du SMIC - Ministère du travail, de l'emploi et de l'insertion</a></li>
        <li>Nombre d'étudiants en alternance et répartition : <a target="_blank" href={"https://publication.enseignementsup-recherche.gouv.fr/eesr/FR/T260/l_apprentissage_dans_l_enseignement_superieur/"} >Ministère de l'enseignement supérieur - Apprentissage dans l'enseignement supérieur</a></li>
        <li>Plus d'informations sur l'alternance : <a target="_blank" href={"https://www.alternance.emploi.gouv.fr/decouvrir-lalternance"}> </a> Portail de l'alternance  - Site du Ministère de l'Emploi</li>
        <a href="../" ><button class='root'>Site du créateur</button></a>

    </ul>
    </div></div>)
 }