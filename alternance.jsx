
ReactDOM.render(<React.Fragment>
    <Menu /><Alternance />
    <Footer />
    </React.Fragment>, 
    document.getElementById("body")
)

function Alternance(){
    return(<div class='title' ><h1>L'Alternance, qu'est-ce que c'est ?</h1>
    <h2>C'est suivre une formation (BTS, DUT, Licence, ...) tout en travaillant en entreprise</h2>
    <div class='section'><img src={""} /><h3>Une formation avec un rythme d'alternance</h3>
    <li>Alternez des périodes à l'école et des périodes en entreprise</li>
    <li style={{marginLeft:"6%"}}>Rythme variable (en semaines ou mois) : 1-1, 1-2, 2-2, ...</li>
    <li>A l'école, cela se passe comme dans les formations en continu</li>
    <li>En entreprise, vous avez le même statut que les autres salariés</li>
    <li>Schéma</li></div>

    <div class='section'><img src={""} /><h3>Une formation avec autant voire plus de résultats à la clé</h3>
    <li>Moins de théorie, plus de pratique pour concrétiser vos connaissances</li>
    <li>Confrontation à des projets réels, avec de vrais enjeux et difficultés</li>
    <li>Gain d'expériences professionnelles, élément primordial à la recherche d'emploi</li>
    <li>Obtention de compétences techniques et humaines reflétant la vie en entreprise</li>
    <li>Schéma</li></div>

    <div class='section'><img src={""} /><h3>Une formation avec une rémunération</h3>
    <li>L'alternance confère une rémunération mensuelle sur toute la durée de la formation</li>
    <li>Cette rémunération est <strong>proportionnelle</strong> à 3 éléments : 
    <ul class='sous-level'>
    <li>Le montant du <a href={""}>SMIC</a> (1302€ en Mai 2022) ou du <a href={""}>SMC</a></li>
    <li>A l'âge de l'apprenti, la rémunération évolue au passage à la tranche d'année suivante</li>
    <li>Au nombre d'années d'apprentissage (de la 1e à la 3e année)</li>
    </ul>
    </li>
    <li>Schéma</li>
    </div>
    
    <div class='section'><img src={""} /><h3>Une formation plus humaine</h3>
    <li>Témoignez de vos compétences et comprenez qu'elles sont lucratives</li>
    <li style={{marginLeft:"6%"}}>Vous saurez que vos compétences ont une valeur financière</li>
    <li>Sentez-vous utile en apportant de la valeur aux autres, à l'entreprise</li>
    <li>Étendez votre réseau professionnel, obtenez de nouvelles opportunités</li>
    <li>Travaillez en équipe avec des personnes d'horizons variés</li>
    <li>Schéma</li></div>
    
    </div>)
}