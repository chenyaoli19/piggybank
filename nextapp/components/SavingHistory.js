import { Table } from 'antd'

const SavingHistory = props => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    }
  ];
  const data = [
    {
      key: '1',
      date: '11/3/2020',
      amount: 10,
      total: '30'
    },
    {
      key: '2',
      date: '11/2/2020',
      amount: 10,
      total: '20'
    },
    {
      key: '3',
      date: '11/1/2020',
      amount: 10,
      total: '10'
    },
    {
      key: '4',
      date: '11/3/2020',
      amount: 10,
      total: '30'
    },
    {
      key: '5',
      date: '11/2/2020',
      amount: 10,
      total: '20'
    },
    {
      key: '6',
      date: '11/1/2020',
      amount: 10,
      total: '10'
    },
    {
      key: '7',
      date: '11/3/2020',
      amount: 10,
      total: '30'
    },
    {
      key: '8',
      date: '11/2/2020',
      amount: 10,
      total: '20'
    },
    {
      key: '9',
      date: '11/1/2020',
      amount: 10,
      total: '10'
    },
    {
      key: '10',
      date: '11/3/2020',
      amount: 10,
      total: '30'
    },
    {
      key: '11',
      date: '11/2/2020',
      amount: 10,
      total: '20'
    },
    {
      key: '12',
      date: '11/1/2020',
      amount: 10,
      total: '10'
    },
  ];
  return (
    <div className="mt-3 mr-5">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default SavingHistory;