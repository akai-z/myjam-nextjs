import { store } from 'react-notifications-component';

export const showNotification = (title, message, type) =>
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-center',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 2500,
      showIcon: true,
    },
  });
