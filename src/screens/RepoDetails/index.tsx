import React from 'react';
import { Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';

import { RootStackParamList } from '../../../App';
import { Header } from '../../components/Header';
import * as S from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'REPO_DETAILS'>;

const RepoDetails = ({route, navigation}: Props) => {
  const { repo } = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <Header title={repo.name} isFocused action={() => handleGoBack()} />
      <S.WebViewContainer 
        style={{
          height: windowHeight,
          width: windowWidth,
        }}>
        <WebView source={{ uri: repo.html_url }} />
      </S.WebViewContainer>
    </S.Container>
  );
};

export default RepoDetails;
