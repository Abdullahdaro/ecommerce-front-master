import styled from 'styled-components';
import { FaPiggyBank, FaMoneyBillWave, FaQuestionCircle, FaMapMarkedAlt } from 'react-icons/fa'; // Icons

const TripSafetyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #ff6b6b;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 180px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #ffda44;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #ffda44;
`;

const TripSafety = () => {
  return (
    <TripSafetyContainer>
      <Title>Make your Trip safe</Title>
      <CardContainer>
        <Card>
          <IconWrapper>
            <FaPiggyBank />
          </IconWrapper>
          <Text>Choose Economy Price</Text>
        </Card>

        <Card>
          <IconWrapper>
            <FaMoneyBillWave />
          </IconWrapper>
          <Text>Get Fully refund</Text>
        </Card>

        <Card>
          <IconWrapper>
            <FaQuestionCircle />
          </IconWrapper>
          <Text>Full Support</Text>
        </Card>

        <Card>
          <IconWrapper>
            <FaMapMarkedAlt />
          </IconWrapper>
          <Text>Get Your Comfort</Text>
        </Card>
      </CardContainer>
    </TripSafetyContainer>
  );
};

export default TripSafety;
