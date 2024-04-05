import React from 'react';
import {S} from './Menu_Styles';

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Menu: React.FC = () => {
    return (
        <S.StyledMenu>
            <ul>
                {items.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.Link href="#">{item}</S.Link>
                    </S.MenuItem>
                })}
            </ul>
        </S.StyledMenu>
    );
};

