import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenoContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre" >Sobre</Link></li>
        </ul>
    </MainMenuContainer>
);