export const SET_IMAGE_PREVIEW='SET_IMAGE_PREVIEW'

export const setImagePreview = (image) => {
    return {
      type:SET_IMAGE_PREVIEW ,
      payload: image,
    };
  };
  