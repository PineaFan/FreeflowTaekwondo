"use client";

import { type ReactNode, useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type Place = {
    id: string;
    name: string;
    address?: string;
    lat: number;
    lng: number;
    icon?: ReactNode;
};

type LatLngLiteral = { lat: number; lng: number };
type BoundsLiteral = {
    north: number;
    south: number;
    east: number;
    west: number;
};
type MapController = {
    setCenter: (center: LatLngLiteral) => void;
    setZoom: (zoom: number) => void;
    fitBounds: (bounds: BoundsLiteral, padding: number) => void;
};

function FitBounds({ places }: { places: Place[] }) {
    const map = useMap() as unknown as MapController | null;
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    useEffect(() => {
        if (!map || places.length === 0) return;
        if (places.length === 1) {
            map.setCenter(places[0]);
            map.setZoom(16);
            return;
        }
        const lats = places.map((p) => p.lat);
        const lngs = places.map((p) => p.lng);
        const bounds: BoundsLiteral = {
            north: Math.max(...lats),
            south: Math.min(...lats),
            east: Math.max(...lngs),
            west: Math.min(...lngs)
        };
        map.fitBounds(bounds, windowWidth / 10);
    }, [map, places, windowWidth]);
    return null;
}

const glass = "bg-background/50 backdrop-blur-md backdrop-saturate-150";

export default function GoogleSatelliteMap({ places }: { places: Place[] }) {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <Map
                style={{ width: "100%", height: 500 }}
                defaultCenter={{ lat: 51.5055, lng: -0.0754 }}
                defaultZoom={12}
                mapId="FreeflowTaekwondo"
                mapTypeId="satellite"
                gestureHandling="greedy"
                disableDefaultUI
                clickableIcons={false}
            >
                {places.map((p, index) => (
                    <AdvancedMarker position={p} title={p.address ?? p.name} key={p.id} zIndex={index + 1}>
                        <div className="group flex origin-bottom cursor-pointer flex-col items-center text-foreground transition-transform hover:scale-105">
                            <div
                                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border/50 px-3 py-1.5 text-xs font-semibold leading-none shadow-lg ${glass}`}
                            >
                                <span className="text-base leading-none">{p.icon ?? "📍"}</span>
                                <span>{p.name}</span>
                            </div>

                            <div
                                aria-hidden="true"
                                className={`-mt-px h-2 w-3 ${glass}`}
                                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                            />
                        </div>
                    </AdvancedMarker>
                ))}
                <FitBounds places={places} />
            </Map>
        </APIProvider>
    );
}

export function DirectionsButton({
    place,
    variant,
    children
}: {
    place: Place;
    variant: "text" | "button";
    children?: ReactNode;
}) {
    const [apple, setApple] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent;
        const isMac = /Macintosh|Mac OS X/.test(ua);
        const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS|Edg/.test(ua);
        setApple(isMac || isSafari);
    }, []);

    const href = apple
        ? `https://maps.apple.com/place?coordinate=${place.lat},${place.lng}&name=${encodeURIComponent(place.name)}`
        : `https://www.google.com/maps/search/?api=1&query=${place.lat}%2C${place.lng}`;

    const className = variant === "text" ? "flex items-center gap-1 text-blue-600 hover:underline" : "flex items-center gap-2";

    const link = (
        <Link href={href} target="_blank" rel="noreferrer">
            <span className={className}>
                {children ?? (
                    <>
                        Open in {apple ? "Apple" : "Google"} Maps <ExternalLinkIcon aria-hidden="true" size={14} />
                    </>
                )}
            </span>
        </Link>
    );

    return variant === "text" ? (
        link
    ) : (
        <Button variant="secondary" size="lg">
            {link}
        </Button>
    );
}
