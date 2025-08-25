import {
  ArrowUpIcon,
  CheckIcon,
  LayersIcon,
  MaximizeIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { GoogleMap } from "../../../../components/GoogleMap";

const trackingEvents = [
  {
    id: 1,
    location: "120700 Mohammadpur Housing",
    status: "Item is Delivered to Recipient",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: CheckIcon,
    iconBg: "bg-brand-600",
    statusBadge: "Delivered",
    statusBadgeBg: "bg-[#ecfdf3]",
    statusBadgeText: "text-brand-600",
    cardBg: "bg-gray-50",
  },
  {
    id: 2,
    location: "120700 Mohammadpur Housing",
    status: "Item is Received",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: ArrowUpIcon,
    iconBg: "bg-[#006fee]",
    statusBadge: "Received at Branch Office",
    statusBadgeBg: "bg-blue-light50",
    statusBadgeText: "text-blue-light600",
    cardBg: "",
  },
  {
    id: 3,
    location: "100000 Dhaka GPO",
    status: "Item has Landed",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: ArrowUpIcon,
    iconBg: "bg-[#006fee]",
    statusBadge: "Landed at Branch Office",
    statusBadgeBg: "bg-blue-light50",
    statusBadgeText: "text-blue-light600",
    cardBg: "",
  },
  {
    id: 4,
    location: "100000 Dhaka GPO",
    status: "Item Dispatched",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: ArrowUpIcon,
    iconBg: "bg-[#006fee]",
    statusBadge: "Dispatched From Branch Office",
    statusBadgeBg: "bg-blue-light50",
    statusBadgeText: "text-blue-light600",
    cardBg: "bg-gray-50",
  },
  {
    id: 5,
    location: "400002 Chaktai TSO",
    status: "প্রাপক জানান হয়েছে, জবাবের জন্য অপেক্ষা করা হচ্ছে",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: ArrowUpIcon,
    iconBg: "bg-error-600",
    statusBadge: "Delivery Failed",
    statusBadgeBg: "bg-rose-50",
    statusBadgeText: "text-rose-600",
    cardBg: "bg-gray-50",
  },
  {
    id: 6,
    location: "100000 Dhaka GPO",
    status: "Item Booked",
    date: "1 Jan 25",
    time: "1:33 PM",
    icon: ArrowUpIcon,
    iconBg: "bg-[#006fee]",
    statusBadge: "Booked",
    statusBadgeBg: "bg-blue-light50",
    statusBadgeText: "text-blue-light600",
    cardBg: "",
  },
];

const mapControls = [
  { icon: LayersIcon, alt: "Layers" },
  { icon: MaximizeIcon, alt: "Maximize" },
  { icon: PlusIcon, alt: "Plus" },
  { icon: MinusIcon, alt: "Minus" },
];

const serviceFeatures = [
  {
    icon: "/bd.svg",
    title: "NATIONWIDE DELIVERY NETWORK",
    alt: "Bd",
  },
  {
    icon: "/cash-on-delivery-1.png",
    title: "CASH ON DELIVERY UPON DELIVER",
    alt: "Cash on delivery",
  },
  {
    icon: "/delivery-1.png",
    title: "FLEXIBLE DELIVERY OPTIONS",
    alt: "Delivery",
  },
  {
    icon: "/image-2.png",
    title: "EASY RETURN OF UNDELIVERED ITEMS",
    alt: "Image",
  },
];

const chartLocations = [
  "Mohammadpur",
  "Mohammadpur",
  "Dhaka GPO",
  "Dhaka GPO",
  "Chaktai TSO",
  "Dhaka GPO",
];

export const MapSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2 px-12 py-0 relative self-stretch w-full flex-[0_0_auto]">
      <Card className="gap-8 pt-0 pb-8 px-0 rounded-xl overflow-hidden border border-solid border-[#e9e9eb] dark:border-gray-700 shadow-shadow-lg flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] dark:bg-gray-800 transition-colors">
        <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] dark:bg-gray-800 p-0 transition-colors">
          <div className="items-center gap-4 px-8 py-6 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="flex items-center gap-2 relative flex-1 grow">
              <div className="inline-flex items-center gap-2 p-1.5 relative flex-[0_0_auto] rounded-lg bg-[linear-gradient(45deg,rgba(6,89,134,1)_0%,rgba(54,191,250,1)_100%)]">
                <img
                  className="relative w-5 h-5"
                  alt="Track"
                  src="/track.svg"
                />
              </div>

              <div className="relative w-fit [font-family:'Noto_Serif_Bengali',Helvetica] font-semibold text-[#181d27] dark:text-gray-100 text-2xl tracking-[0] leading-8 whitespace-nowrap">
                ট্র্যাক আইডি
              </div>

              <div className="items-start inline-flex relative flex-[0_0_auto]">
                <Badge className="px-4 py-2.5 bg-blue-light100 inline-flex items-center justify-center relative flex-[0_0_auto] rounded-2xl">
                  <div className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0085c9] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                    DL633783837BD
                  </div>
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex-col items-start justify-center gap-4 px-8 py-0 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <Card className="flex flex-col items-start gap-2 p-6 relative flex-1 self-stretch grow rounded-lg border border-solid border-[#d5d6da] dark:border-gray-600 dark:bg-gray-700 transition-colors">
                <CardContent className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] p-0">
                  <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-center gap-1 relative flex-1 grow">
                        <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="font-semibold text-xl leading-[30px] relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] text-[#11181c] dark:text-gray-100 tracking-[0] whitespace-nowrap">
                            রেজিস্টার্ড চিঠি
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-gray-800 dark:text-gray-200 text-lg tracking-[0] leading-7">
                            ডেলিভারির সম্ভাব্য তারিখ
                          </div>

                          <div className="relative flex-1 mt-[-1.00px] font-text-large font-[number:var(--text-large-font-weight)] text-gray-800 dark:text-gray-200 text-[length:var(--text-large-font-size)] text-right tracking-[var(--text-large-letter-spacing)] leading-[var(--text-large-line-height)] [font-style:var(--text-large-font-style)]">
                            9 Jan 25 - 11 Jan 25
                          </div>
                        </div>

                        <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                          <Progress
                            value={80}
                            className="w-full h-7 bg-zinc-200 dark:bg-gray-600 rounded-full overflow-hidden"
                          >
                            <div className="h-full bg-[linear-gradient(90deg,rgba(132,202,255,1)_0%,rgba(21,112,239,1)_100%)] rounded-full" />
                          </Progress>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-60">
                    <div className="relative w-full h-60">
                      <div className="flex w-full h-60 items-start gap-1">
                        <div className="flex-col items-start flex-1 self-stretch grow flex relative">
                          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full grow">
                            {Array.from({ length: 6 }).map((_, index) => (
                              <div
                                key={index}
                                className="flex h-[17px] items-center gap-2 relative self-stretch w-full"
                              >
                                <img
                                  className="relative flex-1 grow h-px object-cover"
                                  alt="Divider"
                                  src="/divider.svg"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            {chartLocations.map((location, index) => (
                              <div
                                key={index}
                                className="relative w-fit mt-[-1.00px] font-text-xs-regular font-[number:var(--text-xs-regular-font-weight)] text-gray-600 text-[length:var(--text-xs-regular-font-size)] text-right tracking-[var(--text-xs-regular-letter-spacing)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap [font-style:var(--text-xs-regular-font-style)]"
                              >
                                {location}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <img
                        className="absolute w-full h-[214px] top-0 left-0"
                        alt="Chart data"
                        src="/-chart-data.svg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    {trackingEvents.map((event) => {
                      const IconComponent = event.icon;
                      return (
                        <div
                          key={event.id}
                          className={`flex items-center gap-3 px-3 py-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-lg border border-solid border-[#d5d6da] dark:border-gray-600 ${event.cardBg} dark:bg-gray-600/20 transition-colors`}
                        >
                          <div
                            className={`flex w-8 h-8 items-center justify-center relative rounded-full overflow-hidden ${event.iconBg}`}
                          >
                            <IconComponent className="relative w-6 h-6 text-white" />
                          </div>

                          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                            <div className="relative self-stretch mt-[-1.00px] font-base-medium font-[number:var(--base-medium-font-weight)] text-[#11181c] dark:text-gray-100 text-[length:var(--base-medium-font-size)] tracking-[var(--base-medium-letter-spacing)] leading-[var(--base-medium-line-height)] [font-style:var(--base-medium-font-style)]">
                              {event.location}
                            </div>

                            <div className="relative self-stretch font-sm-medium font-[number:var(--sm-medium-font-weight)] text-zinc-600 dark:text-gray-300 text-[length:var(--sm-medium-font-size)] tracking-[var(--sm-medium-letter-spacing)] leading-[var(--sm-medium-line-height)] [font-style:var(--sm-medium-font-style)]">
                              {event.status}
                            </div>

                            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                              <div className="w-fit text-zinc-600 dark:text-gray-300 text-[length:var(--sm-medium-font-size)] leading-[var(--sm-medium-line-height)] whitespace-nowrap relative mt-[-1.00px] font-sm-medium font-[number:var(--sm-medium-font-weight)] tracking-[var(--sm-medium-letter-spacing)] [font-style:var(--sm-medium-font-style)]">
                                {event.date}
                              </div>

                              <div className="relative w-fit mt-[-1.00px] font-sm-medium font-[number:var(--sm-medium-font-weight)] text-zinc-600 dark:text-gray-300 text-[length:var(--sm-medium-font-size)] tracking-[var(--sm-medium-letter-spacing)] leading-[var(--sm-medium-line-height)] whitespace-nowrap [font-style:var(--sm-medium-font-style)]">
                                {event.time}
                              </div>
                            </div>
                          </div>

                          <div className="items-start rounded-[14px] overflow-hidden inline-flex relative flex-[0_0_auto]">
                            <Badge
                              className={`items-center justify-center gap-1 pl-3 pr-2.5 py-1 rounded-2xl inline-flex relative flex-[0_0_auto] ${event.statusBadgeBg}`}
                            >
                              <div
                                className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-sm text-center tracking-[0] leading-5 whitespace-nowrap ${event.statusBadgeText}`}
                              >
                                {event.statusBadge}
                              </div>
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col items-start gap-8 p-6 relative flex-1 self-stretch grow rounded-lg border border-solid border-[#d5d6da] dark:border-gray-600 dark:bg-gray-700 transition-colors">
                <CardContent className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto] p-0">
                  <div className="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-center gap-1 relative flex-1 grow">
                      <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="font-medium text-lg leading-7 relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] text-[#11181c] dark:text-gray-100 tracking-[0] whitespace-nowrap">
                          ম্যাপ
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[576px]">
                    <GoogleMap />
                    <div className="flex-col items-start gap-5 top-5 left-5 inline-flex relative">
                      <Button
                        variant="outline"
                        size="icon"
                        className="items-center gap-2 p-2 flex-[0_0_auto] bg-white dark:bg-gray-800 rounded-[1000px] border border-solid border-[#e9e9eb] dark:border-gray-600 shadow-[0px_2px_4px_#0000001a] inline-flex relative h-auto"
                      >
                        <LayersIcon className="relative w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </Button>

                      {mapControls.slice(1).map((control, index) => {
                        const IconComponent = control.icon;
                        return (
                          <Button
                            key={index}
                            variant="outline"
                            size="icon"
                            className="items-center gap-2 p-2 flex-[0_0_auto] bg-white dark:bg-gray-800 rounded-[1000px] border border-solid border-[#e9e9eb] dark:border-gray-600 shadow-[0px_2px_4px_#0000001a] inline-flex relative h-auto"
                          >
                            <IconComponent className="relative w-6 h-6 text-gray-600 dark:text-gray-300" />
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Card className="flex flex-col items-center gap-3 pt-0 pb-8 px-0 relative self-stretch w-full flex-[0_0_auto] rounded-md overflow-hidden border border-solid border-[#d5d6da] dark:border-gray-600 shadow-[0px_4px_12px_-4px_#0000001a] bg-[linear-gradient(135deg,rgba(253,253,253,1)_0%,rgba(240,249,255,1)_100%)] dark:bg-[linear-gradient(135deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)] transition-colors">
                    <CardContent className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto] p-0">
                      <div className="flex w-full items-center gap-4 px-8 py-3 relative flex-[0_0_auto] bg-brand-500 dark:bg-[#004d3a]">
                        <img
                          className="relative w-[84px] h-[84px]"
                          alt="Post office logo"
                          src="/postofficelogo-1.svg"
                        />

                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Yaldevi',Helvetica] font-bold text-[#ffffff] text-[28px] tracking-[0] leading-[normal]">
                              Bangladesh Post Office
                            </div>
                          </div>

                          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Yaldevi',Helvetica] font-bold text-[#ffffff] text-[33px] tracking-[2.64px] leading-[normal]">
                              Cash On Delivery
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-[506px] [font-family:'Yaldevi',Helvetica] font-bold text-gray-900 dark:text-gray-100 text-2xl text-center tracking-[0] leading-[normal]">
                        Have you used Cash on Delivery Service of Bangladesh
                        Post Office?
                      </div>

                      <div className="flex flex-col items-start gap-4 px-8 py-0 relative self-stretch w-full flex-[0_0_auto]">
                        {serviceFeatures.map((feature, index) => (
                          <Card
                            key={index}
                            className="flex flex-col h-16 items-start justify-center gap-6 px-4 py-3 relative self-stretch w-full rounded-lg overflow-hidden border border-solid border-neutral-100 dark:border-gray-600 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] dark:bg-[linear-gradient(0deg,rgba(55,65,81,1)_0%,rgba(55,65,81,1)_100%)] transition-colors"
                          >
                            <CardContent className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] p-0">
                              <img
                                className="relative w-10 h-10 object-cover"
                                alt={feature.alt}
                                src={feature.icon}
                              />

                              <div className="relative w-fit [font-family:'Titillium_Web',Helvetica] font-semibold text-gray-800 dark:text-gray-200 text-2xl tracking-[0] leading-[normal]">
                                {feature.title}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};