

var alternanceData;
alternanceData = getJSON('data/MENJS-MESRI-DEPP-SIFA-2021.json');

const keys_to_keep = ["BTS","DUT","Autres niveau III","Licence","Autres niveau II","Diplômes d'ingénieurs","Master","Autres niveau I"];
const keys_to_show = ["BTS","DUT","Autres Bac+2","Licence Professionnelle","Autres Bac+3","Diplômes d'ingénieurs","Master","Autres Bac+5 et supérieur"];
        
var displayData = []
var nbAlternants = 0;

for(var i in alternanceData){
   console.log(i)
   if(keys_to_keep.includes(alternanceData[i]["Categorie"])){
      displayData[alternanceData[i]["Categorie"]] = alternanceData[i]["2019-20"];
      nbAlternants += alternanceData[i]["2019-20"]
   }
      }
console.log(displayData);

function AlternanceData() {     
   var colors = ["#525260","#722030",
           "#695000","#552055","#4a406f","#026029"]

    return(
         <div style={{border:'2px solid #041c5f;'}}>
         <li class='title' style={{color:'#144ccf'}} >Répartition des alternants <br/>en étude supérieurs en 2020</li>
         <li>{nbAlternants} alternants</li>
         <ChartComponent id="diplomes" data={displayData} size="370px" /> 
         <p style={{margin:'10x'}}>Source : MENJS-MESRI-DEPP, SIFA <br/>(Système d'Information Formation des Apprentis)</p>
         </div>
         ) // Ne pas oublier de mettre le Diagramme lié à chacune des parties 
}

console.log(alternanceData);

ReactDOM.render(<React.Fragment>
    <Menu /><Header_Alternance />
    <Alternance />
    <AlternanceFigures />
    <Footer />
    </React.Fragment>, 
    document.getElementById("body")
)
includeHTML()

updateChart("pie-chart-diplomes",displayData);



function Header_Alternance(){
    return(<div class='title' ><h1>L'Alternance, qu'est-ce que c'est ?</h1>
    <h2>C'est suivre une formation (BTS, DUT, Licence, ...) tout en travaillant en entreprise</h2>
    </div>)
}

function Alternance(){
    return(<div style={{textAlign:'center'}}>
    <div class='section'><h3>Une formation avec un rythme d'alternance</h3>
    <li>Alternez des périodes à l'école et des périodes en entreprise</li>
    <li style={{marginLeft:"6%"}}>Rythme variable (en semaines ou mois) : 1-1, 1-2, 2-2, ...</li>
    <li>A l'école, cela se passe comme dans les formations en continu</li>
    <li>En entreprise, vous avez le même statut que les autres salariés</li>
    <li>Exemple :</li><img src={"images/exemple-alternance-rythme.png"} width={'100%'} /></div>


    <div class='section'><h3>Une formation avec une rémunération</h3>
    <li>L'alternance confère une rémunération mensuelle sur toute la durée de la formation</li>
    <li>Cette rémunération est <strong>proportionnelle</strong> à 3 éléments : 
    <ul class='sous-level'>
    <li>Le montant du <a target={"_blank"} href={"https://www.previssima.fr/actualite/le-smic-augmentera-au-1er-mai-2022-pour-setablir-a-164558-brut.html"}>SMIC brut</a> (1645€ en Mai 2022) ou du <a href={""}>SMC</a></li>
    <ul> &nbsp; &nbsp; &nbsp;  &nbsp; Les apprentis n'ont pas de charge. Le salaire brut et net sont donc identiques</ul>
    <li>A l'âge de l'apprenti, la rémunération évolue avec la tranche d'âge</li>
    <li>Au nombre d'années d'apprentissage (de la 1e à la 3e année)</li>
    </ul>
    </li>
    <li style={{marginLeft:"-1%",lineHeight:2.5}}>Résumé du salaire minimum des apprentis (% du SMIC brut ou SMC)</li>
    <table>
    <tr>
        <th>Alternance en contrat<br/> d'apprentissage</th>
        <th>1ere année</th>
        <th>2ème année</th>
        <th>3ème année</th>
    </tr>

    <tr>
        <td>Moins de 18 ans</td>
        <td>27% (444€)</td>
        <td>39% (641€)</td>
        <td>55% (904€)</td>
    </tr>
    <tr>
        <td>18 à 20 ans</td>
        <td>43% (707€)</td>
        <td>51% (839€)</td>
        <td>67% (1102€)</td>
    </tr>
    <tr>
        <td>21 à 25 ans</td>
        <td>53% (871€)</td>
        <td>61% (1003€)</td>
        <td>78% (1283€)</td>
    </tr>
    <tr>
        <td>26 ans et plus</td>
        <td>100% (1645€)</td>        
        <td>100% (1645€)</td>   
        <td>100% (1645€)</td>

    </tr>
    </table>
    </div>

    
    <div class='section'><h3>Une formation avec autant voire plus de résultats à la clé</h3>
    <li>Moins de théorie, plus de pratique pour concrétiser vos connaissances</li>
    <li>Confrontation à des projets réels, avec de vrais enjeux et difficultés</li>
    <li>Gain d'expériences professionnelles, élément primordial à la recherche d'emploi</li>
    <li>Développement de compétences reflétant les besoins des entreprises</li>
    </div>
    
    <div class='section'><h3>Une formation plus humaine</h3>
    <li>Témoignez de vos compétences et comprenez qu'elles sont lucratives</li>
    <li style={{marginLeft:"6%"}}>Vous saurez que vos compétences ont une valeur financière</li>
    <li>Sentez-vous utile en apportant de la valeur aux autres, à l'entreprise</li>
    <li>Étendez votre réseau professionnel, obtenez de nouvelles opportunités</li>
    <li>Travaillez en équipe avec des personnes d'horizons variés</li>
    </div>
    
    </div>)
}

function AlternanceFigures(){
    return(
    <div class="bigcontainer">
    <h2>Quelques chiffres</h2>
    <div class="flexcontainer">
   <AlternanceData />
   <AlternanceINSEE />
   </div>
    </div>
    )
}
// Importation du tableau d'analyse du ministère
// <iframe src="https://publication.enseignementsup-recherche.gouv.fr/eesr/FR/EESR14_ES_20/IFR/ILL_01/" width="98%" min-width="500px" height="600px" frameborder="0" scrolling="auto"></iframe>


function AlternanceINSEE(){
   return(<div><h3>Nombre d'étudiants en alternance par diplôme</h3><div w3-include-html="insee.html">
   </div></div>)
}

function includeHTML() {
   var z, i, elmnt, file, xhttp;
   /* Loop through a collection of all HTML elements: */
   z = document.getElementsByTagName("*");
   for (i = 0; i < z.length; i++) {
     elmnt = z[i];
     /*search for elements with a certain atrribute:*/
     file = elmnt.getAttribute("w3-include-html");
     if (file) {
       /* Make an HTTP request using the attribute value as the file name: */
       xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4) {
           if (this.status == 200) {elmnt.innerHTML = this.responseText;}
           if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
           /* Remove the attribute, and call this function once more: */
           elmnt.removeAttribute("w3-include-html");
           includeHTML();
         }
       }
       xhttp.open("GET", file, true);
       xhttp.send();
       /* Exit the function: */
       return;
     }
   }
 }


 
