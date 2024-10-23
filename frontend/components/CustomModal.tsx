import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

// Custom styles for the modal
const customStyles: {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
    width: string;
    maxWidth: string;
    maxHeight: string;
    zIndex: number;
    padding: string;
    position: 'absolute' | 'fixed' | 'relative' | 'sticky' | 'static' | undefined; // Updated position type
  };
  overlay: {
    zIndex: number;
  };
} = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '90vh',
    zIndex: 1000,
    padding: '20px',
    position: 'relative', // Ensure this is a valid value
  },
  overlay: {
    zIndex: 1000,
  },
};

// Defining prop types
interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
  ChildrenStyle?: string; // Optional custom styles for children
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  children,
  ChildrenStyle = '',
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Custom Modal"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300 z-50"
      >
        <FaTimes className="text-2xl" />
      </button>
      <div className={`max-h-[80vh] ${ChildrenStyle}`}>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
