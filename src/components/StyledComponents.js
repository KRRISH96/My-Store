import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px;
`
export const ItemContainer = styled.div`
  background: rgba(253, 173, 199, 0.2);
  border: 1px dashed blue;
  text-align: center;
  margin: 10px;
  max-width: 350px;
`
export const Button = styled.button`
  color: blue;
  font-size: 14px;
  padding: 4px 8px;
  border: 2px solid #BADA55;
  border-radius: 3px;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 250px;
  height: 200px;
  margin: 15px;
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`
export const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dotted #BADA55;
`
