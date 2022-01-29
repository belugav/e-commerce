import "./ContactPage.css"
export default function ContactPage() {
    return(
        <>
       <h1>Contactenos</h1>
        <h2>Para mas información:</h2>

        <div className="redes">
            <img className="redesSociales" src="assets/instagram.png"></img>
            <p>/traveller</p>
            </div>

        <div className="redes">
        <img className="redesSociales" src="assets/gmail.png"></img>
        <p>traveller22@gmail.com</p>
        </div>

        <div className="redes">
            <img className="redesSociales" src="assets/whatsapp.png"></img>
            <p>15111111111</p>
            </div>
    </>
    )


}