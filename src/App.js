import 'bulma/css/bulma.css'
import ProfileCards from './ProfileCards'
import AlexaImg from "./images/alexa.png"
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App (){

    return(
        <div>
           <div>Personal digital assistants</div>
           <ProfileCards title="Alexa" handle="@alexa99" imageSrc={AlexaImg}/>
           <ProfileCards title="Cortana" handle="@cortana32" imageSrc={CortanaImg}/>
           <ProfileCards title="Siri" handle="@siri01" imageSrc={SiriImg}/>
        </div>
    )


 
    };

    export default App;