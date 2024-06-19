import './Blog.css'

//Test de carousel avec un package
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';


function Blog () {

    const ElementCoul = [
        {
            Image : "Rectangle 4.svg",
            Titre : "Solidarité en action",
            Texte : "Plongez dans les récits captivants de bénévoles passionnés qui consacrent leur temps et leurs compétences p..."
        },
        {
            Image : "Rectangle 4.svg",
            Titre : "Solidarité en action",
            Texte : "Plongez dans les récits captivants de bénévoles passionnés qui consacrent leur temps et leurs compétences p..."
        },
        {
            Image : "Rectangle 3.svg",
            Titre : "Impact positif",
            Texte : "Comment une petite action peut changer des vies."
        },
        {
            Image : "Rectangle 7.svg",
            Titre : "Unis pour le bien",
            Texte : "Changer le monde, un pas à la fois, Guide pratique pour s'engager dans l'action caritative..."
        },
        {
            Image : "Rectangle 7.svg",
            Titre : "Unis pour le bien",
            Texte : "Changer le monde, un pas à la fois, Guide pratique pour s'engager dans l'action caritative..."
        },
    ]

    return <section className='blog'>
        <h2>NOTRE <span>BLOG</span></h2>
        <section className='decouverte'>
            <Swiper
                effect = {'slide'}
                grabCursor = {true}
                centeredSlides = {true}
                loop = {false}
                slidesPerView = {4}
                style={{overflow : 'hidden'}}

                className='swiper_container'
            >
                {ElementCoul.map((object, nb)=>(
                    <SwiperSlide key={nb}>
                        <div id='decouv2'>
                        <div>
                            <img src={`/${object.Image}`} alt='' />
                        </div>
                        <h4>{object.Titre}</h4>
                        <p>{object.Texte}</p>
                        <button hidden='' className='Read'>Lire</button>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        <div>
            <button className='Discover'>Découvrir plus</button>
        </div>
        <section className='plus'>
            <div className='Fline'>
                <div id='numbers'>
                    <img src='number-one.svg' alt=''/>
                    <div id='nbrTexte'>
                        <h5>AGIT</h5>
                        <p>Il est plus facile d'agir à plusieurs que seul. C'est pourquoi nous voulons créer une communauté via laquelle tout à chacun pourra s'appuyer dès qu'il s'agira de passer de la pensée à l'action.</p>    
                    </div>
                </div>
                
                <div id='numbers'>
                    <img src='number-2.svg' alt=''/>
                    <div id='nbrTexte'>
                        <h5>S'ENTRAIDER</h5>
                        <p>Un groupe humain riche en solidarité et entraide vise à créer une communauté solidaire qui s'entraide sans hésiter et n'a pas peur de demander de l'aide.</p>
                    </div>
                </div>
            </div>
            <div className='Sline'>
                <div id='numbers'>
                    <img src='number-3.svg' alt=''/>
                    <div id='nbrTexte'>
                        <h5>CONNAIT TON HISTOIRE</h5>
                        <p>Se souvenir de son passé permet d'éviter de le répéter. Mettre en avant l'Histoire à travers diverses activités est essentiel pour mieux appréhender l'avenir.</p>
                    </div>
                </div>
                <div id='numbers'>
                    <img src='number-4.svg' alt=''/>
                    <div id='nbrTexte'>
                        <h5>VALORISE SES CULTURES</h5>
                        <p>L'homme sans culture est comme un arbre sans fruit. Valoriser sa culture est essentiel. Les cultures seront au cœur des activités de JAMII.</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
}

export default Blog;