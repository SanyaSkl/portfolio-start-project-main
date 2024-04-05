import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {LinkSocial} from "../../components/linkSocial/LinkSocial";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {Menu} from "../../components/menu/Menu";



export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 770;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper align={"center"}>
                    <Logo/>
                    {width < breakpoint ?
                        <MobileMenu /> :
                        <Menu />}
                    <LinkSocial/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

