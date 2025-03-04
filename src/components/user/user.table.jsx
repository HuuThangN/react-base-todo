import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Space, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
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
    return (
        <div>
            <Table rowKey={'_id'} columns={columns} dataSource={dataUsers} />
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
            />
        </div>
    );
};

export default UserTable;
