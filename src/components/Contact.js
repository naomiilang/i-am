import React from 'react';

function Contact(){
    return(
        <section class="center">
            <h1 class = "underline">Contact Me</h1>
            <br/>
            <img src="./assets/me.jpg" alt="naomi lang" style={{width:500}}/>
            <br></br>
        <ul class="contact">
            <li>
                <a href="mailto:naomilang1212@gmail.com">Email</a>
            </li>
            <br/>
            <li>
                <a href="https://github.com/naomiilang">Github</a>
            </li>
            <br/>
            <li>
                <a href="https://www.linkedin.com/in/naomi-lang-03b0751b8/">Linkedin</a>
            </li>
        </ul>
        </section>
    )
}

export default Contact;