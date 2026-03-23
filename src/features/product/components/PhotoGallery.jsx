import { useState, useEffect } from "react";
import JerseyArtBox from "../../../components/ui/JerseyArtBox";

export default function PhotoGallery({ photos, gradient, emoji }) {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasPhotos = photos?.length > 0;

  useEffect(() => setActive(0), [photos]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  const prevPhoto = (event) => {
    if (event) event.stopPropagation();
    setActive((current) => (current - 1 + photos.length) % photos.length);
  };

  const nextPhoto = (event) => {
    if (event) event.stopPropagation();
    setActive((current) => (current + 1) % photos.length);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* main frame */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          background: "#ebebeb",
          aspectRatio: "1/1",
          position: "relative",
        }}
      >
        {hasPhotos ? (
          <>
            <img
              src={photos[active]}
              alt="camiseta"
              onClick={() => setIsModalOpen(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                cursor: "zoom-in",
              }}
            />
            {photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.88)",
                    border: "none",
                    borderRadius: "50%",
                    width: 38,
                    height: 38,
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={nextPhoto}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.88)",
                    border: "none",
                    borderRadius: "50%",
                    width: 38,
                    height: 38,
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  }}
                >
                  ›
                </button>
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 12,
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    borderRadius: 20,
                    padding: "3px 10px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                  }}
                >
                  {active + 1} / {photos.length}
                </div>
              </>
            )}
          </>
        ) : (
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <JerseyArtBox gradient={gradient} emoji={emoji} height="100%" />
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.52)",
                color: "#fff",
                borderRadius: 20,
                padding: "5px 16px",
                fontSize: "0.74rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                backdropFilter: "blur(4px)",
              }}
            >
              📸 Fotos próximamente
            </div>
          </div>
        )}
      </div>

      {/* thumbnails */}
      {hasPhotos && photos.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0,
                width: 66,
                height: 66,
                borderRadius: 10,
                overflow: "hidden",
                cursor: "pointer",
                border:
                  active === i ? "3px solid #003893" : "3px solid transparent",
                transition: "border 0.15s",
              }}
            >
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}

      {hasPhotos && isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1200,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(12px,3vw,28px)",
          }}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.92)",
              fontSize: "1.3rem",
              fontWeight: 800,
              cursor: "pointer",
            }}
            aria-label="Cerrar modal"
          >
            ×
          </button>

          <img
            src={photos[active]}
            alt="camiseta ampliada"
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "min(95vw, 980px)",
              maxHeight: "88vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 14,
              boxShadow: "0 18px 48px rgba(0,0,0,0.45)",
            }}
          />

          {photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.92)",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                }}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                onClick={nextPhoto}
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.92)",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                }}
                aria-label="Foto siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
