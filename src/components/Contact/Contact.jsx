import "./Contact.css"
import { Card, Icon, Image, Grid, GridRow, GridColumn } from "semantic-ui-react"
export default function Contact(){
    return(
        <>
        <Grid id="contact">
            <Grid.Row centered>
                <h1>Let's Get In Touch!</h1>
            </Grid.Row>
            <Grid.Row centered>
            <h3>I would be happy to speak to you about a project!</h3>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column id='conTact' style={{ maxWidth: 240 }}>
                    <Grid.Row id='contactIcon' target='_blank' href="https://www.linkedin.com/in/maria-grassa/">
                        <Icon size='huge' name="linkedin alternate"/>
                        LinkedIn
                    </Grid.Row>
                    <br></br>
                    <Grid.Row id='contactIcon' target='_blank' href="https://github.com/mgrassa14">
                        <Icon size='huge' name="github square"/>
                        GitHub
                    </Grid.Row>
                    <br></br>
                    <Grid.Row id='contactIcon'>
                        <Icon size='huge' name="mail square"/>
                        mgrassa00@gmail.com
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}