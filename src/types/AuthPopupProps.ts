export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    setPopupType: (type: 'login' | 'register') => void;
}