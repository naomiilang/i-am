import React from 'react'; 

function About() {
    return (
        <section>
            <h1 class= "about" style={{textAlign: "center"}}> About Me </h1>
            <br></br>
            <p>
                My name is Naomi and I am a recent graduate of the UCLA fullstack development bootcamp! 
            </p>
            <img src= './assets/pfp.JPG' alt = "profile of naomi"></img>
        </section>
    );
}

export default About;