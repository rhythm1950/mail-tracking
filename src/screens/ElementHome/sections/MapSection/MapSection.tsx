import { SearchIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { GoogleMap } from "../../../../components/GoogleMap/GoogleMap";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const MapSection = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const [trackingNumbers, setTrackingNumbers] = useState([
    "DS707941988BD",
    "DS706972459BD", 
    "DL633783837BD",
    "DS707941988BD",
  ]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setError("ট্র্যাকিং নম্বর দিন");
      return;
    }
    
    // Validate tracking number format
    const trackingPattern = /^[A-Z]{2}\d{9}BD$/;
    if (!trackingPattern.test(searchValue.trim())) {
      setError("ট্র্যাকিং নম্বর সঠিক নয়!");
      return;
    }

    setError("");
    if (!trackingNumbers.includes(searchValue.trim())) {
      setTrackingNumbers([...trackingNumbers, searchValue.trim()]);
    }
    setSearchValue("");
  };

  const removeTrackingNumber = (numberToRemove: string) => {
    setTrackingNumbers(trackingNumbers.filter(num => num !== numberToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="flex flex-col items-start gap-6 px-4 md:px-8 py-6 relative self-stretch w-full flex-[0_0_auto]">
      <Card className="flex flex-col items-start gap-4 px-4 md:px-8 py-6 relative self-stretch w-full flex-[0_0_auto] bg-card rounded-xl border border-border shadow-md transition-colors duration-300">
        <CardContent className="flex flex-col items-start gap-4 p-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-full md:w-[663px] items-end gap-4 relative">
              <div className="flex flex-col items-start justify-end relative flex-1 grow">
                <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-background rounded-[28px] overflow-hidden border border-border transition-colors duration-300">
                  <div className="flex h-14 items-center relative self-stretch w-full rounded-[4px_4px_0px_0px]">
                    <div className="items-center justify-between flex relative flex-1 self-stretch grow">
                      <div className="inline-flex items-center px-6 py-0 relative self-stretch flex-[0_0_auto]">
                        <Input
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value);
                            setError("");
                          }}
                          onKeyPress={handleKeyPress}
                          className="w-full h-5 font-normal text-foreground text-sm leading-5 [font-family:'Noto_Serif_Bengali',Helvetica] tracking-[0] whitespace-nowrap border-0 bg-transparent p-0 focus-visible:ring-0"
                          placeholder="আইটেম আইডি / ট্র্যাকিং নম্বর দিন"
                        />
                      </div>

                      <Button 
                        onClick={handleSearch}
                        className="flex w-[120px] md:w-[148px] items-center justify-center relative self-stretch bg-[#008563] h-auto hover:bg-[#007055] transition-colors duration-200"
                      >
                        <div className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 relative flex-[0_0_auto]">
                          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                            <div className="w-fit mt-[-1.00px] font-semibold text-white text-sm md:text-base text-center leading-6 relative [font-family:'Noto_Serif_Bengali',Helvetica] tracking-[0] whitespace-nowrap">
                              ট্র্যাক
                            </div>
                          </div>

                          <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-2.5 pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-rose-600 text-xs tracking-[0.40px] leading-4">
                      {error}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif_Bengali',Helvetica] font-normal text-foreground text-sm tracking-[0] leading-5 whitespace-nowrap">
              সাম্প্রতিক ট্র্যাকিংসমূহ
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
              {trackingNumbers.map((number, index) => (
                <Badge
                  key={`tracking-${index}`}
                  variant="secondary"
                  className="inline-flex items-start relative flex-[0_0_auto] rounded-[14px] overflow-hidden border border-border bg-brand-50 hover:bg-brand-100 transition-colors duration-200"
                >
                  <div className="items-center justify-center gap-1 pl-3 pr-2.5 py-1 rounded-2xl inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-brand-600 text-xs md:text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                      {number}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTrackingNumber(number)}
                      className="p-0 h-auto w-auto hover:bg-transparent"
                    >
                      <XIcon className="w-3 h-3 cursor-pointer text-brand-600 hover:text-brand-700" />
                    </Button>
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};