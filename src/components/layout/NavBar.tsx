import styled from "styled-components"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Nav = styled(motion.nav)`
    background-color: #A3BFFA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;

`

const Logo = styled(motion.h2)`
    color: #F5E8C7;
    font-weigth: 900;
    font-size: 24px;
`

const UserIcon = styled(motion.div)`
color: #F5E8C7;
font-size: 24px;
cursor: pointer
`


export default function NavBar() {
    return (
        <Nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        >
            <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
                Barbearia Amiga
            </Logo>
            <UserIcon
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            > 
                <FontAwesomeIcon icon={faUser} />
                </UserIcon>
        </Nav>
    )
}
