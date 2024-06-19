import './Objectifs.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef,useState } from 'react';

function Objectifs() {

    const objectDataMap = [
        {
            name:'Promotion de l\'éducation',
            description:"-Faciliter l'accès à une éducation de qualité pour tous, en mettant l'accent sur les populations défavorisées ou mal des servies.-Mise en place de programmes de bourses d'études, organisation de cours de soutien, création de bibliothèques communautaires, et développement de partenariats avec des établissements éducatifs.",
            image:'School_Icon.svg'
        },
        {
            name:'Développement durable',
            description:"Sensibiliser à l'importance du développement durable et encourager des pratiques respectueuses de l'environnement au sein de la communauté. Initiatives de recyclage, campagnes de sensibilisation sur la conservation des ressources, encouragement de pratiques agricoles durables, organisation d'ateliers sur l'efficacité énergétique.",
            image:'DevDurable_Ico.svg'
        },
        {
            name:'Promotion de la santé physique',
            description:"Améliorer la santé physique des membres de la communauté en encourageant un mode de vie actif et en fournissant des ressources pour la prévention des maladies. Organisation d'événements sportifs locaux, mise en place deprogrammes d'exercices communautaires, ateliers sur la nutritionet la prévention des maladies",
            image:'Health_Icon.svg'
        },
        {
            name:'Promotion de la santé mentale',
            description:"Sensibiliser à l'importance de la santé mentale et fournir des ressources pour soutenir le bien-être émotionnel. Ateliers de gestion du stress, sessions de sensibilisation sur la santé mentale, services de counseling, création d'espaces sûrs pour discuter des problèmes liés à la santé mentale.",
            image:'Health_Icon.svg'
        },
        {
            name:'Programmes, événements sportifs et projets caritatifs',
            description:"Utiliser des initiatives dynamiques et participatives pour atteindre les objectifs éducatifs, de développement durable, de santé physique et mentale. Organisation de tournois sportifs pour lever des fonds, mise en placede projets caritatifs liés à l'éducation et à la santé, participation à desévénements communautaires pour sensibiliser aux enjeux.",
            image:'School_Icon.svg'
        },
    ]
    const prevButtonRef = useRef(null)
    const nextButtonRef = useRef(null)
    const [, setInit] = useState();
    
    return <>

        <section className="objectifs" id='objectif'>
            <h3>NOS OBJECTIFS</h3>
            <div className="menuB">
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    modules={[Navigation]}
                    onInit={() =>setInit(true)}
                    navigation={{
                        nextEl: nextButtonRef.current,
                        prevEl: prevButtonRef.current,
                    }}
                    className='swiper_container'
                >
                    {objectDataMap.map((object,index) =>(
                        <SwiperSlide key={index}>
                        <div id="menuB">
                            <div id='OImg'>
                                <img src={`/${object.image}`} alt='' />
                            </div>
                            <h5>{object.name}</h5>
                            <p style={{overflow:'hidden',textOverflow:'ellipsis'}}>{object.description}</p>
                        </div>
                    </SwiperSlide>
                    )) }
                    <div className='slider-controler'>
                        <div className='swiper-button-next' ref={nextButtonRef}>
                            <img src='/Arrow.svg' alt='' />
                        </div>
                        <div className='swiper-button-prev' ref={prevButtonRef}>
                            <img src='/Arrow.svg' alt='' />
                        </div>
                    </div>

                </Swiper>
            </div>
        </section>
    </>
}

export default Objectifs;