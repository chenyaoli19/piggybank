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
  ];
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default SavingHistory;