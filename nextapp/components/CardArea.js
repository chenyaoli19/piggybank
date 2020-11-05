import { Button, Card, message, Input, Spin } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import isofetch from 'isomorphic-unfetch';

const CardArea = props => {
  const [saving, setSaving] = useState(10);
  const [updating, setUpdating] = useState(false);

  const today = moment().format('MM/DD/YYYY, dddd');
  const buttonText = updating ? <Spin /> : props.isUpdate ? 'Update':'Save';

  const postSaving = () => {
    setUpdating(true);
    const payload = {
      'amount': saving
    };
    const url = "http://127.0.0.1:8000/api/record/";
    isofetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(r => r.json())
    .then(json=>{
      setUpdating(false);
      props.updateSuccess(json);
      message.success('Success!');
    });
  }
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      className="center"
    >
      <p><img style={{width: 90}} src="/images/piggy.png" /></p>
      <p><b>Today:</b> {today}</p>
      <h3 className="mb-3"><b>My savings</b></h3>
      <p className="m-3">
        <Input size="large" placeholder="10" prefix={<b>$</b>} onChange={e=>setSaving(e.target.value)}/>
      </p>
      <p className="m-3"><Button disabled={updating} block type="primary" size="large" onClick={postSaving}>{buttonText}</Button></p>
    </Card>
  )
}

export default CardArea;