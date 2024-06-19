import './Team.css'

function Team () {
    return <>
    <section className='team' id='team'>
        <h3>ORGANISATION INTERNE</h3>
        <div id='pontes'>
            <img src='/PresidentPIC.svg' alt=''/>
            <div id='descrip'>
                <h4>Jane Fonda</h4>
                <h5>Présidente</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </div>
        <div>
            <img src='/Vector 1.svg' alt=''/>
        </div>
        <div id='pontes'>
            <img src='/VPresidentPIC.svg' alt=''/>
            <div id='descrip'>
                <h4>Oufad Ndezi</h4>
                <h5>Vice-présidente</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </div>
        <div className='divider'>
            <img src='/three.svg' alt=''/>
        </div>
        <div className="larbins">
            <div id='larb2'>
                <img src='/memberPIC1.svg' alt=''/>
                <div id="desc2">
                    <h6>Bony Roland</h6>
                    <p>sécrétaire administratif</p>
                </div>
            </div>
            <div id='larb2'>
                <img src='/memberPIC2.svg' alt=''/>
                <div id="desc2">
                    <h6>Williams Wallace</h6>
                    <p>Trésorerie</p>
                </div>
            </div>
            <div id='larb2'>
                <img src='/memberPIC3.svg' alt=''/>
                <div id="desc2">
                    <h6>Eric Widler</h6>
                    <p>Communication</p>
                </div>
            </div>
            <div id='larb2'>
                <img src='/memberPIC4.svg' alt=''/>
                <div id="desc2">
                    <h6>Latifa Amandala</h6>
                    <p>Service Juridique</p>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default Team;