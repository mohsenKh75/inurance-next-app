import Modal from "@/components/shared/Modal";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  selectedItems?: {
    carTypeInput: string;
    insuranceCompany: string;
    discountPercent: string;
  };
}
export function SubmitModal({ onClose, isOpen, selectedItems }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex min-w-[300px] min-h-[100px] flex-col px-4 h-full justify-around text-teal-600">
        <div className="flex justify-between text-">
          <p>نوع خودرو</p>
          <p>{selectedItems?.carTypeInput}</p>
        </div>
        <div className="flex justify-between">
          <p>بیمه‌گر قبلی</p>
          <p>{selectedItems?.insuranceCompany}</p>
        </div>
        <div className="flex justify-between">
          <p>میزان تخفیف</p>
          <p>{selectedItems?.discountPercent}</p>
        </div>
      </div>
    </Modal>
  );
}
