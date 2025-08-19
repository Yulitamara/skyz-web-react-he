import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const defaultPrefs = {
  fontScale: 1,        // 1, 1.15, 1.3
  contrast: false,
  dyslexia: false,
  underlineLinks: false,
  focus: false,     
  reduceMotion: false,
};

const STORAGE_KEY = "a11y_prefs_v1";

export default function AccessibilityWidget() {
  const { i18n } = useTranslation();
  const isHe = i18n.language?.startsWith("he");

  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // load
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) setPrefs({ ...defaultPrefs, ...saved });
    } catch {}
  }, []);

  // click-away & Esc to close
  useEffect(() => {
    if (!open) return;

    const handleDocMouseDown = (e) => {
      const panelEl = panelRef.current;
      const btnEl = buttonRef.current;
      if (!panelEl || !btnEl) return;
      const clickedOutside =
        !panelEl.contains(e.target) && !btnEl.contains(e.target);
      if (clickedOutside) setOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleDocMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleDocMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // apply + persist
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--a11y-font-scale", String(prefs.fontScale));
    root.classList.toggle("a11y-contrast", prefs.contrast);
    root.classList.toggle("a11y-dyslexia", prefs.dyslexia);
    root.classList.toggle("a11y-underline-links", prefs.underlineLinks);
    root.classList.toggle("a11y-focus", prefs.focus);
    root.classList.toggle("a11y-reduce-motion", prefs.reduceMotion);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  const t = (he, en) => (isHe ? he : en);

  const incFont = () =>
    setPrefs((p) => ({
      ...p,
      fontScale: Math.min(1.3, +(p.fontScale + 0.15).toFixed(2)),
    }));
  const decFont = () =>
    setPrefs((p) => ({
      ...p,
      fontScale: Math.max(1, +(p.fontScale - 0.15).toFixed(2)),
    }));
  const resetAll = () => setPrefs(defaultPrefs);

  return (
    <div className="a11y-widget" aria-live="polite">
      <button
        ref={buttonRef}
        className="a11y-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t("פתיחת תפריט נגישות", "Open accessibility menu")}
        onClick={() => setOpen((o) => !o)}
      >
        ♿
      </button>

      {open && (
        <div
          ref={panelRef}
          className="a11y-panel"
          role="dialog"
          aria-label={t("תפריט נגישות", "Accessibility menu")}
        >
          <div className="row">
            <span>{t("גודל טקסט", "Text size")}</span>
            <div className="group">
              <button
                onClick={decFont}
                aria-label={t("הקטנת טקסט", "Decrease text")}
              >
                A−
              </button>
              <button
                onClick={incFont}
                aria-label={t("הגדלת טקסט", "Increase text")}
              >
                A+
              </button>
            </div>
          </div>

          <label className="row">
            <span>{t("ניגודיות גבוהה", "High contrast")}</span>
            <input
              type="checkbox"
              checked={prefs.contrast}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, contrast: e.target.checked }))
              }
            />
          </label>

          <label className="row">
            <span>{t("קו תחתון לקישורים", "Underline links")}</span>
            <input
              type="checkbox"
              checked={prefs.underlineLinks}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, underlineLinks: e.target.checked }))
              }
            />
          </label>

          <label className="row">
            <span>{t("הדגשת פוקוס במקלדת", "Highlight keyboard focus")}</span>
            <input
              type="checkbox"
              checked={prefs.focus}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, focus: e.target.checked }))
              }
            />
          </label>

          <button className="reset" onClick={resetAll}>
            {t("איפוס", "Reset")}
          </button>
        </div>
      )}
    </div>
  );
}
