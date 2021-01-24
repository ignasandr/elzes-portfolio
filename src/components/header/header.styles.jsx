import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.jpg';

export const HeaderContainer = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  background-image: url(${cover});
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${'' /* align-items: center; */}
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  color: #fff;
  padding: 10px 25px;
  cursor: pointer;
  align-self: flex-end;
  font-weight: ${props => props.active ? "bolder" : "regular"};

  &:hover {
    font-weight: bolder;
  }
`;