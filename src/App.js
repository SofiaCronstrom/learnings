import 'bulma/css/bulma.css'
import ProfileCards from './ProfileCards'
import AlexaImg from "./images/alexa.png"
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App (){

    return(
        <div>
           <div>Personal digital assistants</div>

           <div className="container">
            <section className="section">
                <div className="columns is-centered">
                    <div className='column is-3'>
                    <ProfileCards title="Alexa" handle="@alexa99" imageSrc={AlexaImg}/>
                    </div>
                    <div className='column is-3'>
                    <ProfileCards title="Cortana" handle="@cortana32" imageSrc={CortanaImg}/>
                    </div>
                    <div className='column is-3'>
                    <ProfileCards title="Siri" handle="@siri01" imageSrc={SiriImg}/>
                    </div>
                </div>
            </section>
           </div>
        </div>
    )


 
    };

    export default App;