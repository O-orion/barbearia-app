import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface Tituloprops {
    titulo: string;
}

const Texto = styled(motion.h2)`
 font-size: 40px;
 font-weight: 700;
 color: ${theme.colors.pastelBlue};
 margin: 50px 0;
 text-align: center;
 letter-spacing: 1px;
`

export default function Titulo ({ titulo }: Tituloprops) {

    return (
        <Texto initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} >
            { titulo }
        </Texto>
    )

}