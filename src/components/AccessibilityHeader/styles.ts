import styled from 'styled-components/native';

import {sfs, vs} from '../../utils/responsibleText';

import Text from '../../components/Text';
import Icon from '../../components/Icon';

export const Container = styled.View`
  height: ${vs(40)}px;
  background: ${({theme}) => theme.Colors.COLOR_APPLICATION};
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
`;

export const ContainerFont = styled.View`
  flex-direction: row;
`;

export const RestoreFont = styled(Text).attrs({
  fontSize: sfs(25),
})`
  font-weight: bold;
  color: ${({theme}) => theme.Colors.ACCESSIBILITY};
  margin-right: 20px;
  margin-left: 18px;
`;

export const DecreaseIncreaseFont = styled(Text).attrs({
  fontSize: sfs(25),
})`
  font-weight: bold;
  color: ${({theme}) => theme.Colors.ACCESSIBILITY};
`;

export const Button = styled.TouchableOpacity``;

export const IconColor = styled(Icon).attrs(({theme}) => ({
  name: 'invert-colors',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({theme}) => theme.Colors.ACCESSIBILITY};
`;
