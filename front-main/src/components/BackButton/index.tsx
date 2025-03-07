import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../Modal/index';

interface BackButtonProps {
  showModalOnBack?: boolean;
  onConfirmBack?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ showModalOnBack = false, onConfirmBack }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (showModalOnBack) {
      setShowModal(true);
    } else {
      if (onConfirmBack) {
        onConfirmBack(); 
      } else {
        navigate(-1); 
      }
    }
  };

  const handleConfirmBack = () => {
    setShowModal(false);
    if (onConfirmBack) {
      onConfirmBack(); 
    } else {
      navigate(-1); 
    }
  };

  const handleCancelBack = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="flex items-center text-primary hover:text-accent transition-colors duration-300 focus:outline-none"
        onClick={handleBackClick}
      >
        <ArrowBackIcon className="mr-2" fontSize="large" />
        <span className="font-medium text-lg">Voltar</span>
      </button>

      {showModalOnBack && (
        <Modal
          isOpen={showModal}
          title="Confirmação"
          content="Você tem certeza que deseja voltar? Todas as informações não salvas serão perdidas."
          onCancel={handleCancelBack}
          onConfirm={handleConfirmBack}
        />
      )}
    </>
  );
};

export default BackButton;