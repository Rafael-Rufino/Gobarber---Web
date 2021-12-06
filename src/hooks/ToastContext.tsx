import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export interface ToasMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}
interface ToastContextData {
  addToast(message: Omit<ToasMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToasMessage[]>([]);
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToasMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        type,
        description,
      };
      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used with ToastProvider');
  }
  return context;
}
export { ToastProvider, useToast };
