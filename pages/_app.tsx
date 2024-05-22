//import "../styles/globals.css";
//모든페이지의 공통설정들 여기서 진행함

import { AppProps } from 'next/app';
import Layout from "../src/components/commons/layout";
import ApolloSetting from '../src/components/commons/apollo';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { Global } from '@emotion/react';


export default function App({ Component }: AppProps) {

  return (
    <>
      <div>=============== 여기는 app.js 컴포넌트 시작부분 입니다. ==============</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles}/>
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>=============== 여기는 app.js 컴포넌트 마지막부분 입니다. ==============</div>
    </>
  );
}
