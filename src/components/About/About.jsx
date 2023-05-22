import "./About.css"
import { Grid, GridColumn, GridRow } from "semantic-ui-react"
export default function About(){
    return(
        <>
        <Grid id="about">
            <Grid.Row centered>
                <h1>About Me</h1>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column id='line1'style={{ maxWidth: 800 }}>
                    <h3>Hello! My name is Maria Grassa and I live in San Diego, California.</h3>
                    <h3>I am currently growing and sharpening my skills through self study and college.</h3>
                    <h3>I completed General Assembly's Software Engineering Immersive program where I learned full stack development skills as of May 15th,  2023.</h3>
                    <h3>Some of my hobbies include reading, video games, electronics, and more. </h3>
                    <h3>Links to my Github, LinkedIn, and Resume are down below.</h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}
// I'm currently a Developer Support Specialist at Calendly where I help customers and external developers use our public API, support our most technical integrations, and help to define and report product issues.

// In my spare time I like watching mystery and sci-fi TV shows and reading books about them. I also spend time messing around in Photoshop and playing puzzle games.