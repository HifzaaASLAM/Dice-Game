import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Gallery/dice/dice_${currentDice}.png`} />
      </div>
      <p>click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
  }
  .dice {
    cursor: pointer;
  }
`;
