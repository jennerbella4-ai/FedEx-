import TrackingInput from "@/components/TrackingInput";
import { Package, Clock, Shield, Globe } from "lucide-react";
import Image from "next/image";
import dropImg from "../public/drop.png";
import vanImg from "../public/van.png";
import storeImg from "../public/store.png";
import alertsImg from "../public/alerts.png";
import returnImg from "../public/return.png";
import whyShipImg from "../public/whyShip.jpg";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-fedex-purple/10 via-white to-fedex-orange/5">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Track Your <span className="text-fedex-purple">Shipment</span> in
              Real Time
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Educational courier tracking system built for portfolio
              demonstration. Enter a tracking number to see simulated shipment
              details.
            </p>

            <div className="mb-12">
              <TrackingInput />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-fedexBlue">
              <div className="text-center">
                <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                  <Image
                    src={dropImg}
                    alt="FedEx Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">DROP OOF A PACKAGE</p>
              </div>

              <div className="text-center">
                <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                  <Image
                    src={vanImg}
                    alt="Real-time Updates"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">REDIRECT A PACKAGE</p>
              </div>

              <div className="text-center">
                <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                  <Image
                    src={storeImg}
                    alt="Real-time Updates"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">STORE HOURS AND SERVICES</p>
              </div>

              <div className="text-center">
                <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                  <Image
                    src={alertsImg}
                    alt="Real-time Updates"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">SERVICE ALERTS</p>
              </div>

              <div className="text-center">
                <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                  <Image
                    src={returnImg}
                    alt="Real-time Updates"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">SERVICE ALERTS</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-grid-slate-100/40 pointer-events-none" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-normal text-white mb-6">
              Ship, manage, track, deliver
            </h1>

            <div className="mb-12">
              <TrackingInput />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto">
        <div className="text-center pt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-fedexBlue">
            <div className="text-center">
              <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                <Image
                  src={dropImg}
                  alt="FedEx Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">DROP OOF A PACKAGE</p>
            </div>

            <div className="text-center">
              <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                <Image
                  src={vanImg}
                  alt="Real-time Updates"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">REDIRECT A PACKAGE</p>
            </div>

            <div className="text-center">
              <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                <Image
                  src={storeImg}
                  alt="Real-time Updates"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">STORE HOURS AND SERVICES</p>
            </div>

            <div className="text-center">
              <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                <Image
                  src={alertsImg}
                  alt="Real-time Updates"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">SERVICE ALERTS</p>
            </div>

            <div className="text-center">
              <div className="w-25 h-25 flex items-center justify-center mx-auto mb-3">
                <Image
                  src={returnImg}
                  alt="Real-time Updates"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">SERVICE ALERTS</p>
            </div>
          </div>
        </div>

        <section className="bg-[#FAFAFA] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* IMAGE — top on mobile, right on desktop */}
              <div className="order-1 md:order-2">
                <Image
                  src={whyShipImg}
                  alt="Why ship with FedEx"
                  className="w-full aspect-square object-cover rounded-xl shadow-md"
                  priority
                />
              </div>

              {/* TEXT — below image on mobile, left on desktop */}
              <div className="order-2 md:order-1 space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Why ship with FedEx?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Innovative solutions for reliability & speed
                    </p>
                    <p className="text-gray-600">
                      Whether it's across states or worldwide, we prioritize the
                      secure and swift arrival of your shipments.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Premium shipping at professional rates
                    </p>
                    <p className="text-gray-600">
                      When you need reliable delivery and careful handling,
                      trust FedEx to get your items where they need to go on
                      time.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      We ship everywhere*
                    </p>
                    <p className="text-gray-600">
                      From major cities to remote locations, your goods can
                      reach worldwide.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      FedEx can ship for less than the Post Office
                    </p>
                    <p className="text-gray-600">
                      Two-day shipping, one flat rate.&nbsp;
                      <a
                        href="#"
                        className="text-fedexBlue font-medium underline hover:no-underline"
                      >
                        FedEx One Rate®
                      </a>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  *FedEx doesn't ship anywhere sanctioned by the U.S.
                  <br />
                  **Exclusions apply. Visit the FedEx One Rate page to learn
                  more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-20">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Get your business in gear for the new year
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="space-y-5">
              <Image
                src="/make.jpg"
                alt="Returns for business"
                width={727}
                height={463}
                className="rounded-lg object-cover"
              />

              <h5 className="text-lg text-gray-900">
                Make returns season simple
              </h5>

              <p className="text-gray-600">
                Give your customers the flexibility they expect with plenty of
                ways to send returns. No-box, no-label options, QR codes, and
                email labels keep returns fast and friction-free.
              </p>

              <a
                href="#"
                className="inline-block text-fedexBlue font-semibold hover:underline"
              >
                View returns options
              </a>
            </div>

            {/* Card 2 */}
            <div className="space-y-5">
              <Image
                src="/get.jpg"
                alt="FedEx rewards"
                width={727}
                height={463}
                className="rounded-lg object-cover"
              />

              <h5 className="text-lg text-gray-900">
                Get ready to reap rewards
              </h5>

              <p className="text-gray-600">
                Did you know FedEx has a loyalty program? With FedEx Rewards,
                you can earn gift cards from name-brand retailers when you ship.
                Get a $10 gift card with your first shipment after signup!
              </p>

              <a
                href="#"
                className="inline-block text-fedexBlue font-semibold hover:underline"
              >
                Open a free account
              </a>
            </div>

            {/* Card 3 */}
            <div className="space-y-5">
              <Image
                src="/find.jpg"
                alt="Tariffs support"
                width={727}
                height={463}
                className="rounded-lg object-cover"
              />

              <h5 className="text-lg font-medium text-gray-900">
                Find support for new regulations
              </h5>

              <p className="text-gray-600">
                Navigating tariffs and trade regulations? Do it with
                confidence—and 50+ years of FedEx expertise backing you. Plus,
                the FedEx Import Tool makes paying fees simpler for your
                customers.
              </p>

              <a
                href="#"
                className="inline-block text-fedexBlue font-semibold hover:underline"
              >
                Understand tariffs
              </a>
            </div>
          </div>
        </section>

        <section className="hidden lg:block max-w-7xl mx-auto px-4 py-16">
          <div className="bg-[#FAFAFA] rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 items-center">
              {/* Left: Content */}
              <div className="p-10 space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Find shipping supplies for just about anything
                </h4>

                <p className="text-gray-600">
                  From electronics and breakables to golf clubs and bikes, find
                  packaging that fits the bill—and the budget. Get boxes,
                  mailers, cushioning, and more to help protect your shipments.
                </p>

                <a
                  href="#"
                  className="inline-block text-fedexBlue font-semibold hover:underline"
                >
                  Shop supplies
                </a>
              </div>

              {/* Right: Image */}
              <div className="h-full">
                <Image
                  src="/supplies.jpg"
                  alt="Shipping supplies"
                  width={727}
                  height={463}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Ship, track, receive, and return—all on your terms
            </h2>

            {/* Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-20">
              <div className="md:col-span-4">
                <Image
                  src="/hand.jpg"
                  alt="FedEx Mobile App"
                  width={727}
                  height={463}
                  className="rounded-xl shadow-md"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Simple shipping is in hand
                </h4>
                <p className="text-gray-600 max-w-2xl">
                  With the FedEx® Mobile app, you can manage almost all your
                  shipping tasks right from your phone. Create or track
                  shipments, get QR codes, scan barcodes, and more.
                </p>
                <a
                  href="#"
                  className="inline-block text-fedexBlue font-semibold underline hover:no-underline"
                >
                  Download the app
                </a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-20">
              <div className="md:col-span-4">
                <Image
                  src="/app.jpg"
                  alt="Delivery Manager"
                  width={727}
                  height={463}
                  className="rounded-xl shadow-md"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Decide how and where your shipments arrive
                </h4>
                <p className="text-gray-600 max-w-2xl">
                  With FedEx Delivery Manager®, get more than notifications.
                  Redirect packages, sign remotely, and stay in control of your
                  deliveries.
                </p>
                <a
                  href="#"
                  className="inline-block text-fedexBlue font-semibold underline hover:no-underline"
                >
                  Enroll for free
                </a>
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <Image
                  src="/regift.jpg"
                  alt="Returns"
                  width={727}
                  height={463}
                  className="rounded-xl shadow-md w-full"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Why regift when you can return?
                </h4>
                <p className="text-gray-600 max-w-2xl">
                  Got a gift that’s the wrong size or style? FedEx returns are
                  easy. Start online and drop it off where it’s convenient.
                </p>
                <a
                  href="#"
                  className="inline-block text-fedexBlue font-semibold underline hover:no-underline"
                >
                  Find nearby locations
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
            {/* FedEx rate changes */}
            <div>
              <p className="font-semibold text-gray-900">
                FedEx rate and surcharge changes
              </p>
              <p className="text-gray-700 text-sm">
                Learn more about{" "}
                <a
                  href="https://www.fedex.com/en-us/shipping/rate-changes.html"
                  className="text-[#007AB7] font-medium hover:underline"
                >
                  rate and surcharge changes
                </a>
                —last updated 1/5/2026.
              </p>
            </div>

            {/* Spacer */}
            <div className="h-4 md:h-6" />

            {/* Money-back guarantee */}
            <div>
              <p className="font-semibold text-gray-900">
                FedEx money-back guarantee
              </p>
              <p className="text-gray-700 text-sm">
                We offer a money-back guarantee for select services. This
                guarantee may be suspended, modified, or revoked. Please check{" "}
                <a
                  href="https://www.fedex.com/en-us/service-guide/money-back-guarantee.html"
                  className="text-[#007AB7] font-medium hover:underline"
                >
                  money-back guarantee
                </a>{" "}
                for the latest status of our money-back guarantee.
              </p>
            </div>

            {/* Spacer */}
            <div className="h-4 md:h-6" />

            {/* Terms */}
            <div>
              <p className="text-xs text-gray-600">
                *For details, please see{" "}
                <a
                  href="https://www.fedex.com/en-us/rewards/termsandconditions.html"
                  className="text-[#007AB7] hover:underline"
                >
                  FedEx Rewards Terms and Conditions
                </a>
                .
              </p>
            </div>

            {/* Bottom spacing */}
            <div className="h-10 md:h-16" />
          </div>
        </section>
      </div>

      {/* Demo Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:border-fedex-purple transition-colors">
                <div className="w-16 h-16 bg-fedex-purple text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Enter Tracking Number
                </h3>
                <p className="text-gray-600">
                  Use our demo tracking number or create a new shipment
                </p>
              </div>

              <div className="text-center p-6 rounded-xl border border-gray-200 hover:border-fedex-orange transition-colors">
                <div className="w-16 h-16 bg-fedex-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  View Shipment Details
                </h3>
                <p className="text-gray-600">
                  See real-time tracking updates and delivery timeline
                </p>
              </div>

              <div className="text-center p-6 rounded-xl border border-gray-200 hover:border-fedex-purple transition-colors">
                <div className="w-16 h-16 bg-fedex-purple text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Manage Shipments</h3>
                <p className="text-gray-600">
                  Create new shipments or update existing ones in dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
