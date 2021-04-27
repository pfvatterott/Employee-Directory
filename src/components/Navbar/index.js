import React from 'react'
import { Navbar, Icon } from 'react-materialize';


export default function NavbarCustom() {
    return (
        <Navbar
          alignLinks="left"
          brand={<a className="brand-logo" href="#">Employee Directory</a>}
          centerLogo
          id="mobile-nav"
          menuIcon={<Icon></Icon>}
          fixed="true"
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
        </Navbar>
    )
}
