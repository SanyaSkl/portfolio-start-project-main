import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Footer} from "./layout/sections/footer/Footer";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div>
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Footer/>
        </div>
    );
}

export default App;

