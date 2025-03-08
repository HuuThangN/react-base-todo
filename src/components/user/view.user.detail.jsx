import { Drawer, Button, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateUserAvatarAPI } from '../../services/api.service';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDataDetailOpen, setIsDataDetailOpen, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, 'avatar');
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateAvatar = await updateUserAvatarAPI(
                newAvatar,
                dataDetail._id,
                dataDetail.fullName,
                dataDetail.phone,
            );
            if (resUpdateAvatar.data) {
                setIsDataDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();

                notification.success({
                    message: 'upload user avatar',
                    description: 'Cap nhat avatar thanh cong',
                });
            } else {
                notification.error({
                    message: 'Error upload avatar',
                    description: JSON.stringify(resUpdateAvatar.message),
                });
            }
        } else {
            notification.error({
                message: 'Error upload avatar',
                description: JSON.stringify(resUpload.message),
            });
        }
    };
    return (
        <Drawer
            width={'40vw'}
            title="Chi tiet user"
            onClose={() => {
                setDataDetail(null);
                setIsDataDetailOpen(false);
            }}
            open={isDataDetailOpen}
        >
            {dataDetail ? (
                <>
                    <p>Id: {dataDetail._id}</p>
                    <br />
                    <p>FullName: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone: {dataDetail.phone}</p>
                    <br />
                    <p>Avatar:</p>
                    <br />
                    <div>
                        <img
                            style={{
                                height: '100%',
                                width: '100%',
                                border: '1px solid #ccc',
                                objectFit: 'contain',
                            }}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                                dataDetail.avatar
                            }`}
                            alt="Duong dan sai!!!"
                        />
                        <div>
                            <label
                                style={{
                                    display: 'inline-block',
                                    padding: '15px 20px',
                                    background: 'blue',
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    font: '12px',
                                    color: '#fff',
                                    cursor: 'pointer',
                                }}
                                htmlFor="btnUpload"
                            >
                                Upload Avatar
                            </label>
                            <input
                                type="file"
                                name=""
                                id="btnUpload"
                                hidden
                                onChange={handleOnChangeFile}
                            />
                        </div>
                        {/* <Button type="primary">Upload Avatar</Button> */}
                    </div>
                    {preview && (
                        <>
                            <img
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    border: '1px solid #ccc',
                                    objectFit: 'contain',
                                }}
                                src={preview}
                                alt="Duong dan sai!!!"
                            />

                            <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                                Save
                            </Button>
                        </>
                    )}
                </>
            ) : (
                <>
                    <p>Không có dữ liệu!!!</p>
                </>
            )}
        </Drawer>
    );
};

export default ViewUserDetail;
