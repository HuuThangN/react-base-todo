import { Button, Input, Form, notification, Row, Col } from 'antd';
import { registerUserAPI } from '../services/api.service';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('check>>', values);
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone,
        );

        if (res.data) {
            notification.success({
                message: 'Register Success',
                description: 'Register completed!',
            });
            navigate('/login');
        } else {
            notification.error({
                message: 'Register Error',
                description: 'Error!',
            });
        }
    };
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            // autoComplete="off"
            style={{ margin: '10px' }}
        >
            <Row>
                <Col span={12} offset={6}>
                    <Form.Item
                        label="FullName"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                pattern: new RegExp(/\d+/g),
                                message: 'Wrong format!',
                            },
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Button
                onClick={() => form.submit()}
                type="primary"
                style={{
                    font: '20px',
                    fontWeight: '700',
                    width: '100px',
                }}
            >
                Register
            </Button>
        </Form>
    );
};

export default RegisterPage;
