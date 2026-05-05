"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Rental vans parked in Eastleigh ready for local and regional hire" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Self-drive hire vehicle on the road near Eastleigh town centre" }}
    />
  );
}
