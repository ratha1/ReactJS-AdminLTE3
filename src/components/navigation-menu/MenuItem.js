import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ data }) {
 
    return <RecursiveMenu data={data}></RecursiveMenu>;
}

const RecursiveMenu = ({data}) => {
    return data.map(x => (
                <MenuList key={x.name} menu={x} hadChild={(typeof x.child !== 'undefined') && x.child.length > 0} />
            ))
            
}

const MenuList = ({menu, hadChild}) => {
    let icons = "nav-icon " + menu.icon;
    let url = menu.url;
    let child = menu.child;
    let isHadChild = (typeof menu.child !== 'undefined') && menu.child.length > 0;
    var menuResult = (<div></div>);
    if (hadChild) {
        return (
            <li  className="nav-item has-treeview" >
                <NavLink to={url} className="nav-link" activeClassName="active">
                    <i className={icons}   ></i>
                    <p>
                        {menu.name}
                        <i className="right fas fa-angle-left"></i>
                    </p>
                </NavLink>
                <ul className="nav nav-treeview">
                    {
                        child.map(x=>(
                            <MenuList key={x.name} menu={x} hadChild={(typeof x.child !== 'undefined') && x.child.length > 0} />
                        ))
                    }
                </ul>
            </li>
        );
    } else {
        return (
            <li className="nav-item" >
                <NavLink to={menu.url} className="nav-link" activeClassName="active">
                    <i className={icons}></i>
                    <p>{menu.name}</p>
                </NavLink>
            </li>
        );
    }
    return menuResult;
}

export default MenuItem;