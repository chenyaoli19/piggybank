import Head from 'next/Head'
import Link from 'next/link'

import { Layout } from 'antd';
import { SmileFilled } from '@ant-design/icons'

import Details from '../components/Details'

const { Header, Footer, Sider, Content } = Layout;

const content = {
  minHeight: '100vh'
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>My piggy bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={content}>
        <Header>Header</Header>
        <Content>
          <Details />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by <b>CYLIMOMO</b></Footer>
      </Layout>
    </div>
  )
}
