function ProfileCards({title, handle, imageSrc}){
return(
    <div>
        <img src={imageSrc} alt="pda logo"/>
       <div>{title}</div>
       <div>{handle}</div>
    </div>

)
};

export default ProfileCards;