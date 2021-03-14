import React from 'react'; 

function About() {
    return (
        <section>
            <h1 class= "about" style={{textAlign: "center"}}> Hi, I'm Naomi</h1>
            <br/>
            <p class="center">
                I'm a junior fullstack javascript developer.
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