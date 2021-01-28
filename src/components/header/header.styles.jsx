import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.jpg';

export const HeaderContainer = styled.div`
  height: 32vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  background-image: url(${cover});
`;

export const LogoContainer = styled(Link)`
  color: #fff;
  ${'' /* height: 100%; */}
  font-size: 20px;
  ${'' /* width: 70px; */}
  padding: 10px 25px;
  align-self: flex-end;
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
  font-size: 20px;
  padding: 10px 25px;
  cursor: pointer;
  align-self: flex-end;
  font-weight: ${props => props.active ? "bolder" : "regular"};

  &:hover {
    font-weight: bolder;
  }
`;