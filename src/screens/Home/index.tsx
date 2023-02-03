import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';

import {ApplicationState} from '../../store';
import * as S from './styles';
import {REPO_DETAILS} from '../../constants/routes';
import Input from '../../components/Input';
import { RepoProps } from '../../dtos';
import RepoItem from '../../components/RepoItem';
import { searchReposAction } from '../../store/ducks/repositories/actions';

export const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchRepo, setSearchRepo] = useState<string>('');
  
  const {Colors} = useContext(ThemeContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { searchedRepos, loading} = useSelector(
    (state: ApplicationState) => state.repos,
  );
    console.tron.log(page)
  const searchReposList = () => {
    dispatch(searchReposAction(searchRepo, page));
  };
  
  const getMoreRepos = () => {
    dispatch(searchReposAction(searchRepo, page));
    setPage(page + 1);
  }

  const goToRepoDetails = (repo: RepoProps) => {
    navigation.navigate(REPO_DETAILS, {repo});
  };

  const renderRepoList = ({item}: RepoProps) => (
    <RepoItem repo={item} action={() => goToRepoDetails(item)} />
  );
  return (
    <S.MainContainer>
      <S.TitleText>Repositórios</S.TitleText>
      <Input
        iconLeft="magnify"
        placeholder="Busca por repositórios"
        placeholderTextColor={Colors.PLACEHOLDER}
        value={searchRepo}
        onChangeText={setSearchRepo}
        onEndEditing={() => searchReposList()}
        onSubmitEditing={() => searchReposList()}
        />
        {loading ? (
          <S.Indicator size="large" />
        ) : (
          <S.ListsContainer>
          <S.List
            data={searchedRepos}
            extraData={searchedRepos}
            renderItem={renderRepoList}
            numColumns={1}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<S.Footer />}
            refreshing={loading}
            // onRefresh={() => searchReposList()}
            // onEndReached={() => getMoreRepos()}
            onEndReachedThreshold={0.3}
          />
        </S.ListsContainer> 
        )}
        
    </S.MainContainer>
  );
};
