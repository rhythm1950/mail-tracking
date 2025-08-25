import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { SearchBar } from "../../../../components/SearchBar";

const trackingNumbers = [
  "DS707941988BD",
  "DS706972459BD",
  "DL633783837BD",
  "DS707941988BD",
  "DS706972459BD",
];

export const DeliveryStatusSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 px-12 py-0 w-full">
      <Card className="w-full bg-white dark:bg-gray-800 rounded-xl border border-[#e9e9eb] dark:border-gray-700 shadow-shadow-md transition-colors">
        <CardContent className="flex flex-col items-start gap-4 p-8">
          <SearchBar onTrackingSelect={(trackingNumber) => console.log('Selected:', trackingNumber)} />

          <div className="flex flex-col items-start justify-end gap-2 w-full">
            <span className="[font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-gray-800 dark:text-gray-200 text-sm tracking-[0] leading-5 whitespace-nowrap">
              সাম্প্রতিক ট্র্যাকিংসমূহ
            </span>

            <div className="flex items-center gap-6 w-full">
              {trackingNumbers.map((trackingNumber, index) => (
                <div
                  key={index}
                  className="inline-flex items-start rounded-[14px] overflow-hidden border border-[#d5d6da] dark:border-gray-600"
                >
                  <Badge
                    variant="secondary"
                    className="items-center justify-center gap-1 pl-3 pr-2.5 py-1 bg-[#ecfdf3] dark:bg-green-900/20 rounded-2xl border-0"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-medium text-brand-600 dark:text-green-400 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                      {trackingNumber}
                    </span>
                    <XIcon className="w-3 h-3 cursor-pointer text-brand-600 dark:text-green-400 hover:text-red-500 dark:hover:text-red-400 transition-colors" />
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
