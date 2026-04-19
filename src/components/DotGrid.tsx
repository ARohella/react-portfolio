import React, { useEffect, useRef } from "react";

export default function DotGrid() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const parent = el.parentElement;
        if (!parent) return;

        const handleMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;
            const relY = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.setProperty("--dx", `${relX * 30}px`);
            el.style.setProperty("--dy", `${relY * 30}px`);
        };

        parent.addEventListener("mousemove", handleMove);
        return () => parent.removeEventListener("mousemove", handleMove);
    }, []);

    return <div className="dot-grid" ref={ref} aria-hidden="true" />;
}
