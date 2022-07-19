/*
Array.filter function
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
// expected output: Array ["exuberant", "destruction", "present"]
Array.reduce function
const array1 = [1, 2, 3, 4];
const initValue = 0;
const sumWithInitial = array1.reduce((prevValue, currValue) => prevValue + currValue,initValue);
// 0 + 1 + 2 + 3 + 4 = 10

Condition Ternaire : condition ? exprSiVrai : exprSiFaux
*/

// Déclaration de nos variables/tableaux de données
var cycle2Data = getJSON('data/etudes-2e-provenance.json');
var cycle1Data = getJSON('data/parcoursup-2018-diplomes.json');
var bacData = getJSON('data/parcoursup-2018-baccalaureat.json');

var BacName = ["Bac Général", "Bac Technologique", "Bac Professionnel"];
var Alternance = {"BTS":10.6,"DUT":3,"Autres formations":1,"Ecole d'Ingénieurs":18.2,"Ecole d'Ingénieurs en alternance":18.2};

var colorsByDiplome={
        "Licence":"#4b4799",
        "Autres Bac+2, +3":"#2b2769",
        "Autres Bac+3 et >":"#2b2769",
        "DUT":"#5f255f",
        "DUT/BTS":"#9a1d50",
        "BTS":"#d21243",
        "Classes Prépas":"#B27200",
        "Prépa":"#B27200",
        "Prépa Intégrée":"#D26210",
        "Licence Pro":"#51128f",
        "PACES":"#028250",
        "Autres formations":"#927280",
        "Bac Général":"#127", 
        "Bac Technologique":"#22339f", 
        "Bac Professionnel":"#3355a9",
        "Autres*":"#447",
        "Autres":"#927280",

}


// Source 2021 (pas 2018) Article 09.06 : https://publication.enseignementsup-recherche.gouv.fr/eesr/FR/T129/l_orientation_des_nouveaux_bacheliers_sur_parcoursup_les_voeux_et_les_propositions_d_admission/ 

/*
// Initialisation des données de chaque baccalauréat
var bacData = [];
bacData["Bac G"] = {};
bacData["Bac Tech"] = {};
bacData["Bac Pro"] = {};

cycle1Data.map((table) =>{
        for(var i in bacData){
                if(bacData[i]["Candidats"] == undefined){
                        bacData[i]["Candidats"] = {};
                        bacData[i]["Admis"] = {};
                }
                bacData[i]["Candidats"][table['Filière de formation très agrégée']] = table["Dont " + i];
                bacData[i]["Admis"][table['Filière de formation très agrégée']] = table["Dont " + i + "__2"];
        }
})
console.log(JSON.stringify(bacData))
*/


function listeFormations(table) {

        var maliste = [];
        for (var i in table) {
        maliste.push(table[i]['Filière de formation très agrégée']);
        }
        return maliste;
}

