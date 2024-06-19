import './Projects.css'

function Projects () {
    return <>
    <section className='projects' id='projets'>
        <h3>NOS PROJETS EN COURS</h3>
        <div className='wrap1'>
            <div id='textR'>
                <h4>My Scholarship</h4>
                <p id="WPProject">Ce programme offre des bourses d'études et des opportunités d'apprentissage à des individus talentueux, mais parfois désavantagés, afin de briser les barrières financières qui entravent leur développement personnel et professionnel. C'est une initiative qui renforce la promesse de l'égalité des chances pour tous.</p>
            </div>
        </div>
        <div className='wrap2'>
            <div id='textL'>
                <h4>AFYA</h4>
                <p id="WPProject">L'association encourage le bien-être global en offrant des ressources éducatives, des ateliers et des activités visant à renforcer la santé mentale et physique des individus, tout en combattant la stigmatisation qui entoure ces questions cruciales.</p>
            </div>
        </div>
        <div className='wrap3'>
            <div id='textR'>
                <h4>GESTION DES DECHETS</h4>
                <p id="WPProject">JAMII ASBL s'engage activement dans des actions visant à sensibiliser à la préservation de l'environnement et à la promotion de pratiques durables. Le respect de notre planète est au cœur de cette initiative, et l'association œuvre pour un monde plus propre et plus respectueux de la nature.</p>
            </div>
        </div>
        <div className='wrap4'>
            <div id='textL'>
                <h4>JUST BALL</h4>
                <p id="WPProject">Le tournoi de basketball "Just Ball" n'est pas simplement une compétition sportive, c'est un véritable catalyseur de l'unité et de la diversité. Les valeurs de fair-play, de tolérance et de respect sont mises en avant, favorisant ainsi un environnement où chaque individu, quelque soit son origine, son sexe ou son âge, peut s'épanouir et contribuer à une atmosphère de camaraderie.</p>
            </div>
        </div>
        <div className="Pbutton">
            <button  className='JoinAlt'>
                <img src='Join_Ico.svg' alt=''/>
                Rejoignez nous
            </button>
        </div>
    </section>
    </>
}

export default Projects;