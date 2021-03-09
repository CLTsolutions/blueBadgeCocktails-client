import { useState } from "react";
import { Modal } from "antd";
import UpdateCocktailForm from "./UpdateCocktailForm";

const UpdateModal = ({ updateCocktail, id, cocktail, fetchDrinks, setCocktailsToUpdate }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    setCocktailsToUpdate(Infinity)
  };

  return (
    <>
      <Modal
        title="Update your cocktail."
        visible={isModalVisible}
        onCancel={handleCancel}
        footer = {null}
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
