import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItemContainer = styled(Link)`
	height: 30vh;
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .content {
			opacity: 0.9;
		}
	}
    &:nth-child(3n+2){
        margin-left: 7.5px;
    }
    &:nth-child(3n+3){
        margin-left: 7.5px;
    }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imageUrl});
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;