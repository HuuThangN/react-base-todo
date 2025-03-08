import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Space, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isDataDetailOpen, setIsDataDetailOpen] = useState(false);

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: 'Delete user',
                description: 'Delete user succsess',
            });
            await loadUser();
        } else {
            notification.error({
                message: 'Error delete user',
                description: JSON.stringify(res.message),
            });
        }
    };

    const columns = [
        {
            title: 'STT',
            key: 'stt',
            render: (_, record, index) => `${index + 1 + (current - 1) * pageSize}`,
        },
        {
            title: 'Id',
            dataIndex: '_id',
            key: 'id',
            render: (_, record) => (
                <a
                    href="#!"
                    onClick={() => {
                        setDataDetail(record);
                        setIsDataDetailOpen(true);
                    }}
                >
                    {record._id}
                </a>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <Popconfirm
                        title="Delete the user"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current && pagination.current !== +current) {
            setCurrent(+pagination.current); //"5" => 5
        }

        if (pagination && pagination.pageSize && pagination.pageSize !== +pageSize) {
            setPageSize(+pagination.pageSize);
        }
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={'_id'}
                pagination={{
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => {
                        return (
                            <div>
                                {' '}
                                {range[0]}-{range[1]} trên {total} rows
                            </div>
                        );
                    },
                }}
                onChange={onChange}
            />

            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDataDetailOpen={isDataDetailOpen}
                setIsDataDetailOpen={setIsDataDetailOpen}
                loadUser={loadUser}
            />
        </div>
    );
};

export default UserTable;
