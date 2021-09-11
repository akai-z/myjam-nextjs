import React from 'react';
import Link from 'next/link';
import { Wrapper, Main, LinksWrapper, RouterLink, Title, MainText, SecondaryText } from './styles';

const NotFound: React.FC = () => (
  <Main
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
    }}
  >
    <Wrapper>
      <MainText>404 error</MainText>
      <Title>Uh oh! I think you’re lost.</Title>
      <SecondaryText>It looks like the page you’re looking for doesn't exist.</SecondaryText>
      <LinksWrapper className="mt-6">
        <Link href="/" passHref>
          <RouterLink>Go back home</RouterLink>
        </Link>
      </LinksWrapper>
    </Wrapper>
  </Main>
);

export default NotFound;
