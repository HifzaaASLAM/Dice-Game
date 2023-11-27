import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>select any number</p>
        <p>play and win</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
`;
