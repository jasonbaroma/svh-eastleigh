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
  const locationLinks = buildLocationLinks("Bishopstoke");
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "Hire van parked near residential streets in Bishopstoke" };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "Vehicle hire scene close to Bishopstoke with practical local road access" };
  const faqs = [
    { question: "Can I arrange vehicle hire in Bishopstoke?", answer: "Yes, we can help arrange vehicle hire for Bishopstoke customers, including vans, cars, minibuses and trucks subject to availability and booking details." },
    { question: "What sort of van hire is popular in Bishopstoke?", answer: "In many cases, yes. Flexible rental periods can often be arranged if you need the vehicle for longer than a single day." },
    { question: "Can I hire a vehicle in Bishopstoke for business use?", answer: "Cars, vans, minibuses and trucks may all be available depending on the type of booking and current fleet scheduling." },
    { question: "Do you offer flexible rental periods in Bishopstoke?", answer: "Yes, many business customers use hire vehicles for temporary demand, deliveries, site work or short-term cover." },
    { question: "Can you help me pick the right vehicle size?", answer: "If you are unsure, we can talk through load size, passenger numbers and journey type to help you choose something practical." },
  ];
  const trustCards = [
    { title: "Maintained rental fleet", description: "Vehicles are prepared for dependable use, whether you need transport for a short local job or a longer journey.", icon: ShieldCheck },
    { title: "Straightforward service", description: "We keep the booking process clear and practical so customers can arrange the right vehicle without unnecessary complication.", icon: Star },
    { title: "Useful for home and work", description: "From personal moves to business transport, our hire options are built around real day-to-day requirements.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire in Bishopstoke for moving jobs, collections and everyday transport tasks." },
    { value: "Van Hire", label: "Car hire for local appointments, temporary cover and everyday travel needs." },
    { value: "Minibus Hire", label: "Minibus hire for family outings, club trips and organised group travel." },
    { value: "Truck Hire", label: "Truck hire for heavier loads and larger commercial transport requirements." },
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
    { icon: BadgePoundSterling, title: "Well placed for local travel", description: "A sensible range of vans for Bishopstoke house moves, furniture collection, tip runs and day-to-day transport jobs.", detail: "It suits furniture collections, house moves, trade work and local deliveries across the eastern side of Southampton." },
    { icon: Clock3, title: "Vehicles matched to the task", description: "A range of vehicle sizes helps you avoid booking more than you need.", detail: "From small vans and cars to minibuses and trucks, the choice is built around real transport jobs rather than one-size-fits-all hire." },
    { icon: CheckCircle2, title: "Flexible and simple to arrange", description: "Straightforward booking and practical support help keep the day moving.", detail: "That is useful when plans change, collection times shift or you need a hire period that fits around work or home commitments." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable vehicle hire in Bishopstoke"}</h1>
                <p className="text-xl text-white">{"Flexible van, car, minibus and truck hire for Bishopstoke with practical support, maintained vehicles and straightforward booking."}</p>
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
                  {"Straightforward Bishopstoke booking"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book vehicle hire in Bishopstoke without the runaround"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking vehicle hire in Bishopstoke should be simple. We help arrange the right van, car, minibus or truck for the job, with flexible hire periods and practical collection or delivery options where available."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Access to M27 routes"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible rental periods"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Why Bishopstoke customers rely on Southern Van Hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Bishopstoke customers choose us for maintained vehicles, sensible booking support and a broad fleet that covers personal hire and business use."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hire categories"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle hire choices in Bishopstoke"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From practical van hire to cars, minibuses and trucks, Bishopstoke customers can book vehicles that suit both personal and business use."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local hire support"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Dependable vehicle hire for Bishopstoke plans"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Bishopstoke customers often need a hire vehicle that is easy to arrange and practical to use, whether the job is a house move, a furniture collection or extra transport for work. Southern Van Hire keeps the process straightforward, with a wide choice of vans, cars, minibuses and trucks backed by flexible rental periods."}</p>
            <p>{"Many customers in Bishopstoke need a van for short local work, but we also supply cars for temporary transport, minibuses for group travel and trucks for heavier loads. The focus is always on matching the vehicle to the task so you are not paying for more space than you need or struggling with something too small."}</p>
            <p>{"For drivers in Bishopstoke, reliability matters just as much as price. That is why our vehicles are kept well maintained and ready for everyday self-drive use, with options that suit short local trips, longer motorway runs and more demanding business transport."}</p>
            <p>{"For Bishopstoke customers, the appeal is simple: dependable transport, sensible support and vehicle hire that fits around real plans rather than creating more admin. From a single day hire to longer arrangements, we keep the process practical from start to finish."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why Bishopstoke customers book with us"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Useful hire options for Bishopstoke journeys"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Practical vehicle hire choices for Bishopstoke drivers, local households and small businesses that need flexible transport without unnecessary hassle."}</p>
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
                  <Image
                    src={vehicle.src}
                    alt={vehicle.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby areas around Bishopstoke"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Bishopstoke is not your only stop, we also cover surrounding areas that are practical for local moves, deliveries and business travel."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"A sensible fit for the journey"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Different jobs need different types of hire vehicle. We help customers compare carrying space, passenger room and ease of driving before they book."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Short and longer hires available"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible rental periods can help if you only need transport for a short job or want cover for a longer stretch."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Practical service from booking to return"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Well-prepared rental vehicles and straightforward support make it easier to get moving without unnecessary delays."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around Bishopstoke"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving and planning notes for getting the most from a hire vehicle in and around Bishopstoke."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Bishopstoke works well for local vehicle hire because you can get in and out without dealing with the busier parts of Eastleigh straight away. For short runs, home moves or furniture collection, it helps to plan around the main local routes early in the day when roads are usually easier to manage in a larger vehicle."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are heading beyond the village, it is worth allowing a little extra time for joining the wider Eastleigh road network, especially if you are driving a van, minibus or truck for the first time. Taking a few minutes to check height, width and turning space before setting off can make local collections and drop-offs much smoother."}</p>
            <p className="text-base leading-8 text-slate-600">{"For fuel and quick driver prep, there is an Esso nearby, which is useful before returning a hire vehicle or setting off on a longer journey. There is also a nearby service station in the Eastleigh area, giving you a practical stop for refreshments, supplies or a short pause before getting back on the road."}</p>
            <p className="text-base leading-8 text-slate-600">{"Bishopstoke is a practical base for anything from a one-day van hire to longer business use, particularly if you need easy access to Eastleigh and the surrounding Hampshire area. Whether you are moving house, collecting stock or organising transport for a group, choosing the right size vehicle makes driving through local residential roads much more straightforward."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Bishopstoke vehicle hire FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Common questions about Bishopstoke hire"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Quick answers for customers booking a van, car, minibus or truck in Bishopstoke."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Need vehicle hire in Bishopstoke?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you need a hire vehicle in Bishopstoke, we can help you choose a practical option for local trips, longer runs and business use."}</p>
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




