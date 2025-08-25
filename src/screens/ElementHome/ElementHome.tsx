import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { useTheme } from "../../contexts/ThemeContext";
import { DeliveryStatusSection } from "./sections/DeliveryStatusSection/DeliveryStatusSection";
import { MapSection } from "./sections/MapSection/MapSection";

export const ElementHome = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-start relative bg-white dark:bg-gray-900 w-full min-w-[1440px] min-h-[1756px] transition-colors">
      <div className="flex flex-col items-start pt-0 pb-16 px-0 relative flex-1 grow bg-[linear-gradient(0deg,rgba(246,248,250,1)_0%,rgba(246,248,250,1)_100%)] dark:bg-[linear-gradient(0deg,rgba(17,24,39,1)_0%,rgba(31,41,55,1)_100%)] overflow-y-scroll transition-colors">
        <header className="flex h-[72px] items-center justify-between px-12 py-0 relative self-stretch w-full bg-[#006a4e] dark:bg-[#004d3a] shadow-[0px_4px_6px_-2px_#0a0c1233,0px_12px_16px_-4px_#0a0c1233] transition-colors">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <img
                className="relative w-10 h-10"
                alt="Post office logo"
                src="/postofficelogo.svg"
              />

              <div className="relative w-fit [font-family:'Noto_Serif_Bengali',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                মেইল ট্র্যাক
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="inline-flex items-start gap-[105px] px-2.5 py-2 relative flex-[0_0_auto] rounded-md overflow-hidden h-auto hover:bg-white/10"
              >
                {theme === 'light' ? (
                  <MoonIcon className="relative w-6 h-6 text-white" />
                ) : (
                  <SunIcon className="relative w-6 h-6 text-white" />
                )}
              </Button>
            </div>
          </div>
        </header>

        <main className="flex flex-col w-full">
          <DeliveryStatusSection />
          <MapSection />
        </main>
      </div>
    </div>
  );
};
