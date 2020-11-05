import { Table } from 'antd';

const SavingHistory = (props) => {
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

  return (
    <div className="mt-3 mr-5">
      <Table columns={columns} dataSource={props.records} />
    </div>
  )
}

export default SavingHistory;