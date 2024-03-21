//import "../styles/globals.css";
//모든페이지의 공통설정들 여기서 진행함

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from 'next/app';

export default function App({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  });

  return (
    <>
      <div>=============== 여기는 app.js 입니다. ==============</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>=============== 여기는 app.js 입니다. ==============</div>
    </>
  );
}
