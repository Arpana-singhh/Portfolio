"use client";

import { Modal } from "antd";

interface CertModalProps {
  open: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

export default function CertModal({ open, onClose, image, title }: CertModalProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={780}
      className="cert-modal"
      title={null}
      styles={{ body: { padding: 0 } }}
    >
      <img
        src={image}
        alt={title}
        className="cert-modal-img"
      />
    </Modal>
  );
}
