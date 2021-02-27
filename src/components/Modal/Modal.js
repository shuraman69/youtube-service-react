import {Button, Modal} from 'antd';
import SaveFavoriteForm from "./SaveFavoriteForm";

const ModalComponent = ({
                            visible,
                            setVisible,
                            request,
                            requestName,
                            range,
                            setRange,
                            setRequest,
                            setRequestName,
                            onSubmit
                        }) => {
    const onRequestValueChange = (event) => {
        setRequest(event.target.value)
    }
    const onRequestNameValueChange = (event) => {
        setRequestName(event.target.value)
    }
    const onRangeValueChange = (event) => {
        setRange(event.target.value)
    }
    return (
        <Modal
            visible={visible}
            title="Сохранить запрос в избранное"
            onCancel={() => setVisible(false)}
            footer={[null]}
        >
            <SaveFavoriteForm onRequestValueChange={onRequestValueChange}
                              onRequestNameValueChange={onRequestNameValueChange}
                              onRangeValueChange={onRangeValueChange}
                              request={request} requestName={requestName} range={range}
                              onSubmit={onSubmit}
            />
        </Modal>
    );
}
export default ModalComponent