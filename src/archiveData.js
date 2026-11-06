const archive = import.meta.glob('./assets/mqarchive/*', {eager: true}); //EAGER - ALL PHOTOS IN A SINGLE PROMISE

export const ARCHIVES = Object.values(archive).map(f => f.default);