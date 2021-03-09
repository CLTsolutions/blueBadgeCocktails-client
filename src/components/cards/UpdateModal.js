import { useState } from "react";
import { Modal, Button } from "antd";
import UpdateCocktailForm from "./UpdateCocktailForm";

const UpdateModal = ({ updateCocktail, id, cocktail, fetchDrinks }) => {
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
        Open Modal
      </Button>
      <Modal
        title="Update your cocktail."
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <UpdateCocktailForm
          updateCocktail={updateCocktail}
          cocktail={cocktail}
          id={cocktail.id}
          fetchDrinks={fetchDrinks}
        />
      </Modal>
    </>
  );
};

export default UpdateModal;
