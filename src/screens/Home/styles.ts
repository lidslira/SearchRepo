import styled from 'styled-components/native';
import {s} from '../../utils/responsibleText';
import Text from '../../components/Text';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
;
`;

export const TitleText = styled(Text).attrs({
  fontSize: 34,
})`
  font-weight: 700;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 20px 0px 0px 16px;
`;

export const RepoName = styled(Text).attrs({
  fontSize: 16,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 5px;
`;

export const RepoUser = styled(Text).attrs({
  fontSize: 16,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 5px;
`;

export const List = styled.FlatList`
  padding-top: 15px;
  margin-bottom: 5px;
`;

export const Footer = styled.View`
  height: ${s(40)}px;
`;

export const Indicator = styled.ActivityIndicator`
  margin-top: 35px;
  color: ${({theme}) => theme.Colors.APPLICATION_COLOR}
`;

export const ListsContainer = styled.View`
  flex: 2;
`;