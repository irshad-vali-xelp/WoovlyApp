import { PermissionsAndroid } from "react-native";
export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Basis App Camera Permission",
        message: "Basis App needs access to your camera "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestReadContactPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "Basis App Read Contact",
        message: "Basis App needs access to your contact "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the Read conatct");
    } else {
      console.log("Read conatct permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestWriteContactPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      {
        title: "Basis App Write Contact",
        message: "Basis App needs access to your contact "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the write conatct");
    } else {
      console.log("Write conatct permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestReadStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Basis App Read Storage",
        message: "Basis App needs access to your Storage "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the read Storage");
    } else {
      console.log("Write conatct permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
export const requestWriteStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Basis App Read Storage",
        message: "Basis App needs access to your Storage "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the write Storage");
    } else {
      console.log("Write conatct permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
