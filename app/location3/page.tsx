"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
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

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Hedge End");
  const heroImage = { src: "/images/location3-image1.jpeg", alt: "Hire vehicle near commercial and retail routes in Hedge End" };
  const supportImage = { src: "/images/location3-image2.jpeg", alt: "Self-drive rental vehicle serving Hedge End road links" };
  const faqs = [
    { question: "Can I arrange vehicle hire in Totton at short notice?", answer: "Yes, subject to availability. We offer flexible hire periods, so short-notice bookings can often be arranged for Totton customers." },
    { question: "Do you supply rental vehicles for business use in Totton?", answer: "Yes. We hire vehicles for both personal and business use, including short-term cover and longer planned bookings." },
    { question: "How do I know which hire vehicle is right for my trip?", answer: "It depends on passenger numbers, luggage and journey type. We can help you choose between cars, vans, minibuses and trucks based on what you need to carry." },
    { question: "Is delivery and collection available in Totton?", answer: "Free delivery and collection is available in many cases, which can make hiring more convenient around Totton and nearby areas." },
    { question: "Can I hire a vehicle for more than a few days?", answer: "Yes, longer rentals can usually be arranged. They are useful for extended projects, temporary transport needs or business support." },
  ];
  const trustCards = [
    { title: "Useful choice across the fleet", description: "A practical range of vehicles means you can book for private use, business work or group travel without overcomplicating it.", icon: ShieldCheck },
    { title: "Prepared for real use", description: "Vehicles are kept maintained and ready for the kind of everyday work customers actually hire them for.", icon: Star },
    { title: "Dependable from booking to return", description: "Flexible booking and a straightforward service help Totton customers get on the road with less delay.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Practical vans for moves, collections, deliveries and general self-drive jobs." },
    { value: "Van Hire", label: "Comfortable cars for local travel, temporary replacement use and longer journeys." },
    { value: "Minibus Hire", label: "Minibuses for group outings, family events, airport runs and organised travel." },
    { value: "Truck Hire", label: "Trucks for heavier loads, site work and larger commercial transport requirements." },
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
    { icon: BadgePoundSterling, title: "Broad fleet choice", description: "Vehicle options for moving house, business runs, airport transfers, events and day-to-day transport needs.", detail: "It is easier to book the right size vehicle when your plans are clear and your route changes from local roads to motorway travel." },
    { icon: Clock3, title: "Short and longer hire periods", description: "Flexible rental periods make it easier to hire for a quick job or keep a vehicle longer when plans develop.", detail: "That suits customers in Totton who may need a van for a weekend move, a car for temporary use or a truck for scheduled work." },
    { icon: CheckCircle2, title: "Straightforward support", description: "A practical service approach helps keep bookings straightforward from first enquiry to return or collection.", detail: "For business users, that can mean less downtime. For private users, it simply means fewer complications on a busy day." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle hire made easy in Hedge End"}</h1>
                <p className="text-xl text-white">{"Practical self-drive van, car, minibus and truck hire in Hedge End with flexible rental periods and dependable support."}</p>
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
                  {"Flexible local vehicle hire"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book a hire vehicle in Hedge End with less hassle"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"From quick local hires to longer bookings, we help Hedge End customers arrange suitable vans, cars, minibuses and trucks with clear, straightforward support."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Cars, vans, minibuses and trucks"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable Hedge End hire service"}</h2>
            <p className="text-lg text-muted-foreground">{"Hedge End customers use Southern Van Hire for maintained vehicles, broad fleet choice and practical service that fits around real transport needs."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="flex h-full flex-col border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 flex min-h-[5.5rem] w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"What you can hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles available in Hedge End"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Hedge End customers can choose from practical vans, everyday cars, group travel minibuses and larger trucks for heavier transport needs."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why customers choose us"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Smart vehicle hire for Hedge End customers"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Hedge End is one of the most practical places in the area for vehicle hire, with fast access to major roads, retail destinations and business parks. That makes it a strong location for customers who need transport that can handle anything from a single collection run to a full day of deliveries."}</p>
            <p>{"Southern Van Hire supports Hedge End with a fleet that goes beyond vans alone. Cars can help with temporary travel needs, minibuses suit group journeys and trucks are useful when the load is heavier or more demanding. The goal is to provide a vehicle that genuinely matches the work ahead."}</p>
            <p>{"Because many Hedge End hires involve busy schedules, we keep the service practical. Maintained vehicles, flexible hire periods and straightforward guidance all help reduce delays and confusion when time matters."}</p>
            <p>{"Whether you are based near the retail parks, in surrounding residential areas or supporting a local business operation, hiring a vehicle in Hedge End should feel simple, useful and dependable. That is the standard we aim for."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why it works"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"What makes our Hedge End hire service useful"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Hedge End customers can book practical vehicles for shopping runs, house moves, business transport and longer journeys across Hampshire and beyond."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby areas to Hedge End"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If your plans take you beyond Hedge End, we also cover surrounding places that are commonly linked by local moves, deliveries and business trips."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Built around real travel needs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We supply hire vehicles for everyday transport, larger one-off jobs and planned commercial use across Totton."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Different vehicle sizes available"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"From compact cars to larger trucks, the range is designed to help customers book the right vehicle instead of making do with the wrong one."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Simple booking support"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our team keeps the process clear and practical, with support on booking length, vehicle type and collection or delivery options."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Local driving tips for Hedge End"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for getting around Hedge End and planning a smooth self-drive hire."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hedge End is a practical place to start a hire if you need to move around the wider Eastleigh and south Hampshire area without heading straight into heavier city traffic. For local jobs, it suits short runs for furniture collection, home moves, trade materials and business deliveries, with easy access to the main local route network from the town."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are planning a longer journey, it is worth setting your route before collection so you can get onto the main roads quickly and avoid unnecessary time through residential sections. That is especially useful when driving a larger van, minibus or truck for the first time, as some parts of Hedge End are easier to navigate once you are clear of the busier local shopping and school traffic periods."}</p>
            <p className="text-base leading-8 text-slate-600">{"For drivers covering a full day of work, a nearby stop such as Broad Oak Service Station can be useful for a quick pause before continuing on to the next job. When hiring for deliveries or multiple drop-offs, planning fuel, breaks and unloading points in advance can make the day much smoother, particularly if you are working to time slots."}</p>
            <p className="text-base leading-8 text-slate-600">{"Hedge End also works well as a base for mixed personal and business use, whether you are collecting stock, transporting equipment or arranging extra seats for group travel. If you are unsure which vehicle will be easiest for your route, load and parking needs, Southern Van Hire can help you choose something suitable without making the booking process complicated."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Totton hire help"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hedge End vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to common questions about hiring vans, cars, minibuses and trucks in Hedge End."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Ready to book Hedge End vehicle hire?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Tell us what you need to move or where you need to go, and we will help you find a suitable hire vehicle in Hedge End."}</p>
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




