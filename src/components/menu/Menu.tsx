import React from 'react';
import {S} from './Menu_Styles';


const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Tech Stack",
        href: "techStack"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    }
]

export const Menu: React.FC = () => {
    return (
        <S.StyledMenu>
            <ul>
                {items.map((item, index) => {
                    return (
                        <S.MenuItem key={index}>
                            <S.NavLink
                                activeClass="active"
                                to={item.href}
                                smooth={true}
                                spy={true}
                                offset={-310}
                            >
                                {item.title}</S.NavLink>
                        </S.MenuItem>
                    )
                })}
            </ul>
        </S.StyledMenu>
    );
};

