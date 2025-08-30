import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { Button } from "../../components/ui/button";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MapSection } from "./sections/MapSection/MapSection";
import { StatusUpdatesSection } from "./sections/StatusUpdatesSection/StatusUpdatesSection";

export const ElementHome = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className="flex items-start relative bg-background w-full min-w-[320px] min-h-screen transition-colors duration-300">
      <div className="flex flex-col items-start pt-0 pb-16 px-0 relative flex-1 grow bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-y-auto transition-colors duration-300">
        <header className="flex h-[72px] items-center justify-between px-4 md:px-8 py-0 relative self-stretch w-full bg-[#006a4e] dark:bg-gray-800 shadow-[0px_4px_6px_-2px_#0a0c1233,0px_12px_16px_-4px_#0a0c1233] transition-colors duration-300">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <img
                className="relative w-8 h-8 md:w-10 md:h-10 drop-shadow-sm"
                alt="Post office logo"
                src="/bangladesh-post-logo.svg"
              />

              <div className="relative w-fit [font-family:'Noto_Serif_Bengali',Helvetica] font-bold text-white text-lg md:text-xl tracking-[0] leading-[normal]">
                মেইল ট্র্যাক
              </div>
            </div>
          </div>

          <nav className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </Button>
          </nav>
        </header>

        <main className="flex flex-col w-full">
          <MapSection />
          <StatusUpdatesSection />
        </main>
      </div>
      <ScrollToTop />
    </div>
  );
};