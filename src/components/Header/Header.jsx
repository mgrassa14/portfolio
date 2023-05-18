import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import React, { Component } from "react";
import "./Header.css"

export default function PageHeader(){
  return (
    <Menu id="header" fixed='top' inverted size='huge'>
        <Menu.Item>
            <Icon name='camera' />
                TechGram
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                Log in
            </Menu.Item>    
            <Menu.Item>
                Signup
            </Menu.Item>  
        </Menu.Menu>
    </Menu>
  );
}
