import { Button, Card, Col, Input, Row, Table } from 'antd'
import moment from 'moment'
import { UserOutlined } from '@ant-design/icons'

import SavingHistory from './SavingHistory'

const Details = () => {
  const today = moment().format('MM/DD/YYYY, dddd');
  const total = 40;
  return(
    <div className="p-20">
      <Row>
        <Col span={12}>
          <h1 className="center huge-font mb-3"><b>My Piggy Bank</b></h1>
          <h2 className="center medium-huge-font dark-purple mt-4 mb-4"><b>Total savings: ${total}</b></h2>
          <Row justify="center">
            <Col span={4}/>
            <Col span={16}>
              <Card
                hoverable
                style={{ width: '100%' }}
                className="center"
              >
                <p><img style={{width: 80}} src="/images/piggy.png" /></p>
                <p><b>Today:</b> {today}</p>
                <h3 className="mb-3"><b>My savings</b></h3>
                <p className="m-3"><Input size="large" placeholder="10" prefix={<b>$</b>} /></p>
                <p className="m-3"><Button block type="primary" size="large">Save</Button></p>
              </Card>
            </Col>
            <Col span={4}/>
          </Row>
        </Col>
        <Col span={12}>
          <SavingHistory />
        </Col>
      </Row>
    </div>
  )
}

export default Details
