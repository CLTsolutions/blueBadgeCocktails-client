import { useState } from 'react';

const UpdateModal = ({ updateCocktailForm }) => {
    

    return (
      <>
        
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