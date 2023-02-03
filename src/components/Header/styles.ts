import styled from 'styled-components/native';
import Icon from '../../components/Icon';

import Text from '../../components/Text';

interface IconNavProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.Colors.COLOR_APPLICATION};
`;

export const TitlePage = styled(Text).attrs({
  fontSize: 20,
})`
  color: ${({theme}) => theme.Colors.WHITE};
  margin: 0px 0px 10px 60px;
`;

export const Touchable = styled.TouchableOpacity``;

export const IconContainer = styled.TouchableOpacity`
  margin: 0px 0px 0px 10px;
  position: absolute;
  left: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
// top right bottom left
export const IconNav = styled(Icon).attrs<IconNavProps>(({name, iconType}) => ({
  name,
  size: 26,
  type: iconType,
}))<IconNavProps>`
  color: ${({theme}) => theme.Colors.ACCESSIBILITY};
`;