function updateChart(id, table){

   console.log("here")

   var keys = keys_to_keep; 
   var showKeys = keys_to_show;
   var colorsChart = ["#d21243","#7f257f","#ab2049",
   "#3a30af","#5a598f","#a99000","#028089","#529059"];


   var data = [{
           data: [],
           labels: [],
           backgroundColor: [],
           borderColor: "#fff"
           }];
   
   var options = {
           plugins: {
                   datalabels: {
                   formatter: (value, ctx) => {
                           let datasets = ctx.chart.data.datasets;
   
                           if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                           let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                           let percentage = Math.round((value / sum) * 100) + "%";
                           if (Math.round((value / sum) * 100) > 3) {
                                   return percentage;
                           } else {
                                   return "";
                           }
                           } else {
                           return percentage;
                           }
                   },
                   color: "white",
                   align:'start',
                   offset:-26
                   },
                   legend: {
                           labels: {
                             color: "wheat",  // not 'fontColor:' anymore
                             font: {
                               size: 14 // 'size' now within object 'font {}'
                             }
                           }
                   }
           }
           };
   
           var ctx = document.getElementById(id).getContext("2d");
           var myChart = new Chart(ctx, {
           type: 'pie',
           data: {
                   datasets: data
           },
           plugins: [ChartDataLabels],
           options: options
           });
   
   for(var j in colorsChart){
   myChart.data.datasets[0].backgroundColor.push(colorsChart[j]);
   }

   for (var j in keys) {
           myChart.data.datasets[0].data.push(table[keys[j]]);
           myChart.data.labels.push(showKeys[j]);
           }
   
           myChart.update();
}