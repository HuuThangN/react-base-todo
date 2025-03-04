import { useEffect, useState } from 'react';
import { Input, notification, Modal } from 'antd';
import { createUserAPI, updateUserAPI } from '../../services/api.service';

const UpdateUserModal = (props) => {
    const [id, setId] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate]);

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName('');
        setPhone('');
        setId('');
        setDataUpdate(null);
    };

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: 'Update user',
                description: 'Cap nhat user thanh cong',
            });
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(res.message),
            });
        }
    };

    return (
        <Modal
            maskClosable={false}
            title="Update User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => setIsModalUpdateOpen(false)}
            okText={'Save'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <span>Id</span>
                    <Input value={id} disabled />
                </div>

                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => {
                            setFullName(event.target.value);
                        }}
                    />
                </div>

                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default UpdateUserModal;
