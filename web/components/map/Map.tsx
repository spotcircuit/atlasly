"use client";

import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

// Lazy import to avoid SSR issues
let mapboxgl: typeof import('mapbox-gl') | null = null;

export type Marker = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

type Props = {
  markers?: Marker[];
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function Map({ markers = [], center, zoom = 10, className, style }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!containerRef.current || mapRef.current) return;
      if (!mapboxgl) mapboxgl = await import('mapbox-gl');

      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
      if (!token) {
        // eslint-disable-next-line no-console
        console.warn('Mapbox token missing (NEXT_PUBLIC_MAPBOX_TOKEN)');
        return;
      }
      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: containerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [center?.lng ?? -77.0365, center?.lat ?? 38.8951],
        zoom,
      });
      if (cancelled) return;
      mapRef.current = map;

      map.on('load', () => {
        markers.forEach((m) => {
          const el = document.createElement('div');
          el.className = 'mapbox-marker';
          el.style.width = '10px';
          el.style.height = '10px';
          el.style.borderRadius = '50%';
          el.style.background = '#D5BCAE';
          new mapboxgl!.Marker(el).setLngLat([m.lng, m.lat]).setPopup(new mapboxgl!.Popup().setText(m.name)).addTo(map);
        });
      });
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [markers, center, zoom]);

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '400px', ...style }} />;
}
