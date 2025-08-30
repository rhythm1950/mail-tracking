import {
  ArrowUpIcon,
  CheckIcon,
  LayersIcon,
  MaximizeIcon,
  MinusIcon,
  PlusIcon,
  TruckIcon,
} from "lucide-react";
import React, { useState } from "react";
import { DeliveryChart } from "../../../../components/DeliveryChart/DeliveryChart";
import { GoogleMap } from "../../../../components/GoogleMap/GoogleMap";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";

const trackingInfo = [
  {
    label: "ট্র্যাক আইডি",
    value: "DL633783837BD",
  },
  {
    label: "ধরণ",
    value: "রেজিস্টার চিঠি",
  },
];

const progressSteps = [
  {
    id: 1,
    completed: true,
    label: "Booked at\nDhaka GPO",
    icon: "check",
  },
  {
    id: 2,
    completed: true,
    label: "Received at\nMohammadpur Housing",
    icon: "check",
  },
  {
    id: 3,
    completed: false,
    current: true,
    label: "Dispatched from\nMohammadpur Housing",
    number: "3",
  },
  {
    id: 4,
    completed: false,
    label: "Delivered to\nRecipient",
    number: "4",
  },
];

const statusUpdates = [
  {
    id: 1,
    location: "120700 Mohammadpur Housing",
    status: "Item is Delivered to Recipient",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: "check",
    iconBg: "bg-brand-600",
    badge: "Delivered",
    badgeBg: "bg-brand-50",
    badgeText: "text-brand-600",
  },
  {
    id: 2,
    location: "120700 Mohammadpur Housing",
    status: "Item is Received",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: "arrow-up",
    iconBg: "bg-[#006fee]",
    badge: "Received at Branch Office",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
  },
  {
    id: 3,
    location: "100000 Dhaka GPO",
    status: "Item has Landed",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: "arrow-up",
    iconBg: "bg-[#006fee]",
    badge: "Landed at Branch Office",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
  },
  {
    id: 4,
    location: "100000 Dhaka GPO",
    status: "Item Dispatched",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: "truck",
    iconBg: "bg-[#006fee]",
    badge: "Dispatched From Branch Office",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
  },
  {
    id: 5,
    location: "400002 Chaktai TSO",
    status: "প্রাপকের জন্য হাজির হয়েছে, জবাবের জন্য অপেক্ষা করা হচ্ছে",
    date: "7 Jan 25",
    time: "1:33 PM",
    icon: "arrow-up",
    iconBg: "bg-error-600",
    badge: "Delivery Failed",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-600",
  },
  {
    id: 6,
    location: "100000 Dhaka GPO",
    status: "Item Booked",
    date: "1 Jan 25",
    time: "1:33 PM",
    icon: "check",
    iconBg: "bg-[#006fee]",
    badge: "Booked",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
  },
];

const mapControls = [
  { icon: "minus", alt: "Zoom Out" },
  { icon: "plus", alt: "Zoom In" },
  { icon: "maximize", alt: "Fullscreen" },
];

