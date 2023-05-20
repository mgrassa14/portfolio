import { Menu, Icon, Segment } from "semantic-ui-react";
import React, { Component } from "react";
import "./Header.css"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function PageHeader(){
  return (
    <Segment inverted id="header">
        <Menu fixed='top' inverted secondary size='huge'>
            <Menu.Item>
                <HashLink id="Name" to='#header' smooth >
                Maria Grassa
                </HashLink>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <HashLink id="About" to='#about' smooth >About</HashLink>
                </Menu.Item>   
                <Menu.Item>
                    <HashLink id="Works" to='#works' smooth >Works</HashLink>
                </Menu.Item> 
                <Menu.Item id="Resume" as={Link} to='/resume'>
                    Resume
                </Menu.Item> 
                <Menu.Item>
                    <HashLink id="Contact" to='#contact' smooth >Contact</HashLink>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </Segment>
  );
}
