import React from 'react';
import ja2 from '../Assets/ja2.jpg';
import potpis from '../Assets/potpis.png'
import './About.css'

function About() {
    return (
        <div className="about-container">
            <br></br>
            <h1>O nama</h1>
            <br /><br /><br />
            <img id="onama2" src={ja2} alt="Ja" />
            <div className="desno">
                <h1>Dobrodošli!</h1>
                <p>
                    Art by Nejra je online galerija umjetničkih slika, osnovana 2022. godine s ciljem online prikaza same galerije kao i djela.
                    <br /><br /><br />
                    Na ideju pokretanja ove stranice je došlo u vrijeme pandemije COVID19, kada smo svi bili u svojim domovima i kada je Internet postao jedini vid komunikacije sa svima, te smatramo da bi jedna takva online galerija slika pomogla od bjega stvarnosti svakodnevnice, i tako je nastala 
                    Art by Nejra galerija!
                    Cilj ove galerije jeste pružiti korisnicima uvid u svaku sliku, njen opis odnosno tehnike koje su se koristile za izradu kao i datum kada je slika nastala.
                    <br />
                    Također, pored ovog cilja glavni ciljevi ove stranice jesu podstaknuti sve kreativce, zaljubljenike u umjetnost da se pridruže umjetničkoj sferi, jer za svakoga ima mjesta! :)
                </p>
                <br /><br /><br />
                <h1>Bilo da ste zaljubljenik, strastveni sakupljač kreativnosti ili vrhunski poznavatelj umjetnosti, obratite nam se sa punim povjerenjem, tu smo za sva Vaša pitanja!</h1>
                <br />
                <img id="sing" src={potpis} alt="Potpis" />
            </div>
        </div>
    );
}

export default About;
