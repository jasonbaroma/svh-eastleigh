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
  const locationLinks = buildLocationLinks("Fair Oak");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "Rental van on a local road in Fair Oak" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Vehicle hire view serving Fair Oak and surrounding Hampshire routes" };
  const faqs = [
    { question: "Do you provide vehicle hire for Fair Oak?", answer: "Yes, we can help Fair Oak customers arrange self-drive vehicle hire, including vans, cars, minibuses and trucks depending on the requirement." },
    { question: "Which vehicles are most useful for Fair Oak home moves?", answer: "Yes, if you need more seats than a car provides, a self-drive minibus can be a practical option for group travel." },
    { question: "Can Fair Oak businesses book rental vehicles as needed?", answer: "Many can. We offer flexible rental periods depending on the vehicle type and your planned use." },
    { question: "Is short-term hire available in Fair Oak?", answer: "In many cases, yes. Delivery and collection options can often be arranged to make the booking easier to manage." },
    { question: "How do I choose between a car, van or larger vehicle?", answer: "We can guide you based on passenger numbers, luggage, load dimensions and the type of route you expect to cover." },
  ];
  const trustCards = [
    { title: "Helpful, no-fuss service", description: "A straightforward rental service with practical support before, during and after your booking.", icon: ShieldCheck },
    { title: "Delivery and collection available", description: "Free delivery and collection helps save time when your day is already planned around moving, loading or travel.", icon: Star },
    { title: "Suitable for personal and business hire", description: "From private hire to regular business use, we can help arrange vehicles for short notice and planned bookings alike.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire in Fair Oak for moves, collections, deliveries and day-to-day carrying jobs." },
    { value: "Van Hire", label: "Car hire for everyday journeys, temporary replacement use and flexible travel." },
    { value: "Minibus Hire", label: "Minibus options for clubs, family travel and organised outings." },
    { value: "Truck Hire", label: "Truck hire for larger loads that need more capacity and working space." },
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
    { icon: BadgePoundSterling, title: "Good links without city-centre hassle", description: "Useful van sizes for Fair Oak home moves, garden projects, retail collection runs and small business work.", detail: "That makes it useful for local moves, business runs and collections that cross several nearby areas in one day." },
    { icon: Clock3, title: "A practical range of vehicle types", description: "You can choose a vehicle based on load size, passenger needs and trip length rather than making do with whatever is available.", detail: "That helps keep things efficient whether you need a car for temporary use or a van or truck for a larger transport task." },
    { icon: CheckCircle2, title: "Flexible around real plans", description: "Our booking approach is built around straightforward arrangements and flexible timescales.", detail: "That can be especially helpful for customers coordinating around home access, work schedules or changing collection times." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Flexible vehicle hire in Fair Oak"}</h1>
                <p className="text-xl text-white">{"Van, car, minibus and truck hire in Fair Oak with flexible booking, maintained vehicles and practical local support."}</p>
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
                  {"Easy booking for Fair Oak"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle booking in Fair Oak"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"We keep Fair Oak vehicle hire clear and practical, helping you book the right van, car, minibus or truck for the journey with flexible arrangements that suit real schedules."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive options"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Useful for home and business"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A reliable choice for Fair Oak hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Fair Oak customers value a dependable service, maintained vehicles and flexible hire that works for both home and business use."}</p>
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
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle types available in Fair Oak"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Fair Oak customers can hire vans, cars, minibuses and trucks for everyday transport, one-off jobs and ongoing business support."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Fair Oak hire support"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical rental vehicles for Fair Oak"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Fair Oak is a busy residential area with regular demand for practical vehicle hire, from moving furniture and handling DIY projects to covering extra transport for family and work commitments. Southern Van Hire gives Fair Oak customers access to a broad fleet without making the process complicated."}</p>
            <p>{"A van is often the first choice for local jobs around Fair Oak, but there are plenty of situations where a car, minibus or truck is the better fit. That might mean a temporary replacement vehicle, group travel for an event or a larger vehicle for more demanding loads."}</p>
            <p>{"For customers in Fair Oak, that flexibility is especially useful when plans change. You might need a compact van for a local furniture collection one day, then a larger vehicle for a full move, exhibition load or business run the next, without making the process more complicated than it needs to be."}</p>
            <p>{"We aim to offer Fair Oak customers practical availability, helpful guidance and flexible rental periods rather than overcomplicated options. The result is vehicle hire that feels useful from the moment you book it."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Benefits for Fair Oak customers"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why hire a vehicle in Fair Oak with us"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Straightforward vehicle hire for Fair Oak residents, local firms and anyone needing extra transport for a day, a week or longer."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Places served around Fair Oak"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If you are based in Fair Oak, we also cover surrounding areas that are useful for local moves, business travel, and one-off transport needs. Browse nearby locations around Fair Oak to find the most convenient hire point for your journey."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"A vehicle for different kinds of work"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical cars, vans, minibuses and trucks for short jobs, planned trips or longer business use."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Maintained vehicles you can rely on"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our hire vehicles are prepared to stay dependable and straightforward to use, whether you are moving goods or carrying passengers."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible hire that fits your plans"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We keep booking flexible so you can arrange a rental vehicle for a day, a week or a longer period when needed."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and hire guidance for Fair Oak"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local route notes for collecting, loading and using a hire vehicle in and around Fair Oak."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Fair Oak works well for local vehicle hire when you need straightforward access into Eastleigh and the wider Hampshire area. Summerlands Road and nearby residential streets are often easier to manage with a smaller van or car, while larger vehicles benefit from planning your loading point before setting off."}</p>
            <p className="text-base leading-8 text-slate-600">{"Botley Road is one of the more practical routes for getting in and out of Fair Oak, especially if you are heading toward neighbouring towns or linking into wider routes across the borough. If you are collecting furniture, moving household items or making trade calls, it helps to time journeys outside the busier school-run periods."}</p>
            <p className="text-base leading-8 text-slate-600">{"For jobs around the village, roads such as Durley Road and Fair Oak Road can be useful depending on which side of Fair Oak you need to reach first. When hiring a van, truck or minibus, checking turning space, parking room and any tighter residential sections before arrival can save time and hassle."}</p>
            <p className="text-base leading-8 text-slate-600">{"Many Fair Oak hires are for home moves, bulky purchases, event transport and short business runs, so choosing the right size vehicle matters. If your journey starts locally but continues farther afield, it is usually worth planning your fuel stop, loading order and main route before leaving so the day runs more smoothly."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Fair Oak hire questions"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Fair Oak vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Helpful answers for customers comparing vehicle hire options in Fair Oak."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Arrange Fair Oak vehicle hire"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Speak to Southern Van Hire about a suitable vehicle for your Fair Oak move, delivery run, family trip or business booking."}</p>
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




