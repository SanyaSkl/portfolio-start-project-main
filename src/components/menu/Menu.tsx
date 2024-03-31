import React from 'react';
import {S} from './Menu_Styles';


export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href="#">{item}</S.Link>
                    </S.ListItem>
                })}
            </ul>
        </S.StyledMenu>
    );
};

