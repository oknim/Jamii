import './Pillar.css'

function Pillar () {
    return <>
    <section className="pillar">
        <h1>LES PILIERS FONDAMENTAUX DE<br/> <span className='PSpan'>JAMII ASBL</span></h1>
        <p>sont représentés par trois programmes qui s'articulent autour de</p>
        <div className="rub">
            <div id="rub">
                <img src="/EducationIMG.svg" alt=""/>
                <h3>L'EDUCATION</h3>
                <p>Aider les personnes défavorisées à s'intégrer dans la société aux moyens d’un suivis éducatif.</p>
            </div>
            <div id="rub">
                <img src="/DevdurableIMG.svg" alt=""/>
                <h3>LE DEVELOPPEMENT DURABLE</h3>
                <p>promouvoir des pratiques respectueuses de l'environnement pour un avenir durable.</p>
            </div>
            <div id="rub">
                <img src="/BienêtreIMG.svg" alt=""/>
                <h3>LE BIEN-ETRE</h3>
                <p>promotion de la santé, tant physique que mentale.</p>
            </div>
        </div>
        <h4>L'association s'efforce de répondre aux besoins essentiels de la société d'aujourd'hui et de demain, en insufflant des valeurs d'inclusion et de cohésion sociale.</h4>
    </section>
    </>
}

export default Pillar;