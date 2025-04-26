import styled from 'styled-components';
import { motion } from 'framer-motion';
import image from '../../assets/barbearia.jpg';
import { theme } from '../../styles/theme';
import { useState } from 'react';

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
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

const InfoWrapper = styled.div`
  flex: 1;
`;

const BarberTitle = styled.h3`
  color: #6D8299;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  margin: 0 0 5px;
`;

const BarberDetails = styled.p`
  color: #8A7F7F;
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
  background: ${(props) => (props.isOpen ? '#A8C6B5' : '#C66A6A')};
`;

const CTAButton = styled(motion.button)`
  background: ${ theme.colors.pastelBlue };
  color: #F5E8C7;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
`;


const FilterTitle = styled.h2`
  color: #6D8299;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  margin-bottom: 20px;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  display: block;
  color: #6D8299;
  font-size: 16px;
  margin-bottom: 8px;
`;

const RangeInput = styled.input`
  width: 100%;
  accent-color: ${theme.colors.pastelRed};
`;

const RangeValue = styled.span`
  color: #8A7F7F;
  font-size: 14px;
  margin-left: 10px;
`;

const SelectInput = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #8A7F7F;
  border-radius: 5px;
  color:rgb(240, 165, 2);
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color:rgb(198, 168, 168);
  }
`;

const ApplyButton = styled(motion.button)`
  background: ${theme.colors.pastelRed};
  color:rgb(255, 255, 255);
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  margin-top: 10px;
`;


export default function GridUI() {
  const barbershops = [
    { name: 'Barbearia Vintage', distance: '1.2 km', rating: '★★★★☆', price: 'R$ 50,00', isOpen: true },
    { name: 'Old School Cuts', distance: '2.5 km', rating: '★★★☆☆', price: 'R$ 40,00', isOpen: false },
    { name: 'Classic Barber', distance: '0.8 km', rating: '★★★★★', price: 'R$ 60,00', isOpen: true },
  ];

  const [distance, setDistance] = useState(10); // Distância em km (0 a 20)
  const [priceRange, setPriceRange] = useState([20, 100]); // Intervalo de preço
  const [rating, setRating] = useState(3); // Rating mínimo (1 a 5)

  // Função para aplicar os filtros
  const handleApplyFilters = () => {
    console.log('Filtros aplicados:', { distance, priceRange, rating });
    // Aqui você pode passar os valores para o componente pai ou fazer uma requisição para filtrar as barbearias
  };


  return (
    <Container>
      <FilterCard
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FilterCard
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FilterTitle>Filtros</FilterTitle>

      {/* Filtro de Distância */}
      <FilterSection>
        <FilterLabel>Distância (km)</FilterLabel>
        <RangeInput
          type="range"
          min="0"
          max="20"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
        />
        <RangeValue>{distance} km</RangeValue>
      </FilterSection>

      {/* Filtro de Preço */}
      <FilterSection>
        <FilterLabel>Preço (R$)</FilterLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <RangeInput
            type="range"
            min="10"
            max="150"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <RangeInput
            type="range"
            min="10"
            max="150"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
        </div>
        <RangeValue>
          R$ {priceRange[0]} - R$ {priceRange[1]}
        </RangeValue>
      </FilterSection>

      {/* Filtro de Rating */}
      <FilterSection>
        <FilterLabel>Rating Mínimo</FilterLabel>
        <SelectInput value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={1}>★☆☆☆☆ (1+)</option>
          <option value={2}>★★☆☆☆ (2+)</option>
          <option value={3}>★★★☆☆ (3+)</option>
          <option value={4}>★★★★☆ (4+)</option>
          <option value={5}>★★★★★ (5)</option>
        </SelectInput>
      </FilterSection>

      {/* Botão de Aplicar */}
      <ApplyButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleApplyFilters}
      >
        Aplicar Filtros
      </ApplyButton>
    </FilterCard>
        
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