/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import barberShopImg from '../../assets/barber-shop.jpeg';

interface AuthSplitContainerProps {
  children: React.ReactNode;
  title: string;
}

const Container = styled(motion.div)`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.pastelWhite};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background: url(${barberShopImg}) no-repeat center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.pastelWhite};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(45, 55, 72, 0.7), rgba(163, 191, 250, 0.5));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 40vh;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${theme.colors.pastelBlue}, ${theme.colors.softGray});
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

const Title = styled(motion.h1)`
  font-family: ${theme.fonts.title};
  font-size: 45px;
  color: ${theme.colors.pastelWhite};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`;

const Subtitle = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 18px;
  color: ${theme.colors.pastelWhite};
  text-align: center;
  max-width: 80%;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const Card = styled(motion.div)`
  background: rgba(245, 245, 245, 0.95); /* Aumentada a opacidade para legibilidade */
  backdrop-filter: blur(12px);
  border: 1px solid transparent;
  border-radius: 16px;
  padding: ${theme.spacing.xl};
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 1px solid transparent;
    background: linear-gradient(
      45deg,
      ${theme.colors.pastelBlue},
      ${theme.colors.pastelRed}
    ) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 90%;
    padding: ${theme.spacing.lg};
  }
`;


function AuthCard ({ children, title }: AuthSplitContainerProps) {

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LeftSection>
        <Title
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Conecte-se às melhores barbearias
        </Title>
        <Subtitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Crie sua conta e encontre a barbearia mais próxima ou cadastre a sua.
        </Subtitle>
      </LeftSection>
      <RightSection>
        <Card
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </Card>
      </RightSection>
    </Container>
  );

};

export default AuthCard;