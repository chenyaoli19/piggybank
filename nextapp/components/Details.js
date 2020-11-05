import { Col, Row, Spin } from 'antd'
import useSWR, { mutate } from 'swr';
import { fetcher } from './RestService';
import moment from 'moment';
import { useState } from 'react';

import SavingHistory from './SavingHistory'
import CardArea from './CardArea'

const URL = "http://127.0.0.1:8000/api/record/";
const Details = () => {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <div className='center pt-5 mt-5'><Spin /></div>
  
  const records = data.map((d, idx)=>{
    return {
      'key': idx,
      'date': moment(d.date).format('MM/DD/YYYY'),
      'amount': '$' + d.amount.toString(),
      'total': '$' + d.total.toString()
    }
  });

  const total = data[0].total;
  const isTodayRecorded = !moment().isAfter(data[0].date, 'day');

  const updateSuccess = (response) => {
//    mutate(URL, {...response});
  }

  return(
    <div className="p-20">
      <Row>
        <Col span={12}>
          <h1 className="center huge-font mb-3"><b>My Piggy Bank</b></h1>
          <h2 className="center medium-huge-font dark-purple mt-4 mb-4"><b>Total savings: ${total}</b></h2>
          <Row justify="center">
            <Col span={4}/>
            <Col span={16}>
              <CardArea isUpdate={isTodayRecorded} updateSuccess={updateSuccess}/>
            </Col>
            <Col span={4}/>
          </Row>
        </Col>
        <Col span={12}>
          <SavingHistory records={records}/>
        </Col>
      </Row>
    </div>
  )
}

export default Details
