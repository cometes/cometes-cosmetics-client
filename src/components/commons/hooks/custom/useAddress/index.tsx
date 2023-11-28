import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function AddressModal(props) {
  const closeModal = () => {
    props.setIsAddressModalOpen(false);
  };

  return (
    <Modal
      open={props.isAddressModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
    </Modal>
  );
}
