import { Link } from "react-router-dom";
import { Menu, Segment, Image } from "semantic-ui-react";
import React, { Component } from "react";

import "./Footer.css"

export default function Footer(){
    return(
        <Segment inverted id="footer">
            <Menu inverted secondary compact size='huge'>
                <Menu.Item as='a'>
                    <Image size='tiny' target='_blank' src="https://i.imgur.com/6ErpNiB.png" href="https://github.com/mgrassa14"/>
                </Menu.Item>
                <Menu.Menu position='left'>
                    <Menu.Item as='a'>
                        Log in
                    </Menu.Item>    
                    <Menu.Item as='a'>
                        Signup
                    </Menu.Item>  
                </Menu.Menu>
            </Menu>
        </Segment>
        
    )
}