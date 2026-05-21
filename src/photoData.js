const photos = import.meta.glob('./assets/photos/*', {eager: true}); //EAGER - ALL PHOTOS IN A SINGLE PROMISE

export const PHOTOS_ARRAY = Object.values(photos).map(m => m.default);