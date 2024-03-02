import React from 'react';
import styled from 'styled-components';
import CardList from 'components/list/CardList';
import LogoBox from 'components/common/LogoBox';
import Button from 'components/common/Button';
import Title from 'components/list/Title';
import Filter from 'components/list/Filter';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1020px;
  padding: 40px 40px;
  margin: 0 auto;

  @media (max-width: 661px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const MainLogo = styled(LogoBox)`
  display: flex;
  width: 146px;
  justify-content: center;
  align-items: center;
`;

const HeadButton = styled(Button)`
  @media (max-width: 661px) {
    width: 130px;
    height: 42px;
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const Section = styled.section`
  margin: 0 2rem;

  @media (max-width: 661px) {
    min-width: 20.6875rem;
    margin: 0 1.5rem;
  }
`;

const TitleFilterArea = styled.div`
  width: 21.3125rem;
  margin: 0 auto 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 661px) {
    width: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 1rem;
  }
`;

const List = () => {
  return (
    <>
      <Header>
        <MainLogo />
        <HeadButton width={160} bright={true}>
          답변하러 가기
        </HeadButton>
      </Header>
      <Section>
        <TitleFilterArea>
          <Title />
          <Filter />
        </TitleFilterArea>
        <CardList />
      </Section>
    </>
  );
};

export default List;
