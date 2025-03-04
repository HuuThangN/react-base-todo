import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDataDetailOpen, setIsDataDetailOpen } = props;

    return (
        <Drawer
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
