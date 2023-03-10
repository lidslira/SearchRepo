import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  isFocused?: boolean;
  action: () => void;
}

export function Header({title, isFocused, action}: Props) {
  return (
    <S.Container>
      {isFocused && (
        <S.IconContainer onPress={() => action()}>
          <S.IconNav name="chevron-back" iconType="ionicons"/>
        </S.IconContainer>
      )}
      <S.TitlePage>{title}</S.TitlePage>
      <S.IconContainer />
    </S.Container>
  );
}
