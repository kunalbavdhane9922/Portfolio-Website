import { Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [showHint, setShowHint] = useState(true);

  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    setShowHint(true);
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative inline-block">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className={`h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 ${
          showHint ? "ring-2 ring-primary ring-offset-2 ring-offset-background animate-pulse" : ""
        }`}
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Temporary 3-Second Highlight Bubble */}
      <div 
        className={`absolute right-0 top-full mt-2.5 z-50 pointer-events-none transition-all duration-500 transform ${
          showHint ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95"
        }`}
      >
        <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg whitespace-nowrap animate-bounce">
          <Sparkles className="h-3.5 w-3.5 shrink-0 animate-spin" />
          <span>{isDark ? "Do you like sunny? Click here! ☀️" : "Prefer night mode? Click here! 🌙"}</span>
          <div className="absolute -top-1 right-3.5 w-2 h-2 bg-primary rotate-45 transform"></div>
        </div>
      </div>
    </div>
  );
}