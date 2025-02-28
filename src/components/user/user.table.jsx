import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: 'id',
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
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
    };

    console.log('>> run render 000');

    return (
        <div>
            <Table rowKey={'_id'} columns={columns} dataSource={dataUsers} />
        </div>
    );
};

export default UserTable;
