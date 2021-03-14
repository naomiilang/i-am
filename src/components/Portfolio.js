import React from 'react';

function Portfolio () {
    return (
        <section class = "center">
            <h1 class = "title">My Work</h1>
            <br/>

            <img src="./assets/mycipe.png" style = {{width:800}} alt="screenshot of the mycipe landing page"/>
            <br/>
            <h5><a href="https://mycipeteam.herokuapp.com/" class="underline">MyCipe</a></h5>
            <p class="description">MyCipe: A blog for chefs</p>

            <br/>

            <img 
            style= {{width: 800}} src="./assets/horiseon.png" alt = "screenshot of deployed horiseon application"/>
            <br/>
            <h5><a href="https://naomiilang.github.io/nlchallenge1/" class="underline">Horiseon</a></h5>
            <p class="description">A fully accessible social media marketing website.</p>

            <br/>

            <img
            src="./assets/budget.png" alt = "screenshot of budget tracking app" style = {{width: 800}} />
            <h5><a href="https://afternoon-coast-65587.herokuapp.com/"class="underline">The Budget App</a></h5>
            <p class = "description"> A responsive budget tracking app for easy expenditures and income. </p>

            <br/>

            <img src="./assets/run-buddy.png" alt="screenshot of deployed run buddy app" style={{ width: 800}}/>
            <h5><a href="https://naomiilang.github.io/run-buddy/" class="underline">Run buddy</a></h5>
            <p class="description">A responsive website with functional forms and modals.</p>
        </section>
    )
}

export default Portfolio;