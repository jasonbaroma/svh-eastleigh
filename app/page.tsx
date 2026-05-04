"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Clean fleet of hire vans and a car parked at a tidy vehicle hire depot in Eastleigh" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Customer receiving keys during a practical van hire handover beside a clean rental vehicle" }}
    />
  );
}
