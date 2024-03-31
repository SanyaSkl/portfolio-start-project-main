import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './LinkSocial_Styles';

const socialItemsData = [
    {
        iconId: "socialIconGit"
    },
    {
        iconId: "socialIconTwitter"
    },
    {
        iconId: "socialIconLinkedIn"
    },

]

export const LinkSocial = () => {
    return (
        <S.SocialList>
            {socialItemsData.map((s, index) => {
                return (
                    <S.SocialItem key={index}>
                        <S.SocialLink href={"#"}>
                            <Icon height={"32px"}
                                  width={"32px"}
                                  viewBox={"0 0 32px 32px"}
                                  iconId={s.iconId}/>
                        </S.SocialLink>
                    </S.SocialItem>
                )
            })}
        </S.SocialList>
    );
};

