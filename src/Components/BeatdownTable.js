import { Space, Table, Tag, Card } from "antd";
const columns = [
  {
    title: "AO (Location)",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="">{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Q?",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export const BeatdownTable = () => {
  return (
    <div>
      <Card style={{ width: 700, marginTop: 20 }}>
        <Table columns={columns} dataSource={data} />;
      </Card>
    </div>
  );
};
