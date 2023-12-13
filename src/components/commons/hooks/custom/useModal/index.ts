import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return {
    showModal,
    handleOk,
    handleCancel,
    isModalOpen
  };
};