function DiplomesC1Ancien() {        
        // Ajout d'éléments calculés
        cycle1Data.map((table) =>{
                table["Effectif total des admis"] = table["En Phase Principale__1"] + table["En Phase Complémentaire__1"];
                table["Autres"] = table["Effectif total des admis"] - table["Dont Bac G__2"] -table["Dont Bac Tech__2"] - table["Dont Bac Pro__2"];      
        })

         return(
         <div id='diplomesC1'>{cycle1Data.map((table, myId) =>(
                <div class='container' id={"diplomesC1-"+myId}>
                <li class='title' >{table["Filière de formation très agrégée"]}</li>
                <li>{table["Effectif total des admis"]} admis</li>
                <li>Dont {Math.round(1000 * table["Dont Bac G__2"] / table["Effectif total des admis"]) / 10} % venant d'un Bac Général</li>
                <li>Dont {Math.round(1000 * table["Dont Bac Tech__2"] / table["Effectif total des admis"]) / 10 } % venant d'un Bac Technologique</li>
                <li>Dont {Math.round(1000 * table["Dont Bac Pro__2"] / table["Effectif total des admis"]) / 10} % venant d'un Bac Professionnel </li>
                <li>Dont {Math.round(1000 * table["Autres"] / table["Effectif total des admis"]) / 10} % autres (réorientation, étrangés, reprise d'études)</li>
                <ChartComponent id={"diplomesC1-"+myId} data={table} /> 
                </div>
                ))}
        </div>) // Ne pas oublier de mettre le Diagramme lié à chacune des parties 
}



function DiplomesC1() {        

        var colors = ["#525260","#722030",
                "#795000","#552055","#4a406f","#026029"]

        // Ajout d'éléments calculés
        cycle1Data.map((table) =>{
                table["Effectif total des admis"] = table["En Phase Principale__1"] + table["En Phase Complémentaire__1"];
                table["Autres"] = table["Effectif total des admis"] - table["Dont Bac G__2"] -table["Dont Bac Tech__2"] - table["Dont Bac Pro__2"];      
        })
        
        var mesDatas = cycle1Data.slice(0,-1); // Sans le "Total"
         return(<div class='bigcontainer'><h2>Répartition des lycéens admis par formation - 1er cycle (2018) <Source maSource="bac" /></h2>
         <div id='diplomesC1' class='flexcontainerFormation'>{mesDatas.map((table, myId) =>(
                <div class='container' id={"diplomesC1-"+myId} style={{backgroundColor:colors[myId]}}>
                <li class='title' >{table["Filière de formation très agrégée"]}</li>
                <li>{table["Effectif total des admis"]} admis </li>
                <PercentageAlternance diplome={table["Filière de formation très agrégée"]} />
                <ChartComponent id={"diplomesC1-"+myId} data={table} size="225" /> 
                </div>
                ))}
        </div><h3>*Autres = Réorientation (venant d'une autre université) + Etrangés + Reprise d'étude</h3>
        </div>) 
}

function PercentageAlternance(diplome){
        diplome = Object.values(diplome)[0];
        if(Alternance[diplome]){
                if(diplome == "Ecole d'Ingénieurs"){
                        return(<div>
                                <li>Dont {Alternance[diplome]}% en <span id='alt'>alternance</span></li>
                                <ChartComponent id={"diplomesC2-3"} data={cycle2Data["Ecole d'Ingénieurs en alternance"]} size="225" /> </div>)
                }else if(diplome == "Ecole d'Ingénieurs en alternance"){
                        return(<li>Représentant {Alternance[diplome]}% des élèves en <span class='alt'>Ecole d'Ingénieurs</span></li>)
                }
                return(<li>Dont {Alternance[diplome]}% en alternance</li>)
        }
        return(<p> &nbsp;</p>);
}

function revert(){
        if(document.getElementById("pie-chart-diplomesC2-1")){
        if(document.getElementById("pie-chart-diplomesC2-1").style.display == "none"){
                document.getElementById("pie-chart-diplomesC2-1").style.display="block";
                document.getElementById("pie-chart-diplomesC2-3").style.display="none";
                document.getElementById('diplomesC2-1').firstChild.style.fontSize = "18px";
                document.getElementById('diplomesC2-1').firstChild.innerText = "Ecole d'Ingénieurs";
                document.getElementById('diplomesC2-1').children[1].firstChild.innerText = "48200 admis";
                document.getElementById('diplomesC2-1').children[2].firstChild.innerHTML ="Dont 18.2% en <span id='alt'>alternance</span>";
                document.getElementById('diplomesC2-1').children[1].lastChild.firstChild.innerHTML = "<p> Source : <br><a target=\"_blank\" href=\"https://www.enseignementsup-recherche.gouv.fr/fr/les-effectifs-inscrits-en-cycle-ingenieur-en-2021-2022-85781\">SIES effectifs inscrits en cycle ingénieur 2021-2022</a></p>";
        }else{
                document.getElementById("pie-chart-diplomesC2-1").style.display="none";
                document.getElementById("pie-chart-diplomesC2-3").style.display="block";
                document.getElementById('diplomesC2-1').firstChild.style.fontSize = "15px";
                document.getElementById('diplomesC2-1').firstChild.innerText = "Ecole d'Ingénieurs en alternance";
                document.getElementById('diplomesC2-1').children[1].firstChild.innerText = "8775 admis";
                document.getElementById('diplomesC2-1').children[2].firstChild.innerHTML ="Revoir la <span id='alt'>liste complète</span>";
                document.getElementById('diplomesC2-1').children[1].lastChild.firstChild.innerHTML = "<p> Source : <br><a target=\"_blank\" href=\"https://www.education.gouv.fr/reperes-et-references-statistiques-2021-308228\">RERS 2021 - 5.06 L'apprentissage dans le supérieur</a></p>";
        }
        
        document.getElementById('alt').addEventListener("click", revert);
        }
}

function Baccalaureat(){
        var colors = ["#112249","#223369","#335599","#446"];
        
        return(<div class='bigcontainer'><h2>Où vont les lycéens admis ? (2018) <Source maSource="bac" /></h2>
           <div id='bac' class='flexcontainer'>{Object.values(bacData).map((bac,bacIndex) => {
                return(<div class='container' id={'bac-'+bacIndex} style={{width:'270px',backgroundColor:colors[bacIndex]}}><li class='title' >{ BacName[bacIndex] /*Object.keys(bacData)[bacIndex]*/ }</li>{Object.values(bac['Admis']).map((diplome,diplomeIndex) =>
                        <li style={{textAlign:'left',marginLeft:'40px'}}>{Object.keys(bac['Admis'])[diplomeIndex] + " : " + diplome}</li>
                        )}
                        <ChartComponent id={"bac-"+bacIndex} data={bac} size="280" /> </div>
                );    
           })}</div></div>);
        /* En affichant le nombre de candidats et d'admis
     return(
        <div id='bac' class='flexcontainer'>{Object.values(bacData).map((bac,bacIndex) => {
             return(<div class={'bac-'+bacIndex}>{Object.keys(bacData)[bacIndex]}{Object.values(bac).map((data,dataIndex) =>{
                     return(<div class='container'>{Object.keys(bac)[dataIndex]}{Object.values(data).map((diplome,diplomeIndex) =>
                        <li style={{textAlign:'left'}}>{Object.keys(data)[diplomeIndex] + " : " + diplome}</li>
                        )}
                        <ChartComponent id={"bac-"+bacIndex} data={bac} /> </div>);
                })}</div>);
        })}</div>);
        */
}


function DiplomesC2() {        

        var colors = ["#51128f","#8a4500","#235965"];

        var mesDatas = Object.assign({},cycle2Data);
        // Attention ! On parle d'Object! Donc mesDatas = cycle2Data ne fait pas une copie mais un surnom!
        
        delete mesDatas["Ecole d'Ingénieurs en alternance"] // Sans le "Etudes d'Ingénieurs en alternance"

         return(<div class='bigcontainer'><h2>Répartition des étudiants en 2nd cycle selon leur formation du 1er cycle</h2>
         <div id='diplomesC2' class='flexcontainer'>{Object.values(mesDatas).map((table, myId) =>(
                <div class='container' id={"diplomesC2-"+myId} style={{backgroundColor:colors[myId]}}>
                <li class='title' >{Object.keys(mesDatas)[myId]}</li>
                <span style={{display:"inline-flex",marginLeft:"45px"}}><li>{table["Admis"]["Total"]} admis </li><Source maSource={Object.keys(mesDatas)[myId]}  text={table['Source']} url={table['Lien']} /></span>
                <PercentageAlternance diplome={Object.keys(mesDatas)[myId]} />
                <ChartComponent id={"diplomesC2-"+myId} data={table["Admis"]} size="225" /> 
                </div>
                ))}
        </div><h3>*Autres = Redoublement + Etrangés + Reprise d'étude</h3>
        </div>) 
}

ReactDOM.render(<React.Fragment>
        <Menu /><Header />
        <h2>Répartition des poursuites d'études</h2><br/>
        <Baccalaureat />
        <DiplomesC1 />
        <DiplomesC2 />
        <Footer />
        </React.Fragment>, 
        document.getElementById("body")
)


document.getElementById('alt').addEventListener("click", revert);

var allDiplomesC2Chart = document.getElementById('diplomesC2').getElementsByClassName("chart")
Object.values(allDiplomesC2Chart).forEach(chart => {
                //console.log(chart.children[0].id);
                updateChart(chart.children[0].id,cycle2Data[Object.keys(cycle2Data)[chart.children[0].id.slice(-1)]]['Admis']);
        });

var allDiplomesC1Chart = document.getElementById('diplomesC1').getElementsByClassName("chart")
Object.values(allDiplomesC1Chart).forEach(chart => {
                //console.log(chart.children[0].id);
                updateChart(chart.children[0].id,cycle1Data[chart.children[0].id.slice(-1)]);
        });

var allBacChart = document.getElementById('bac').getElementsByClassName("chart")
Object.values(allBacChart).forEach(chart => {
                //console.log(Object.keys(bacData));
                updateChart(chart.children[0].id,bacData[Object.keys(bacData)[chart.children[0].id.slice(-1)]]['Admis']);
        });

function updateChart(id,table){

        console.log(table)

        if(id.includes('diplomesC2')){
                var keys= Object.keys(table).slice(0,-1);
                console.log(keys);
                var showKeys = keys;
                if(id.includes('diplomesC2-3')){
                        document.getElementById(id).style.display="none";
                }

        }else if(id.includes('diplomesC1')){
                var keys = ["Dont Bac G__2", "Dont Bac Tech__2", "Dont Bac Pro__2", "Autres"];
                var showKeys = ["Bac Général", "Bac Technologique", "Bac Professionnel","Autres*"];

        }else if(id.includes('bac')){
                //var keys = Object.keys(table).slice(0,-1); // ["Autre formation","BTS","CPGE","DUT","Licence","PACES"];
                var keys = ["Licence","DUT","BTS","Classes Prépas","PACES","Autres formations"]; 
                var showKeys = keys;
        }

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
                                if (Math.round((value / sum) * 100) > 5) {
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

        // console.log(id);
        if(!document.getElementById(id)) return;
        var ctx = document.getElementById(id).getContext("2d");
        var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
                datasets: data
        },
        plugins: [ChartDataLabels],
        options: options
        });
        
        for (var j in keys) {
                //console.log(myChart.data.datasets[0].data)
                //console.log(table[keys[j]])
                myChart.data.datasets[0].data.push(table[keys[j]]);
                myChart.data.labels.push(showKeys[j]);
                myChart.data.datasets[0].backgroundColor.push(colorsByDiplome[showKeys[j]]);

        }
        
        myChart.update();
}


/* function analysis() { } function SourceTable(big_table) { fetch("https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-parcoursup-2018&q=&lang=FR&rows=10000&facet=session&facet=cod_uai&facet=g_ea_lib_vx&facet=dep_lib&facet=region_etab_aff&facet=acad_mies&facet=fili&facet=form_lib_voe_acc&facet=regr_forma&facet=fil_lib_voe_acc&facet=detail_forma&facet=tri
        ") .then(function(response) { return response.json(); }) .then(function(cycle1Data) { console.log(cycle1Data) Object.values(cycle1Data["facet_groups"][big_table]).forEach(table => { console.log(table) if (Array.isArray(table)) { Object.entries(table).forEach(([key,
        value]) => { console.log(value); $(".APIContent").prepend("
        <p>" + value["name"] + " : " + value["count"] + "</p>"); }) } }) //}) }); var nb_msg = 0 //alert(JSON.stringify(cycle1Data.data[4].Periode)); // tableau récupérant tous les nombres de messages //var total = []; //var msg = []; var final_array = [];
        /////////////////////////////////////// var delay = 20; //20 } 
*/

// Appel du render des composants React dans le DOM
