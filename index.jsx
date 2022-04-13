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

var infos = [];

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
//fetch("fr-esr-parcoursup-2018.json ")

//$.getJSON('parcoursup-2018-diplomes.json', function(data) {
    //console.log('data',data); });


// Super important : tout les éléments doivent être inclus dans UN SEUL COMPOSANT
// Autrement dit, on ne peut pas faire return(<div1></div1> <div2></div2>)
// Il faut tout intégrer dans "un seul et même bloc" return (<div3>...</div3>)

function Header() {
         return (<div class=" fixe ">
        <h1>Orientation ...</h1>
        <h3>L'outil d'orientation fait par les jeunes, pour les jeunes</h3>
        <h3>*Autres = Réorientation (issu d'une autre université) + Etrangés + Reprise d'étude</h3>
    </div>) } 

function Menu(){ return( <div><br/>
    <nav>
        <ul>
            <li class="deroulant ">
                <a href="# "><img src=" " class="icon " /></a>
                <ul class="sous ">
                    <li><a href="temoignages.html ">Vue d'ensemble</a></li>
                    <li><a href="# ">Les formations liés à vos passions</a></li>
                    <li><a href="# ">. . .</a></li>
                    <li><a href="# ">. . .</a></li>
                </ul>
            </li>
        </ul>
    </nav><br/><br/><br/><br/></div>)}
    

function Formations(){
        infos = listeFormations(getJSON('data/parcoursup-2018-diplomes.json'));
        console.log(infos);
         return(
        <div class='flexcontainer'>
        {infos.map((diplome) =>(
                <div class='diplome' > {diplome}</div>
        ))}
        </div>
)}

/*
function display(infos) {
        output = "<div class='flexcontainer'>";
        for (i in infos) {
        output += "<div class='diplome' >" + infos[i] + "</div>";
        }
        output += "</div>";
        $("#monreact").append(output);
}
*/
        

function listeFormations(table) {

        var maliste = [];
        for (var i in table) {
        maliste.push(table[i]['Filière de formation très agrégée']);
        }
        return maliste;
}

function Diplomes() {        
        // Ajout d'éléments calculés
        jsonResponse.map((table) =>{
                table["Effectif total des admis"] = table["En Phase Principale__1"] + table["En Phase Complémentaire__1"];
                table["Autres"] = table["Effectif total des admis"] - table["Dont Bac G__2"] -table["Dont Bac Tech__2"] - table["Dont Bac Pro__2"];      
        })

         return(
         <div>{jsonResponse.map((table, myId) =>(
                <div class='container' id={myId}>
                <li>{table["Effectif total des admis"]} admis</li>
                <li>Dont {Math.round(1000 * table["Dont Bac G__2"] / table["Effectif total des admis"]) / 10} % venant d'un Bac Général</li>
                <li>Dont {Math.round(1000 * table["Dont Bac Tech__2"] / table["Effectif total des admis"]) / 10 } % venant d'un Bac Technologique</li>
                <li>Dont {Math.round(1000 * table["Dont Bac Pro__2"] / table["Effectif total des admis"]) / 10} % venant d'un Bac Professionnel </li>
                <li>Dont {Math.round(1000 * table["Autres"] / table["Effectif total des admis"]) / 10} % autres (réorientation, étrangés, reprise d'études)</li>
                <ChartComponent id={myId} data={table} /> 
                </div>
                ))}
        </div>) // Ne pas oublier de mettre le Diagramme lié à chacune des parties 
}

// function ChartList(){
//         return(
//         <div>{jsonResponse.map((table,id) =>(
//         <ChartComponent id={id} data={table} />
//         ))}</div>
//         )
// }
// props permet de récupérer tous les paramètres (attributs) défini dans le composent
// Exemple ici : props.id et props.data, les arguments/attributs de mes composents #HTML
function ChartComponent(props){
        //console.log("props:");
        //console.log(props);
        var monId = "pie-chart-" + props.id;
        return(<div class="chart"> 
        <canvas id={monId} width="800" height="450">
        </canvas>
        </div>)
}

ReactDOM.render(<React.Fragment>
        <Header /><Menu /><Formations /><Diplomes />
        </React.Fragment>, 
        document.getElementById("body")
)

var allChart = document.getElementsByClassName("chart")

console.log(allChart);
console.log(jsonResponse);
Object.values(allChart).forEach(Chart => {
                console.log(Chart.children[0].id);
                console.log(Chart.children[0].id.slice(-1));
                updateChart(Chart.children[0].id,jsonResponse[Chart.children[0].id.slice(-1)]);
        });


function updateChart(id, table) {

        console.log("id:"+id)
        var keys = ["Dont Bac G__2", "Dont Bac Tech__2", "Dont Bac Pro__2", "Autres"];
        var showKeys = ["Bac Général", "Bac Technologique", "Bac Professionnel", "Autres"];

        var data = [{
        data: [],
        labels: [],
        backgroundColor: [
                "#4b77a9",
                "#5f255f",
                "#d21243",
                "#B27200"
        ],
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
                color: "white"
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


        console.log(myChart);
        for (var j in keys) {
        //console.log(myChart.data.datasets[0].data)
        console.log(j)
        console.log(table)
        console.log(table[keys[j]])
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
