import styled from 'styled-components/native';
import Icon from '../../components/Icon';
import Text from '../../components/Text';
import {vs} from '../../utils/responsibleText';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

export const Container = styled.View`
  padding: 5px;
  flex-grow: 1;
  width: auto;
  /* background: ${({theme}) => theme.Colors.CARD_COLOR}; */
  margin: ${vs(5)}px;
  /* align-items: center; */
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const TextWrap = styled.View`
  width: 80%;
`;

export const Line = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #EBEBEB;
  margin-top: 10px
`

export const RateContainer = styled.View`
  align-items: center;
  margin: 3px;
  padding: 5px;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
`;

export const RateInfo = styled(Text)`
  color: ${({theme}) => theme.Colors.DARK};
  flex-shrink: 1;
  flex-wrap: wrap;
`;

export const OwnerName = styled(Text)`
  color: ${({theme}) => theme.Colors.DARK};
  flex-shrink: 1;
  flex-wrap: wrap;
  width: 100%;
`;

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
`;

export const RepoTitle = styled(Text)`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  flex-shrink: 1;
  flex-wrap: wrap;
  font-weight: 700;
`;

export const RepoUserImage= styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const TitleContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width:auto;
`;

export const IconContainer = styled(Icon).attrs<IconInputProps>(
  ({theme, name, iconType}) => ({
    name,
    size: theme.Sizes.ICON_SIZE_SMALL,
    type: iconType,
  }),
)<IconInputProps>``;
