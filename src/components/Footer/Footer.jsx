import { Link } from "react-router-dom";
import { Menu, Segment, Image, Icon } from "semantic-ui-react";
import React, { Component } from "react";

import "./Footer.css"

export default function Footer(){
    return(
        <Segment inverted id="footer">
            {/* <h1>test</h1> */}
            <Menu inverted secondary compact size='huge'>
                <Menu.Item id="github" target='_blank' href="https://github.com/mgrassa14">
                    <Icon id='gitIcon' size='big' name="github"/>
                    {/* <Image size='tiny' as='a' target='_blank' src="https://i.imgur.com/6ErpNiB.png" href="https://github.com/mgrassa14"/> */}
                </Menu.Item>
                <Menu.Item id='empty'></Menu.Item>
                <Menu.Item id="linkedin" target='_blank' href="https://www.linkedin.com/in/maria-grassa/">
                    <Icon id='inIcon' size='big' name="linkedin alternate"/>
                    {/* <Image size='tiny' as='a' target='_blank' src="https://i.imgur.com/SoLFdak.png" href="https://www.linkedin.com/in/maria-grassa/"/> */}
                </Menu.Item>
            </Menu>
        </Segment>
        
    )
}