export const alertHolder = class {
  static alertRef;
  static setAlertRef(ref) {
    this.alertRef = ref;
  }
  static show(type, title, message) {
    this.alertRef.alertWithType(type, title, message);
  }
};

export const useAlert = () => {
  return alertHolder;
};
