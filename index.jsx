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
var jsonResponse;
jsonResponse = getJSON('data/parcoursup-2018-diplomes.json');
var bacData;
bacData = getJSON('data/parcoursup-2018-baccalaureat.json');

var BacName = ["Bac Général", "Bac Technologique", "Bac Professionnel"];

/*
// Initialisation des données de chaque baccalauréat
var bacData = [];
bacData["Bac G"] = {};
bacData["Bac Tech"] = {};
bacData["Bac Pro"] = {};

jsonResponse.map((table) =>{
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

function DiplomesAncien() {        
        // Ajout d'éléments calculés
        jsonResponse.map((table) =>{
                table["Effectif total des admis"] = table["En Phase Principale__1"] + table["En Phase Complémentaire__1"];
                table["Autres"] = table["Effectif total des admis"] - table["Dont Bac G__2"] -table["Dont Bac Tech__2"] - table["Dont Bac Pro__2"];      
        })

         return(
         <div id='diplomes'>{jsonResponse.map((table, myId) =>(
                <div class='container' id={"diplomes-"+myId}>
                <li class='title' >{table["Filière de formation très agrégée"]}</li>
                <li>{table["Effectif total des admis"]} admis</li>
                <li>Dont {Math.round(1000 * table["Dont Bac G__2"] / table["Effectif total des admis"]) / 10} % venant d'un Bac Général</li>
                <li>Dont {Math.round(1000 * table["Dont Bac Tech__2"] / table["Effectif total des admis"]) / 10 } % venant d'un Bac Technologique</li>
                <li>Dont {Math.round(1000 * table["Dont Bac Pro__2"] / table["Effectif total des admis"]) / 10} % venant d'un Bac Professionnel </li>
                <li>Dont {Math.round(1000 * table["Autres"] / table["Effectif total des admis"]) / 10} % autres (réorientation, étrangés, reprise d'études)</li>
                <ChartComponent id={"diplomes-"+myId} data={table} /> 
                </div>
                ))}
        </div>) // Ne pas oublier de mettre le Diagramme lié à chacune des parties 
}



function Diplomes() {        

        var colors = ["#525260","#722030",
                "#695000","#552055","#4a406f","#026029"]

        // Ajout d'éléments calculés
        jsonResponse.map((table) =>{
                table["Effectif total des admis"] = table["En Phase Principale__1"] + table["En Phase Complémentaire__1"];
                table["Autres"] = table["Effectif total des admis"] - table["Dont Bac G__2"] -table["Dont Bac Tech__2"] - table["Dont Bac Pro__2"];      
        })
        
        var mesDatas = jsonResponse.slice(0,-1); // Sans le "Total"
         return(
         <div id='diplomes' class='flexcontainer'>{mesDatas.map((table, myId) =>(
                <div class='container' id={"diplomes-"+myId} style={{backgroundColor:colors[myId]}}>
                <li class='title' >{table["Filière de formation très agrégée"]}</li>
                <li>{table["Effectif total des admis"]} admis</li>
                <li>Dont x% en apprentissage</li>
                <ChartComponent id={"diplomes-"+myId} data={table} size="225" /> 
                </div>
                ))}
        </div>) // Ne pas oublier de mettre le Diagramme lié à chacune des parties 
}

function Baccalaureat(){
        var colors = ["#112249","#223369","#335599","#446"];

        return(
           <div id='bac' class='flexcontainer'>{Object.values(bacData).map((bac,bacIndex) => {
                return(<div class='container' id={'bac-'+bacIndex} style={{width:'270px',backgroundColor:colors[bacIndex]}}><li class='title' >{ BacName[bacIndex] /*Object.keys(bacData)[bacIndex]*/ }</li>{Object.values(bac['Admis']).map((diplome,diplomeIndex) =>
                        <li style={{textAlign:'left',marginLeft:'40px'}}>{Object.keys(bac['Admis'])[diplomeIndex] + " : " + diplome}</li>
                        )}
                        <ChartComponent id={"bac-"+bacIndex} data={bac} size="280" /> </div>
                );
           })}</div>);
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

//        <DiplomesSup />

ReactDOM.render(<React.Fragment>
        <Menu /><Header />
        <h2>Répartition des poursuites d'études</h2>
        <h2>Répartition des lycéens admis par formation</h2>
        <Diplomes />
        <h2>Où vont les lycéens admis ?</h2>
        <Baccalaureat />
        <Footer />
        </React.Fragment>, 
        document.getElementById("body")
)

var allDiplomesChart = document.getElementById('diplomes').getElementsByClassName("chart")
Object.values(allDiplomesChart).forEach(Chart => {
                //console.log(Chart.children[0].id);
                updateChart(Chart.children[0].id,jsonResponse[Chart.children[0].id.slice(-1)]);
        });

var allBacChart = document.getElementById('bac').getElementsByClassName("chart")
Object.values(allBacChart).forEach(Chart => {
                //console.log(Object.keys(bacData));
                updateChart(Chart.children[0].id,bacData[Object.keys(bacData)[Chart.children[0].id.slice(-1)]]['Admis']);
        });

function updateChart(id,table){
        if(id.includes('diplome')){
                var keys = ["Dont Bac G__2", "Dont Bac Tech__2", "Dont Bac Pro__2", "Autres"];
                var showKeys = ["Bac Général", "Bac Technologique", "Bac Professionnel","Autres"];
                var colorsChart = ["#127","#22339f","#3355a9","#447"];

        }else if(id.includes('bac')){
                //var keys = Object.keys(table).slice(0,-1); // ["Autre formation","BTS","CPGE","DUT","Licence","PACES"];
                var keys = ["Licence","DUT","BTS","CPGE","PACES","Autres formations"]; 
                var showKeys = keys;
                var colorsChart = ["#4b4799","#5f255f","#d21243",
                        "#B27200","#028250","#927280"];
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
                //console.log(myChart.data.datasets[0].data)
                //console.log(table[keys[j]])
                myChart.data.datasets[0].data.push(table[keys[j]]);
                myChart.data.labels.push(showKeys[j]);
                }
        
                myChart.update();
}


/* function analysis() { } function SourceTable(big_table) { fetch("https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-parcoursup-2018&q=&lang=FR&rows=10000&facet=session&facet=cod_uai&facet=g_ea_lib_vx&facet=dep_lib&facet=region_etab_aff&facet=acad_mies&facet=fili&facet=form_lib_voe_acc&facet=regr_forma&facet=fil_lib_voe_acc&facet=detail_forma&facet=tri
        ") .then(function(response) { return response.json(); }) .then(function(jsonResponse) { console.log(jsonResponse) Object.values(jsonResponse["facet_groups"][big_table]).forEach(table => { console.log(table) if (Array.isArray(table)) { Object.entries(table).forEach(([key,
        value]) => { console.log(value); $(".APIContent").prepend("
        <p>" + value["name"] + " : " + value["count"] + "</p>"); }) } }) //}) }); var nb_msg = 0 //alert(JSON.stringify(jsonResponse.data[4].Periode)); // tableau récupérant tous les nombres de messages //var total = []; //var msg = []; var final_array = [];
        /////////////////////////////////////// var delay = 20; //20 } 
*/

// Appel du render des composants React dans le DOM
