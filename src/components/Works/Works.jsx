import "./Works.css"
import { Card, Icon, Image, Grid, GridRow, GridColumn } from "semantic-ui-react"
export default function Works(){
    return(
        <>
        <Grid id="works" >
            <Grid.Row centered>
                <h1>Projects Worked On</h1>
            </Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 1100 }}>
                <Card.Group itemsPerRow={2} id='workCards'>
                    <Card color='purple'>
                        <Image src='https://camo.githubusercontent.com/3929ca2f4ffa4656d01c9bc35ba659a3f0e08d872fac7ad6b217adcaf9b347ba/68747470733a2f2f692e696d6775722e636f6d2f784236773951592e706e67'  ui={false}/>
                        <Card.Content >
                            <Card.Header>TechGram</Card.Header>
                            <Card.Meta>
                                <span className='date'>May 2023</span>
                            </Card.Meta>
                            <Card.Description target='_blank' href='https://github.com/mgrassa14/project4'>
                                <Icon size='big' link name="github alternate" />
                            </Card.Description>
                            <Card.Description target='_blank' href='https://techgram.onrender.com'>
                                <Icon size='big' link name="linkify" />
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='purple'>
                        <Image id='photo' src='https://i.imgur.com/MHCyctp.png' wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>Med Tracker</Card.Header>
                            <Card.Meta>
                                <span className='date'>April 2023</span>
                            </Card.Meta>
                            <Card.Description target='_blank' href='https://github.com/mgrassa14/meds'>
                                <Icon size='big' name="github alternate" />
                            </Card.Description>
                            <Card.Description target='_blank' href='https://falling-sea-1616.fly.dev'>
                                <Icon size='big' link name="linkify" />
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='purple'>
                        <Image src='https://camo.githubusercontent.com/0fa740f9f74c060cbe5f1956c1d08200e39f3e9b4c84fa8a14aede6e5a5a2723/68747470733a2f2f692e696d6775722e636f6d2f47644679646e792e706e67' wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>Recipe Book</Card.Header>
                            <Card.Meta>
                                <span className='date'>March 2023</span>
                            </Card.Meta>
                            <Card.Description target='_blank' href='https://github.com/mgrassa14/Recipe-Book-Project2'>
                                <Icon size='big' name="github alternate" />
                            </Card.Description>
                            <Card.Description target='_blank' href='https://happy-tights-fox.cyclic.app/recipes'>
                                <Icon size='big' link name="linkify" />
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='purple'>
                        <Image src='https://camo.githubusercontent.com/5caf2aab6239865ed010399731d8f3a599d92ddbce2718a571f2353671effcd5/68747470733a2f2f692e696d6775722e636f6d2f504e6a65456f532e706e67' wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>Tic-Tac-Toe</Card.Header>
                            <Card.Meta>
                                <span className='date'>March 2023</span>
                            </Card.Meta>
                            <Card.Description target='_blank' href='https://github.com/mgrassa14/Tic-Tac-Toe'>
                                <Icon size='big' name="github alternate" />
                            </Card.Description>
                            <Card.Description target='_blank' href='https://mgrassa14.github.io/Tic-Tac-Toe/'>
                                <Icon size='big' link name="linkify" />
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}