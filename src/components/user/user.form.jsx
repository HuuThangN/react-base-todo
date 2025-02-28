import { Button, Input, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        const res = createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'Create user',
                description: 'Tao user thanh cong',
            });
            setIsModalOpen(false);
        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(res.message),
            });
        }
    };

    return (
        <div className="user-form" style={{ margin: '10px auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <h3 style={{ font: '20px', fontWeight: '700', margin: '15px 10px' }}>
                        Table Users:
                    </h3>
                    <div>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            type="primary"
                            style={{ font: '20px', fontWeight: '700' }}
                        >
                            Create User
                        </Button>
                    </div>
                </div>
                <Modal
                    maskClosable={false}
                    title="Create User"
                    open={isModalOpen}
                    onOk={() => handleSubmitBtn()}
                    onCancel={() => setIsModalOpen(false)}
                    okText={'Create'}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
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
            </div>
        </div>
    );
};

export default UserForm;
