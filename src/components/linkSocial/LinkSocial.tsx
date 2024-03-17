import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";


export const LinkSocial = () => {
    return (
        <SocialList>
            <SocialItem>
                <SocialLink href={"#"}>
                    <Icon height={"32px"} width={"32px"} viewBox={"0 0 32px 32px"} iconId={"socialIconGit"}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href={"#"}>
                    <Icon height={"32px"} width={"32px"} viewBox={"0 0 32px 32px"} iconId={"socialIconTwitter"}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href={"#"}>
                    <Icon height={"32px"} width={"32px"} viewBox={"0 0 32px 32px"} iconId={"socialIconLinkedIn"}/>
                </SocialLink>
            </SocialItem>
        </SocialList>
    );
};

const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

