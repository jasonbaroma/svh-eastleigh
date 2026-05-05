"use client";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import { slugifyLocation } from "@/lib/utils";
import {
  BadgePoundSterling,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const metadata = {
  alternates: {
    canonical: `/${slugifyLocation("Hamble-le-Rice")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Hamble-le-Rice");
  const heroImage = { src: "/images/location5-image1.jpeg", alt: "Hire van near Hamble-le-Rice waterfront and village area" };
  const supportImage = { src: "/images/location5-image2.jpeg", alt: "Rental vehicle on road through Hamble-le-Rice and surrounding peninsula routes" };
  const faqs = [
    { question: "Can you deliver a hire vehicle to Hamble-le-Rice?", answer: "Yes, delivery and collection can often be arranged depending on the booking and vehicle type." },
    { question: "Is Hamble-le-Rice hire available for both personal and business use?", answer: "Yes, we provide vehicles for personal use and for business customers needing flexible transport." },
    { question: "What type of van is best for moving furniture from Hamble?", answer: "A compact van is often enough for smaller moves, while larger loads may need a long wheelbase or Luton-style option." },
    { question: "Can I hire a minibus for a trip from Hamble-le-Rice?", answer: "In many cases, yes. Availability depends on the vehicle class and dates requested." },
    { question: "Do you offer longer-term vehicle hire in Hamble-le-Rice?", answer: "Yes, longer rentals can usually be arranged if you need a vehicle for an extended period." },
  ];
  const trustCards = [
    { title: "More than just van hire", description: "A practical mix of vans, cars, minibuses and trucks for local and longer-distance use.", icon: ShieldCheck },
    { title: "Well-kept rental fleet", description: "Vehicles are maintained and prepared for dependable self-drive use.", icon: Star },
    { title: "Support that stays practical", description: "Helpful service for one-off hires, repeat bookings and business transport needs.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans sized for moves, collections, deliveries and trade jobs around the peninsula." },
    { value: "Van Hire", label: "Cars for everyday travel, temporary replacement use and longer local journeys." },
    { value: "Minibus Hire", label: "Minibuses for family outings, club travel and airport or event transport." },
    { value: "Truck Hire", label: "Trucks for heavier loads, site work and larger transport requirements." },
  ];
  const vehicleCards = [
    { src: "/images/smallvan1.jpg", alt: "Small van hire vehicle", title: "Small Vans" },
    { src: "/images/mediumvan1.jpg", alt: "Medium van hire vehicle", title: "Medium Vans" },
    { src: "/images/largevan1.jpg", alt: "Large van hire vehicle", title: "Large Vans" },
    { src: "/images/lutonboxvan.jpg", alt: "Luton box van hire vehicle", title: "Box Van With Tail Lift" },
    { src: "/images/tippervan.jpg", alt: "Tipper van hire vehicle", title: "Tipper Van" },
    { src: "/images/dropsidevan1.jpg", alt: "Dropside van hire vehicle", title: "Dropside Van" },
    { src: "/images/12seaterminibushire.jpg", alt: "12 seater minibus hire vehicle", title: "Minibus Hire" },
    { src: "/images/7.5tonnecurtainsidehire.jpg", alt: "7.5 tonne curtainside truck hire vehicle", title: "Truck Hire" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Choice that suits the journey", description: "A wide hire range helps you choose by load size, passenger numbers and route type rather than compromising.", detail: "That is useful for everything from local furniture collection to longer motorway travel or scheduled commercial work." },
    { icon: Clock3, title: "Hire on terms that work", description: "Flexible booking makes it easier to arrange transport for changing plans, short-notice jobs or longer periods.", detail: "For Hamble-le-Rice customers, hiring a vehicle only when needed can make more sense than trying to manage limited parking or keeping a larger vehicle for occasional use." },
    { icon: CheckCircle2, title: "Simple and dependable service", description: "We keep the process practical, with clear advice and a service that aims to remove avoidable delays.", detail: "That means less time spent sorting logistics and more time getting on with the actual job or journey." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <Image
              src="/images/SouthernVanHireLogo.png"
              alt="Southern Van Hire"
              width={208}
              height={52}
              className="h-[3.25rem] w-auto"
            />
            <span className="text-[#00B395]">{mainLocationName}</span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <details className="group relative z-50">
              <summary className="inline-flex h-9 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
                <MapPin className="h-4 w-4" />
                Locations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-md border bg-white p-1 text-slate-900 shadow-lg">
                {locationLinks.map((location) => (
                  <Link key={location.href} href={location.href} className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100">
                    {location.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
              <a href={phoneHref} className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 pt-32 text-white">
        <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire in Hamble-le-Rice"}</h1>
                <p className="text-xl text-white">{"Reliable vehicle hire in Hamble-le-Rice with flexible rental periods, maintained vans, cars, minibuses and trucks, plus practical support for personal and business use."}</p>
                <Button size="lg" className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <Image src={supportImage.src} alt={supportImage.alt} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border border-[#00B395]/15 bg-[#eefcf8] shadow-[0_24px_60px_-24px_rgba(0,179,149,0.35)]">
            <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00B395]/25 bg-white px-3 py-1 text-sm font-medium text-[#00B395]">
                  <PhoneCall className="h-4 w-4" />
                  {"Practical local rental support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book vehicle hire for Hamble-le-Rice without the runaround"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Hiring in Hamble-le-Rice should be straightforward. We help arrange the right vehicle for short local jobs, business transport and longer bookings, with practical options that suit home and work use."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Flexible hire periods"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Delivery and collection available"}
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto" asChild>
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{"A dependable option for Hamble-le-Rice vehicle hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in Hamble-le-Rice choose us for straightforward booking, solid vehicle choice and service that works for real transport jobs rather than sales talk."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#00B395]">{item.title}</h3>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Our hire range"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle options available for Hamble-le-Rice bookings"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From marina-related jobs and home projects to group travel and business transport, we offer practical self-drive vehicles for a wide range of journeys in and out of Hamble-le-Rice."}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why local drivers book with us"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Hamble-le-Rice customers choose us"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Hamble-le-Rice customers often need a hire vehicle that fits around busy schedules, marina work, household jobs and trips in and out of the peninsula. We keep the process simple, with a wide choice of vans, cars, minibuses and trucks available for different kinds of transport needs."}</p>
            <p>{"For household jobs in Hamble-le-Rice, many customers want a straightforward vehicle for furniture collection, storage runs, garden projects or moving bulky items without relying on delivery slots. We keep the process practical, with flexible hire periods and clear advice on choosing the right size."}</p>
            <p>{"Business users in Hamble-le-Rice also come to us for dependable short-term transport, whether that means a van for tools and supplies, a car for travel, a minibus for group trips or a truck for heavier loads. The aim is simple: suitable vehicles, sensible support and no unnecessary complications."}</p>
            <p>{"When you need vehicle hire in Hamble-le-Rice, Southern Van Hire focuses on making the booking and collection process feel manageable from the start. With maintained vehicles and practical service, we help you get on the road with confidence for local journeys and longer trips alike."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Good reasons to book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why our hire service works for Hamble-le-Rice"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Hamble-le-Rice customers benefit from flexible vehicle hire that suits coastal living, marina-related travel, household jobs and wider trips across Hampshire."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]">
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                <p className="mt-6 text-base leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div key={vehicle.title} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={vehicle.src} alt={vehicle.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="min-h-[4rem] text-2xl font-bold tracking-tight text-slate-950">{vehicle.title}</h3>
                  <a href={phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]">
                    <PhoneCall className="h-4 w-4" />
                    <span>Reserve Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Nearby Locations"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other nearby places we cover around Hamble-le-Rice"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Hamble-le-Rice is not the most convenient pickup point for your journey, we also cover nearby areas around the lower Hamble and east Southampton side."}</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link key={location.href} href={location.href} className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10">
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Broad vehicle choice"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from everyday rental vehicles and larger transport options to match the job, trip length and load size."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Ready for real journeys"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our hire vehicles are prepared for practical use, helping you get on with the journey without unnecessary complications."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible booking options"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We support one-day bookings, weekend use, business rentals and longer hire periods when you need more flexibility."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and hire tips for Hamble-le-Rice"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for getting the right hire vehicle and planning smoother trips in and around Hamble-le-Rice."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hamble-le-Rice is well suited to practical vehicle hire when you need to move around a compact village layout and then head out to the wider Eastleigh and Southampton area. Local driving is often straightforward, but roads can feel narrower around residential stretches, so it helps to choose a vehicle size that suits the job rather than simply going larger."}</p>
            <p className="text-base leading-8 text-slate-600">{"For local pick-ups and returns, routes around Beaulieu Road, Baron Road and Coach Road are useful reference points when planning access. If you are collecting furniture, loading event kit or making marina-side deliveries, allow a little extra time for turning, parking and loading, especially at busier times of day and over weekends."}</p>
            <p className="text-base leading-8 text-slate-600">{"Many customers hiring in Hamble-le-Rice are balancing village access with longer outward journeys. A small van or car can be the simplest option for lighter loads and day trips, while a larger van or truck is often better for removals, trade materials or multi-stop work where cargo space matters more than tight local manoeuvring."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your journey starts or ends in Hamble-le-Rice, it is worth planning your loading point before you set off and checking where the vehicle will be left between stops. A little preparation goes a long way here, particularly if you are working near residential roads or carrying bulky items that need easy access in and out of the vehicle."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hamble hire FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Questions drivers ask about Hamble-le-Rice vehicle hire"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"A few common questions about arranging vehicle hire in and around Hamble-le-Rice."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details key={item.question} className="group border-b border-slate-200 last:border-b-0" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Need a hire vehicle in Hamble-le-Rice?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Tell us what you need to move and when you need to travel, and we will help you find a suitable van, car, minibus or truck for Hamble-le-Rice."}</p>
          <Button size="lg" className="bg-white text-[#00B395] hover:bg-gray-100" asChild>
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer id="contact" className="border-t bg-gray-900 px-6 py-12 text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Image
            src="/images/SouthernVanHireLogo.png"
            alt="Southern Van Hire"
            width={286}
            height={72}
            className="h-[4.55rem] w-auto"
          />
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-[#00B395]">{mainLocationName}</h4>
          </div>
          <p className="mt-4 max-w-md text-sm">{phoneDisplay}</p>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SVH {mainLocationName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




