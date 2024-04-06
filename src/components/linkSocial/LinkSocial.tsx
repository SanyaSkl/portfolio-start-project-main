import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './LinkSocial_Styles';

const socialItemsData = [
    {
        iconId: "socialIconEmail",
        href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTHVcBbSCCzZgThsnnbKCKWgjBzpmJrMVFKnVRxNBXGHdHKlhwppKWJqjvLCsLdbGlbCqV"
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
                            <Icon height={"32"}
                                  width={"32"}
                                  viewBox={"0 0 32 32"}
                                  iconId={s.iconId}/>
                        </S.SocialLink>
                    </S.SocialItem>
                )
            })}
        </S.SocialList>
    );
};

