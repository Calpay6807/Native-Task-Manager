const {default: Toast} = require('react-native-toast-message');

const showToast = (
  type = 'success',
  text,
  position = 'top',
  visibilityTime = 3000,
) => {
  Toast.show({
    type,
    text1: text,
    position,
    visibilityTime,
    autoHide: true,
  });
};

export default showToast;
