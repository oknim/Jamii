import './Accueil.css'

import {Header, Blog, Contact, Home, Objectifs, Pillar, Projets, Team} from './Composants/IndexAccueil'

export default function Accueil () {
    return <>

        <Header />
        <Home />
        <Pillar />
        <Objectifs />
        <Projets />
        <Team />
        <Blog />
        <Contact />
    </>
}