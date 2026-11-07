const full = import.meta.glob('./assets/mqarchive/*', {
    eager: true,
    import: 'default',
    query: { w: 1600, format: 'webp' },
});
const thumbs = import.meta.glob('./assets/mqarchive/*', {
    eager: true,
    import: 'default',
    query: { w: 400, format: 'webp' },
});
export const ARCHIVES = Object.keys(full).map((key) => ({
    full: full[key],
    thumb: thumbs[key],
}));