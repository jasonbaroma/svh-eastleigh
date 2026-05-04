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
  const locationLinks = buildLocationLinks("Bursledon");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "White hire van driving along a tidy road near the riverside area in Bursledon" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Customer and staff member checking a hire van before collection in Bursledon" };
  const faqs = [
    { question: "Can I book a hire vehicle in Bursledon?", answer: "Yes, we can help arrange vehicle hire for Bursledon customers for both personal and business use, subject to availability. Whether you need a van for a move or a car for temporary transport, we will guide you to the right option." },
    { question: "Do you provide delivery and collection in Bursledon?", answer: "In many cases, yes. Delivery and collection can often be arranged in Bursledon depending on the type of vehicle and the length of hire, which helps keep booking straightforward." },
    { question: "What vehicles are available to hire in Bursledon?", answer: "Our available range includes vans, cars, minibuses and trucks. If you are booking from Bursledon, we can talk through passenger space, load length and general suitability before you confirm." },
    { question: "Can I get a van for a house move in Bursledon?", answer: "Yes, businesses can hire vehicles for deliveries, temporary fleet support, staff travel and site work." },
    { question: "Do you offer longer vehicle hire periods in Bursledon?", answer: "Think about load size, number of passengers, route type and parking or access at the destination before choosing." },
  ];
  const trustCards = [
    { title: "Maintained for the job", description: "Vehicles are prepared for dependable everyday use, from short local trips to longer bookings.", icon: ShieldCheck },
    { title: "Convenient local service", description: "Free delivery and collection helps keep hiring simple for homes, businesses and busy schedules.", icon: Star },
    { title: "Broad vehicle choice", description: "From cars and vans to minibuses and trucks, we help match the vehicle to the journey.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire for removals, deliveries and larger collection jobs from Fair Oak." },
    { value: "Van Hire", label: "Car hire for routine travel, local appointments and business journeys." },
    { value: "Minibus Hire", label: "Minibus hire for group days out, planned events and shared travel." },
    { value: "Truck Hire", label: "Truck hire for heavier transport tasks and commercial load requirements." },
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
    { icon: BadgePoundSterling, title: "Convenient for local and regional travel", description: "Fair Oak offers useful access towards Eastleigh, Bishopstoke and the wider Hampshire road network.", detail: "That makes it practical for local errands, removals, business trips and longer journeys across the region." },
    { icon: Clock3, title: "More suitable vehicle options", description: "A wider vehicle choice helps if your plans involve passengers, bulky loads or mixed journey types.", detail: "Hiring the right vehicle can make a noticeable difference when dealing with village roads, collection points or full-day travel." },
    { icon: CheckCircle2, title: "Hire periods that work for you", description: "Flexible booking helps when jobs change, projects overrun or travel dates move.", detail: "That is especially useful for house moves, event transport and short-term business cover in and around Fair Oak." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable Vehicle Hire in Bursledon"}</h1>
                <p className="text-xl text-white">{"Flexible self-drive van, car, minibus and truck hire for Fair Oak with maintained vehicles and service that keeps things simple."}</p>
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
                  {"Straightforward hire for Fair Oak"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book the right vehicle for Fair Oak"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"We make it easier for Fair Oak customers to book a suitable van, car, minibus or truck without unnecessary back and forth. Just let us know the type of work or journey involved and we will help with a practical hire option."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive arrangements"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Maintained vehicles across categories"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Straightforward hire with dependable support"}</h2>
            <p className="text-lg text-muted-foreground">{"We focus on practical service, well-kept vehicles and flexible hire arrangements that work for both private and business customers in Hedge End."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Available vehicle types"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"From vans to trucks in Fair Oak"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"A flexible self-drive range gives Fair Oak customers practical choices for different loads, passenger numbers and trip types."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Serving Fair Oak"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical vehicle rental in Fair Oak"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides practical self-drive vehicle hire for customers in Fair Oak, covering everything from local moving jobs to business travel and group transport. We focus on straightforward booking, dependable vehicles and flexible hire periods."}</p>
            <p>{"Fair Oak is a useful area for vehicle hire because it combines residential demand with easy onward access to Eastleigh, Winchester and other parts of Hampshire. Customers often hire for furniture pickups, home improvement projects, family trips and temporary business needs."}</p>
            <p>{"Van hire is a common choice in Fair Oak, especially for moving larger items or handling jobs that would be difficult in a standard car. Alongside vans, we also offer cars, minibuses and trucks so customers can choose a more suitable vehicle for the journey ahead."}</p>
            <p>{"Our service is designed to be practical rather than complicated. With maintained vehicles and support for both personal and business bookings, Fair Oak customers can arrange transport with confidence and get on with the job."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Fair Oak benefits"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire that suits Fair Oak travel"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful advantages for customers arranging self-drive hire in Fair Oak and nearby routes."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"More hire coverage near Hedge End"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Hedge End is not quite the right pickup area, we also cover other nearby parts of South Hampshire for practical, flexible vehicle hire."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"A vehicle for every type of trip"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical cars, vans, minibuses and trucks to match the job, whether you need something compact for local driving or more space for heavier loads."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Well-kept vehicles you can rely on"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our hire vehicles are prepared for day-to-day reliability, giving private and business customers a straightforward option without unnecessary complications."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible hire that fits around you"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Short hires, longer bookings and business use can all be arranged with clear, practical support so you can get moving with the right vehicle."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and hire tips for Bursledon"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local guidance for collecting, loading and driving a hire vehicle around Bursledon and the surrounding route network."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Bursledon works well for both local and longer trips because it sits between village roads and bigger route links. If you are starting out near School Road, Station Road or Portsmouth Road, it helps to allow a little extra time for tighter residential stretches, parked cars and busier junctions, especially when collecting furniture, making timed deliveries or moving house."}</p>
            <p className="text-base leading-8 text-slate-600">{"For straightforward access across the area, Portsmouth Road is one of the more useful corridors, while Botley Road can be a practical link when you are heading out of Bursledon with a larger vehicle. Drivers hiring a van or truck often find it easier to load first, set the sat nav before moving off, and plan a route that avoids unnecessary turns through smaller side roads such as Lands End Road where space can feel more limited."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your journey starts close to the centre of Bursledon, think about the purpose of the hire before you travel. A short wheelbase van can be simpler for local collections and smaller access points, while a larger van, minibus or truck may suit exhibition kit, business transport or bulk loads better once you are out on the main roads. That small bit of planning can make a big difference to journey time and unloading."}</p>
            <p className="text-base leading-8 text-slate-600">{"For day hires in Bursledon, it is worth planning your stops in advance rather than relying on last-minute pull-ins. Keep an eye on local parking conditions, choose wider places for reversing and loading, and use the main local routes when possible for an easier drive. If you are travelling beyond Bursledon, a well-planned start through the village roads usually makes the rest of the trip much more straightforward."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Questions answered"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Fair Oak hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"A few practical questions customers often ask before booking vehicle hire in Fair Oak."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Looking for Fair Oak vehicle hire?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Arrange a suitable self-drive vehicle for Fair Oak with Southern Van Hire and keep your plans moving."}</p>
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




