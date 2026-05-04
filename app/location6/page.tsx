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
  const heroImage = { src: "/images/location6-image1.jpeg", alt: "White hire van driving on a quiet green road near Fair Oak" };
  const supportImage = { src: "/images/location6-image2.jpeg", alt: "Customer loading household items into a clean rental van near a home in Fair Oak" };
  const faqs = [
    { question: "Is delivery available in Fair Oak?", answer: "Yes, we can often arrange vehicle delivery and collection in Fair Oak and surrounding areas, depending on the booking." },
    { question: "What vehicles can I hire in Fair Oak?", answer: "We offer vans, cars, minibuses and trucks, subject to availability and the type of hire you need." },
    { question: "Can businesses hire vehicles in Fair Oak?", answer: "Yes, we support both personal and business bookings, including moving jobs, deliveries, events and ongoing transport needs." },
    { question: "Can I book a vehicle quickly?", answer: "Many hires can be arranged at short notice, although availability will depend on the vehicle category and timing." },
    { question: "Do you offer longer rentals in Fair Oak?", answer: "If you need a vehicle for an extended period, we can discuss longer hire options based on your requirements." },
  ];
  const trustCards = [
    { title: "Reliable vehicles", description: "A dependable fleet gives customers confidence for local driving, longer journeys and day-to-day business use.", icon: ShieldCheck },
    { title: "Straightforward to arrange", description: "We keep the booking process clear and practical, helping you get the vehicle you need without unnecessary hassle.", icon: Star },
    { title: "Support that fits around you", description: "Flexible service, including delivery and collection where possible, helps make hiring easier around Fair Oak.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans suited to moves, deliveries, collections and everyday transport jobs." },
    { value: "Van Hire", label: "Cars for short-term use, replacement travel and general day-to-day driving." },
    { value: "Minibus Hire", label: "Minibuses for group outings, events and organised transport needs." },
    { value: "Truck Hire", label: "Trucks for larger loads, heavier work and commercial transport tasks." },
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
    { icon: BadgePoundSterling, title: "Broad vehicle choice", description: "Choose the right size and type of vehicle for a home move, group trip, business task or temporary replacement.", detail: "That means fewer compromises and a better fit for the journey you have planned." },
    { icon: Clock3, title: "Hire terms that suit the job", description: "Flexible hire periods help whether you need transport for a single day, a busy week or a longer stretch.", detail: "We aim to keep booking practical rather than forcing customers into a one-size-fits-all arrangement." },
    { icon: CheckCircle2, title: "Less running around", description: "Delivery and collection options can save time and help you organise the hire around work, moving day or event timings.", detail: "It is a useful option when collecting a vehicle yourself would add extra pressure to the day." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Fair Oak Vehicle Hire for Work, Moving and Travel"}</h1>
                <p className="text-xl text-white">{"Reliable self-drive vans, cars, minibuses and trucks with flexible hire periods, maintained vehicles and helpful local support."}</p>
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
                  {"Easy booking support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book the right hire vehicle for Fair Oak"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Hiring in Fair Oak should be straightforward. We help match the vehicle to the job, explain the booking clearly, and arrange timings that work as smoothly as possible for local customers."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hires"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Maintained self-drive vehicles"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A service Fair Oak customers can rely on"}</h2>
            <p className="text-lg text-muted-foreground">{"When customers in Fair Oak compare vehicle hire options, they usually want reliability, useful choice and clear booking support. We keep our service focused on those basics."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle types available"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"From vans to trucks, we cover Fair Oak hire needs"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"We offer more than standard van hire in Fair Oak, giving customers access to a practical range of self-drive vehicles."}</p>
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
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Straightforward vehicle hire for Fair Oak residents and businesses"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Fair Oak sits in a useful position for drivers who need quick access towards Eastleigh, Winchester, Hedge End and the wider M3 and M27 routes. That makes it a practical place to hire a vehicle for both local jobs and longer trips."}</p>
            <p>{"Some bookings are for house moves and furniture collections, while others are for business transport, event travel or short-term cover when a regular vehicle is unavailable. We keep the service broad enough to support all of those needs."}</p>
            <p>{"Southern Van Hire offers vans, cars, minibuses and trucks, so customers are not limited to one vehicle type. If a smaller option will do the job, we can help with that, and if you need more carrying capacity, we can help there too."}</p>
            <p>{"What matters most is making the hire practical. That means clear communication, well-maintained vehicles and flexible arrangements that fit around real travel plans rather than creating more work for the customer."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"What makes booking easier"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Benefits of hiring with us in Fair Oak"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful reasons many local customers choose us when comparing vehicle hire in Fair Oak."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other locations close to Fair Oak"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"We also support customers in nearby communities around Eastleigh, Winchester and the villages that connect through this part of Hampshire."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Suitable for personal and business use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our rental range covers practical transport for households, trades, businesses, teams and organised travel."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Vehicles prepared for everyday use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"A modern, well-kept hire vehicle helps make collections, deliveries and longer journeys feel more manageable."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Built around real schedules"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible booking options make it easier to line the hire up with move dates, work schedules and event plans."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Fair Oak driving guide"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving and route-planning notes for getting the most from vehicle hire in and around Fair Oak."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Fair Oak sits in a practical spot for local vehicle hire, with Eastleigh Road and Fair Oak Road giving straightforward access in and out of the village for day trips, home moves and business collections. If you are collecting furniture, loading stock or heading out with a larger vehicle, it helps to plan around school-run periods and the busier village centre stretches."}</p>
            <p className="text-base leading-8 text-slate-600">{"For short local runs, the roads around Fair Oak are usually simple to navigate, but some residential sections can feel tighter in a longer van or truck. Trafford Road and Latham Road are useful reference points when planning local access, and taking a little extra care with parking and turning space can make collections and drop-offs much easier."}</p>
            <p className="text-base leading-8 text-slate-600">{"Many hires in Fair Oak are for practical jobs rather than long-distance travel, such as moving between homes, collecting bulky purchases or covering short-term business transport. Choosing the right size vehicle matters here, especially if you expect to use side streets, shared driveways or smaller unloading areas around the village."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your journey starts in Fair Oak and continues further across the Eastleigh area, it is worth checking your route before setting off, particularly if you are unfamiliar with a larger self-drive vehicle. A bit of advance planning for loading, parking and the quieter approach roads can save time and make the whole hire feel far more straightforward."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Helpful booking answers"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Fair Oak vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common questions about hiring a vehicle in Fair Oak, from booking times to available vehicle types."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Planning a Fair Oak vehicle hire?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Speak to Southern Van Hire for practical help choosing a vehicle and arranging flexible self-drive hire in Fair Oak."}</p>
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




