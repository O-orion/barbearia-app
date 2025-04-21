// src/components/ui/AuthSplitContainer.tsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import barberShopImg from '../../assets/barber-shop.jpeg'; // Adicione uma imagem no assets

interface AuthSplitContainerProps {
  children: React.ReactNode;
  title: string;
}

const Container = styled(motion.div)`
  display: flex;
  min-height: 90vh;
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
  border-radius:  8px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Overlay escuro */
    border-radius: 8px 0px 0px 8px;
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
  background: linear-gradient(135deg, ${theme.colors.pastelRed}, ${theme.colors.softGray});
  padding: ${theme.spacing.xl};
  border-radius: 0px 8px 8px 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

const Title = styled(motion.h1)`
  font-family: ${theme.fonts.title};
  color:rgb(233, 229, 12);
  font-weight: 900;
  font-size: 48px;
  text-align: center;
  margin-bottom: ${theme.spacing.xs};
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`;

const Subtitle = styled(motion.p)`
  color: ${theme.colors.pastelWhite};
  font-weight: 500;
  font-family: ${theme.fonts.body};
  font-size: 18px;
  text-align: center;
  max-width: 80%;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const Card = styled(motion.div)`
  background: ${theme.colors.softBlack}; /* Glassmorphism */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: ${theme.spacing.xl};
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

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
          Barbearias ao seu alcance
        </Title>
        <Subtitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Encontre a barbearia mais próxima ou cadastre a sua.
        </Subtitle>
      </LeftSection>
      <RightSection>
        <Card
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2>{title}</h2>
          {children}
        </Card>
      </RightSection>
    </Container>
  );
};

export default AuthCard;