export const StatusUpdatesSection = (): JSX.Element => {
  const [deliveryProgress] = useState(75);

  return (
    <section className="flex flex-col items-start gap-2 px-4 md:px-8 py-0 relative self-stretch w-full flex-[0_0_auto]">
      <Card className="flex flex-col items-start gap-6 px-4 md:px-8 py-6 relative self-stretch w-full flex-[0_0_auto] bg-card rounded-xl border border-border shadow-md transition-colors duration-300">
        <CardContent className="p-0 w-full">
          <header className="flex items-center gap-4 px-0 py-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
            <div className="flex flex-wrap items-center gap-4 relative flex-1 grow">
              <div className="inline-flex items-center gap-2 p-1.5 relative flex-[0_0_auto] rounded-lg bg-gradient-to-br from-[#065986] to-[#36bffa]">
                <TruckIcon className="w-4 h-4 text-white" />
              </div>

              {trackingInfo.map((info, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                >
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-muted-foreground text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
                    {info.label}
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-semibold text-foreground text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </header>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex h-[300px] md:h-[576px] items-end justify-end gap-2 p-5 relative self-stretch w-full rounded-md border border-border overflow-hidden">
              <GoogleMap className="absolute inset-0 w-full h-full" />
              
              <div className="items-end justify-end gap-2 md:gap-5 inline-flex relative flex-[0_0_auto] z-10">
                {mapControls.map((control, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="items-center gap-2 p-2 md:p-3 bg-background rounded-full border border-border shadow-sm inline-flex relative flex-[0_0_auto] h-auto hover:bg-accent transition-colors duration-200"
                  >
                    {control.icon === "minus" && (
                      <MinusIcon className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                    {control.icon === "plus" && (
                      <PlusIcon className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                    {control.icon === "maximize" && (
                      <MaximizeIcon className="w-4 h-4 md:w-6 md:h-6" />
                    )}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-10 h-10 md:w-12 md:h-12 p-0 border-0 bg-transparent shadow-none hover:bg-accent/50 transition-colors duration-200"
                >
                  <LayersIcon className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-2 md:gap-3 pt-2 pb-12 md:pb-24 px-4 md:px-12 relative self-stretch w-full flex-[0_0_auto] overflow-x-auto">
              {progressSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] min-w-[80px] md:min-w-[120px]">
                    <div
                      className={`flex w-6 h-6 md:w-8 md:h-8 items-center justify-center relative rounded-full overflow-hidden transition-colors duration-300 ${
                        step.completed
                          ? "bg-[#006fee]"
                          : step.current
                            ? "border-2 border-solid border-[#006fee] bg-background"
                            : "border-2 border-solid border-muted bg-background"
                      }`}
                    >
                      {step.completed ? (
                        <CheckIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      ) : (
                        <div
                          className={`relative w-fit font-medium text-xs md:text-sm whitespace-nowrap ${
                            step.current ? "text-[#006fee]" : "text-muted-foreground"
                          }`}
                        >
                          {step.number}
                        </div>
                      )}
                    </div>
                    <div
                      className={`absolute top-[32px] md:top-[39px] left-1/2 transform -translate-x-1/2 w-[100px] md:w-[129px] font-medium text-xs md:text-sm text-center leading-4 md:leading-5 transition-colors duration-300 ${
                        step.completed || step.current
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.label.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i === 0 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {index < progressSteps.length - 1 && (
                    <div className="flex flex-col h-6 md:h-8 items-center justify-center relative flex-1 grow min-w-[40px] md:min-w-[60px]">
                      <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative flex-1 grow h-1 md:h-1.5 bg-muted rounded-full">
                          <div
                            className={`h-1 md:h-1.5 bg-[#006fee] rounded-full transition-all duration-500 ${
                              index === 0 || index === 1
                                ? "w-full"
                                : index === 2
                                  ? "w-1/3"
                                  : "w-0"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-1 relative flex-1 grow">
                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-semibold text-foreground text-lg md:text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                      বিস্তারিত
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-foreground text-base md:text-lg tracking-[0] leading-7">
                    ডেলিভারির সম্ভাব্য তারিখ
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-medium text-foreground text-base md:text-lg text-left md:text-right tracking-[0] leading-7">
                    9 Jan 25 - 11 Jan 25
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                  <Progress 
                    value={deliveryProgress} 
                    className="w-full h-6 md:h-7 bg-muted"
                  />
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-48 md:h-60">
              <DeliveryChart className="w-full h-full" />
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {statusUpdates.map((update) => (
                <Card
                  key={update.id}
                  className="flex items-center gap-3 px-3 py-3 md:py-1.5 relative self-stretch w-full flex-[0_0_auto] bg-card rounded-lg border border-border hover:shadow-md transition-all duration-200"
                >
                  <CardContent className="flex items-center gap-3 p-0 w-full">
                    <div
                      className={`flex w-8 h-8 items-center justify-center relative rounded-full overflow-hidden ${update.iconBg}`}
                    >
                      {update.icon === "check" ? (
                        <CheckIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      ) : update.icon === "truck" ? (
                        <TruckIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      ) : (
                        <ArrowUpIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                    </div>

                    <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] font-medium text-foreground text-sm md:text-base tracking-[0] leading-6">
                        {update.location}
                      </div>

                      <div className="relative self-stretch font-medium text-muted-foreground text-xs md:text-sm tracking-[0] leading-5">
                        {update.status}
                      </div>

                      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                        <div className="w-fit text-muted-foreground text-xs md:text-sm leading-5 whitespace-nowrap relative mt-[-1.00px] font-medium tracking-[0]">
                          {update.date}
                        </div>

                        <div className="relative w-fit mt-[-1.00px] font-medium text-muted-foreground text-xs md:text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {update.time}
                        </div>
                      </div>
                    </div>

                    <div className="items-start rounded-[14px] overflow-hidden inline-flex relative flex-[0_0_auto]">
                      <Badge
                        className={`items-center justify-center gap-1 px-2 md:px-3 py-1 rounded-2xl inline-flex relative flex-[0_0_auto] ${update.badgeBg} ${update.badgeText} border-0 text-xs md:text-sm`}
                      >
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] leading-5 whitespace-nowrap">
                          {update.badge}
                        </div>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};