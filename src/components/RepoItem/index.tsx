import React from 'react';
import {RepoProps} from '../../dtos';

import * as S from './styles';

interface RepoItemProps {
  repo: RepoProps;
  action: () => void;
}

const RepoItem: React.FC<RepoItemProps> = ({repo, action}) => (
  <S.Touchable onPress={() => action()}>
    <S.Container>
      <S.RepoUserImage source={{uri: repo.owner.avatar_url}} />
      <S.TextWrap>
        <S.TitleContainer>
          <S.RepoTitle fontSize={16}>{repo.name}</S.RepoTitle>
          <S.RateContainer>
            {/* <S.IconContainer name="star" color="#fde910" /> */}
            <S.RateInfo fontSize={14}>{repo.stargazers_count} stars</S.RateInfo>
          </S.RateContainer>
        </S.TitleContainer>
        <S.OwnerName fontSize={14}>{repo.owner.login}</S.OwnerName>
        <S.Line/>
      </S.TextWrap>
    </S.Container>
  </S.Touchable>
);
export default RepoItem;
