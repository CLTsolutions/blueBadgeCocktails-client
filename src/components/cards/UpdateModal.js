import { useState } from 'react';
import { Modal, Button } from 'antd';

const UpdateModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Update
        </Button>
        <Modal
          title="Update your cocktail."
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Working?</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
}

export default UpdateModal;