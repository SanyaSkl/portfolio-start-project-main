import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './LinkSocial_Styles';

const socialItemsData = [
    {
        iconId: "socialIconEmail",
        href: "sanyaskl2012@gmail.com"
    },
    {
        iconId: "socialIconGit",
        href: "https://github.com/SanyaSkl"
    },
    {
        iconId: "socialIconTelegram",
        href: "https://t.me/SanyaStOskol"
    },
]

export const LinkSocial: React.FC = () => {
    return (
        <S.SocialList>
            {socialItemsData.map((s, index) => {
                return (
                    <S.SocialItem key={index}>
                        <S.SocialLink href={s.href}>
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

