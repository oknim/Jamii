import './Contact.css'

function Contact () {
    return <>
    <section className='Contact' id='Contact'>
        <div className='Contain'>
            <div className='Imenu'>
                <a href='/'>Accueil</a>
                <a href='/'>Agenda</a>
                <a href='/'>Rejoignez nous</a>
                <a href='/'>Contactez nous</a>
            </div>
            <div className='Icontact'>
                <img src='mail_ico.svg' alt=''/>
                <p>info@jamii.com</p>

                <img src='Vector.svg' alt=''/>
                <p>+32 471 52 32 20</p>
                
                <img src='Location_Ico.svg' alt=''/>
                <p>Bruxelles, Belgique</p>
            </div>
            <div className='Iliens'>
                <img src='Twitter.svg' alt='' id='Iliens'/>
                <img src='Facebook.svg' alt='' id='Iliens'/>
                <img src='Linkedin.svg' alt='' id='Iliens'/>
            </div>
            <div className='Flogo'>
                <img src='LOGO_White.svg' alt=''/>
            </div>
        </div>
        <div className='last'>
            <span>Design by BxB design © 2024. All right reserved</span> 
        </div>
    </section>
    </>
}

export default Contact;