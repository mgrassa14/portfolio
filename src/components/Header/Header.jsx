import { Menu, Dropdown, Segment, DropdownMenu } from "semantic-ui-react";
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
                <Menu.Item id="Home" as={Link} to='/'>
                    Home
                </Menu.Item> 
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
                {/* <Dropdown id="Dropdown" item simple icon='list ul' direction='right'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Home' />
                        <Dropdown.Item text='About' />
                        <Dropdown.Item text='Works' />
                        <Dropdown.Item text='Resume' />
                        <Dropdown.Item text='Contact' />
                    </Dropdown.Menu>
                </Dropdown> */}
            </Menu.Menu>
        </Menu>
    </Segment>
  );
}
