import styled from 'styled-components';
import { motion } from 'framer-motion';
import image from '../../assets/barbearia.jpg';
import { theme } from '../../styles/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FilterCard = styled(motion.div)`

  border: 1px solid #8A7F7F;
  border-radius: 8px;
  padding: 20px;
`;

const BarberCard = styled(motion.div)`
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const BarberImage = styled.img`
  width: 100px; /* Aumentei a largura */
  height: 100px; /* Altura fixa para proporção quadrada */
  object-fit: cover; /* Garante que a imagem preencha sem distorcer */
  border-radius: 8px;
  margin-right: 15px;
`;

const InfoWrapper = styled.div`
  flex: 1;
`;

const BarberTitle = styled.h3`
  color: #6D8299; /* Azul Aço Suave */
  font-family: 'Playfair Display', serif; /* Fonte vintage */
  font-size: 18px;
  margin: 0 0 5px;
`;

const BarberDetails = styled.p`
  color: #8A7F7F; /* Cinza Quente */
  font-size: 14px;
  margin: 2px 0;
`;

interface StatusBadgeProps {
  isOpen: boolean;
}

const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  color: #F5E8C7;
  background: ${(props) => (props.isOpen ? '#A8C6B5' : '#C66A6A')}; /* Verde Menta ou Vermelho Tijolo */
`;

const CTAButton = styled(motion.button)`
  background: ${ theme.colors.pastelBlue }; /* Vermelho Tijolo */
  color: #F5E8C7; /* Creme Marfim */
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
`;

export default function GridUI() {
  const barbershops = [
    { name: 'Barbearia Vintage', distance: '1.2 km', rating: '★★★★☆', price: 'R$ 50,00', isOpen: true },
    { name: 'Old School Cuts', distance: '2.5 km', rating: '★★★☆☆', price: 'R$ 40,00', isOpen: false },
    { name: 'Classic Barber', distance: '0.8 km', rating: '★★★★★', price: 'R$ 60,00', isOpen: true },
  ];

  return (
    <Container>
      <FilterCard
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ color: '#6D8299' }}>Filtros</h2>
       
      </FilterCard>
      <div>
        {barbershops.map((barber, i) => (
          <BarberCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <BarberImage src={image} alt={barber.name} />
            <InfoWrapper>
              <BarberTitle>{barber.name}</BarberTitle>
              <StatusBadge isOpen={barber.isOpen}>
                {barber.isOpen ? 'Aberta' : 'Fechada'}
              </StatusBadge>
              <BarberDetails>{`${barber.distance} • ${barber.rating}`}</BarberDetails>
              <BarberDetails>Preço Médio: {barber.price}</BarberDetails>
              <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Agendar
              </CTAButton>
            </InfoWrapper>
          </BarberCard>
        ))}
      </div>
    </Container>
  );
}