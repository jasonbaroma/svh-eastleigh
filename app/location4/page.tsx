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
  const heroImage = { src: "/images/location4-image1.jpeg", alt: "White rental van driving on a main road near retail and business park areas in Hedge End" };
  const supportImage = { src: "/images/location4-image2.jpeg", alt: "Small business user unloading items from a hire van in a commercial area in Hedge End" };
  const faqs = [
    { question: "What kinds of vehicles can I hire in Botley?", answer: "Yes, Botley customers can book a range of vehicle types including cars, vans, minibuses and trucks, subject to availability." },
    { question: "Can I hire for just a short period in Botley?", answer: "Many hires can be arranged for a single day, while longer rentals are also available if you need transport for more time." },
    { question: "Is Botley vehicle hire suitable for business use?", answer: "Yes, business customers in Botley often hire vehicles for deliveries, temporary cover, project work and added fleet support." },
    { question: "Do you offer delivery and collection around Botley?", answer: "In many cases, yes. Delivery and collection can help make the process easier depending on the booking and vehicle type." },
    { question: "Can I book a larger vehicle for heavier jobs in Botley?", answer: "Larger loads, moving jobs, event equipment and commercial transport often call for bigger vehicles, and we can help you choose a suitable option." },
  ];
  const trustCards = [
    { title: "Broad rental choice", description: "Botley customers can access a wide fleet built around practical transport needs rather than one-size-fits-all hire.", icon: ShieldCheck },
    { title: "Ready for the road", description: "Vehicles are maintained and prepared to give dependable support for local and longer-distance travel.", icon: Star },
    { title: "Support that stays practical", description: "Our service is designed to be helpful, flexible and easy to arrange for home and business use alike.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire for moves, collections, trades and everyday transport jobs." },
    { value: "Van Hire", label: "Car rental for local journeys, business travel and temporary replacement use." },
    { value: "Minibus Hire", label: "Minibus hire for groups heading to events, outings and organised travel." },
    { value: "Truck Hire", label: "Truck hire for larger payloads, site work and heavier commercial tasks." },
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
    { icon: BadgePoundSterling, title: "More suitable vehicle choice", description: "Botley customers can choose from a wide range of vehicle types for domestic, commercial and group travel needs.", detail: "That means you can book something suitable for the route and the job rather than settling for whatever is closest in size." },
    { icon: Clock3, title: "Hire length to match your plans", description: "Flexible rental periods help if you need transport for a day, a weekend, a full week or a longer booking.", detail: "This is useful for one-off moves, event planning, temporary vehicle cover and ongoing business work around Botley." },
    { icon: CheckCircle2, title: "A more convenient rental process", description: "Practical delivery and collection options can save time and reduce the extra travel involved in arranging a rental.", detail: "It is especially helpful when you are loading from home, coordinating staff or working to a tight schedule." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Flexible Vehicle Hire in Hedge End"}</h1>
                <p className="text-xl text-white">{"Self-drive cars, vans, minibuses and trucks for local moves, business work, deliveries and planned trips around South Hampshire."}</p>
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
                  {"Simple booking, local support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Easy vehicle booking for Botley"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"From short local hires to longer bookings, we help Botley customers arrange a suitable vehicle without unnecessary delays. Just tell us what you need and we will guide you through the options."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Well-maintained rental fleet"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive hire"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable hire service for Botley"}</h2>
            <p className="text-lg text-muted-foreground">{"In Botley, we focus on sensible vehicle choice, reliable preparation and straightforward customer support from booking through to return."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle options"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles available in Botley"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Our Botley hire range covers everyday transport through to larger commercial vehicle needs, all with a practical self-drive approach."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Reliable local hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle rental in Botley made practical"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides practical vehicle hire in Botley for private customers, trades, businesses and group travel. Whether you need a van for moving items, a car for temporary transport, a minibus for a planned trip or a truck for larger loads, we aim to keep everything simple and useful."}</p>
            <p>{"Botley is well placed between Eastleigh, Hedge End and the M27 corridor, so local customers often need a vehicle that can handle both village access and quicker onward travel. Choosing the right size can make a big difference, especially if you are collecting stock, moving furniture or working across several stops in one day."}</p>
            <p>{"We focus on maintained vehicles, flexible hire terms and straightforward support. That makes it easier to arrange transport around the time you actually need it, whether that is a one-day job, a weekend booking or a longer rental for business use."}</p>
            <p>{"Botley customers also benefit from the wider Southern Van Hire service model, including free delivery and collection where available and a broad range of self-drive vehicles. The aim is dependable transport without unnecessary hassle."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Useful advantages"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"What makes Botley vehicle hire easier"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A few solid reasons local customers use Southern Van Hire when they need a reliable self-drive vehicle in Botley."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby vehicle hire areas around Botley"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"We also cover surrounding villages and nearby towns, helping customers book a vehicle from Botley or another practical local area."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Vehicle choice that suits real use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"From compact cars to larger transport vehicles, our fleet gives Botley customers useful options for a wide range of journeys and jobs."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Dependable vehicles for everyday hire"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our rental vehicles are prepared for reliable performance, helping you get on with the day without unnecessary hold-ups."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible rental support"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We keep booking flexible so you can arrange a vehicle for short-term use, longer periods or changing business requirements."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around Hedge End"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving pointers for collecting, loading and travelling from Hedge End with a hire vehicle."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hedge End works well for vehicle hire because you can quickly join the wider Eastleigh and Southampton road network without needing to drive through the busiest city-centre streets. That makes it practical for home moves, trade jobs, furniture collection and short business runs where a straightforward start to the journey matters."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are planning a longer day on the road, it is worth sorting fuel, screen wash and basic checks before heading out. Around Hedge End there are useful stop-off options close by, including Broad Oak Service Station, which can be handy when you want to get organised before a local run or the trip back at the end of hire."}</p>
            <p className="text-base leading-8 text-slate-600">{"For drivers spending the day between retail areas, housing estates and business premises, timing can make a real difference. Early collection or an off-peak start is often the easiest way to avoid slower traffic on main local routes, especially if you are using a larger van, minibus or truck and want easier parking and loading."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your vehicle needs a quick clean before return, there are practical options in the wider area such as West End Service Station Carwash. In general, Hedge End is a convenient base for self-drive hire because it gives you a good balance of local access and onward routes, whether the job keeps you nearby or takes you further across Hampshire."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Need to know"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Botley vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to a few common questions about hiring a vehicle in Botley."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book a Botley hire vehicle with confidence"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you need a car, van, minibus or truck in Botley, we can help you arrange a practical hire that suits your route, timing and budget."}</p>
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




