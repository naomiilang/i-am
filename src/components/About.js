import React from 'react'; 

function About() {
    return (
        <section>
            <h1 class= "about" style={{textAlign: "center"}}> About Me </h1>
            <br/>
            <p class="center">
                My name is Naomi and I am a recent graduate of the UCLA fullstack development bootcamp! 
            </p>
            <br/>
            <img class = "center"
            style = {{ 
                height: 500
            }}
            src= './assets/pfp.JPG' alt = "profile of naomi"
            />
        </section>
    );
}

export default About;