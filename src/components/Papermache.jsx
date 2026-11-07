import { useState, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import { ARCHIVES } from "../archiveData";
import "./Papermache.css";
import archivebanner from "../assets/misc/archivebanner.webp";

const PHOTO_W = 17;
const PHOTO_H = 22;

const rand = (min, max) => Math.random() * (max - min) + min;

const shuffle = (array) => {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const scatter = () =>
    shuffle(ARCHIVES).map((photo, id) => ({
        id,
        thumb: photo.thumb,
        full: photo.full,
        style: {
            left: `${rand(0, 100 - PHOTO_W)}%`,
            top: `${rand(0, 100 - PHOTO_H)}%`,
            transform: `rotate(${rand(-12, 12)}deg)`,
        },
    }));

const PhotoCard = memo(function PhotoCard({ photo, onSelect, onDelete }) {
    return (
        <div className="archive-photo" style={photo.style} onClick={() => onSelect(photo)}>
            <img
                src={photo.thumb}
                alt={`archive ${photo.id}`}
                loading="lazy"
                decoding="async"
                draggable={false}
            />
            <button
                className="archive-delete"
                aria-label="Remove photo"
                onClick={(e) => onDelete(e, photo.id)}
            >
                X
            </button>
        </div>
    );
});

export default function Papermache() {
    const [photos, setPhotos] = useState(scatter);
    const [selected, setSelected] = useState(null);

    const onSelect = useCallback((photo) => setSelected(photo), []);

    const onDelete = useCallback((e, id) => {
        e.stopPropagation()
        setPhotos((prev) => prev.filter((p) => p.id !== id));
    }, []);

    return (
        <>
            <div id="warning">
                <b>WARNING</b>
                <p>*best experienced on pc</p>
                <p>*might require good enough hardware and internet connection to render and work properly</p>
            </div>
            <img id="archive-banner" src={archivebanner} alt="archiwum" />

            {selected && createPortal(
                <section className="showoff" onClick={() => setSelected(null)}>
                    <img
                        key={selected.id}
                        src={selected.full}
                        alt={`archive ${selected.id}`}
                        decoding="async"
                    />
                </section>,
                document.body
            )}

            <div id="archive">
                {photos.map((p) => (
                    <PhotoCard key={p.id} photo={p} onSelect={onSelect} onDelete={onDelete} />
                ))}
            </div>
        </>
    );
}