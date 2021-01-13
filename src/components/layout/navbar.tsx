import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export const Navbar = () => {

  let history = useHistory();
  let location = useLocation();

  const _items: ICommandBarItemProps[] = [
    {
      key: 'Vehicles',
      text: 'Vehicles',
      onClick: () => history.push('/'),
      checked: location.pathname === '/'
    },
    {
      key: 'About',
      text: 'About',
      onClick: () => history.push('/about'),
      checked: location.pathname === '/about'
    },
    {
      key: 'contact',
      text: 'contact',
      onClick: () => history.push('/contact'),
      checked: location.pathname === '/contact'
    },
    {
      key: 'clients',
      text: 'clients',
      onClick: () => history.push('/clients'),
      checked: location.pathname === '/clients'
    },
  ];

  
  return (
    <CommandBar
      items={_items}
    />
  );
};
