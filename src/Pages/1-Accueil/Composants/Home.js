import './Home.css'

function Home () {
    return <>
    <section className="main" id='main'>
            <div className="navBar">
                <a id='NavLogo' href='#main' title='Home'>
                    <img src="Home_Ico.svg" alt=""/>
                </a>
                <a id='NavLogo' href='#objectif' title='Nos objectifs'>
                    <img src="Aboutus_Ico.svg" alt=""/>
                </a>
                <a id='NavLogo' href='#projets' title='Nos projets en cours'>
                    <img src="Bag_Ico.svg" alt=""/>
                </a>
                <a id='NavLogo' href='#team' title='Notre équipe'>
                    <img src="Team.svg" alt=""/>
                </a>
                <a id='NavLogo' href='#Contact' title='À propos de nous'>
                    <img src="Blog_Ico.svg" alt=""/>
                </a>
            </div>
            <div className="mainT">
                <h1>JAMII ASBL</h1>
                <span>Un mot en swahili qui signifie "Communauté". </span>
                <p>est une association belge dynamique et <br/>engagée qui incarne la vision d'une société <br/>éducative, culturelle et socialement<br/> inclusive.</p>
                <div className='mainB'>
                    <button className='Join'>
                        <img src='Join_Ico.svg' alt=''/>
                        Rejoignez nous
                    </button>
                    <button className='Call'>
                        <img src='Phone_Ico.svg' alt=''/>
                        Contactez nous
                    </button>
                </div>
            </div>
        </section>
    </>
}

export default Home;