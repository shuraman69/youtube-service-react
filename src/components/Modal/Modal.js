import {Modal} from 'antd';
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
                            submitId,
                            onSearchSubmit,
                            onEditSubmit
                        }) => {
    const _submit = (event) => {
        console.log(submitId)
        if (submitId === 1) {
            return onEditSubmit(event)
        } else {
            debugger
            return onSearchSubmit(event)
        }
    }
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
                              onSubmit={_submit}
            />
        </Modal>
    );
}
export default ModalComponent