import 'bulma/css/bulma.css'
import ProfileCards from './ProfileCards'
import AlexaImg from "./images/alexa.png"
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App (){

    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                  <p className="title">Personal digital assistants</p>
                </div>
            </section>

           <div className="container">
            <section className="section">
                <div className="columns is-centered">
                    <div className='column is-3'>
                    <ProfileCards 
                    title="Alexa" 
                    handle="@alexa99" 
                    imageSrc={AlexaImg}
                    description="Alexa was created by Amazon and helps you buy things"
                    />
                    </div>
                    <div className='column is-3'>
                    <ProfileCards 
                    title="Cortana" 
                    handle="@cortana32" 
                    imageSrc={CortanaImg}
                    description="Cortana was created by Microsoft, but who knows what it does?"
                    />
                    </div>
                    <div className='column is-3'>
                    <ProfileCards 
                    title="Siri" 
                    handle="@siri01" 
                    imageSrc={SiriImg}
                    description="Siri was created by Apple and is being phased out"
                    />
                    </div>
                </div>
            </section>
           </div>
        </div>
    )


 
    };

    export default App;