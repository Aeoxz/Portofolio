import React from "react";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-6 h-6", ...props }: TechIconProps) {
  switch (name.toLowerCase()) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <path
            d="M11.914 2c-5.068 0-4.75 2.197-4.75 2.197l.006 2.277h4.82v.684H5.197S2 6.8 2 11.908c0 5.107 2.787 4.935 2.787 4.935h1.662v-2.336s-.09-2.787 2.73-2.787h4.707v-.706h-7.39V6.438s.22-2.73 4.708-2.73h4.636s2.532.062 2.532-2.47c0-2.53-2.455-2.53-2.455-2.53l-4.013.003L11.914 2zm-2.6 1.474a.82.82 0 110 1.64.82.82 0 010-1.64z"
            fill="#387EB8"
          />
          <path
            d="M12.086 22c5.068 0 4.75-2.197 4.75-2.197l-.006-2.277h-4.82v-.684h6.793S22 17.2 22 12.092c0-5.107-2.787-4.935-2.787-4.935h-1.662v2.336s.09 2.787-2.73 2.787H10.11v.706h7.39v4.577s-.22 2.73-4.708 2.73H8.16s-2.532-.062-2.532 2.47c0 2.53 2.455 2.53 2.455 2.53l4.013-.003.006.006zm2.6-1.474a.82.82 0 110-1.64.82.82 0 010-1.64z"
            fill="#FFE052"
          />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 17.5l2-1.2c.4.7.8 1.2 1.5 1.2.8 0 1.3-.4 1.3-1.4v-6.6h2.5v6.6c0 2.3-1.4 3.4-3.5 3.4-1.8 0-3-1-3.8-2M15 17.2l2-1.1c.5.8 1.2 1.4 2.2 1.4.9 0 1.5-.4 1.5-1 0-.7-.6-1-1.7-1.4l-.8-.3c-2.2-.8-3.6-1.8-3.6-3.8 0-2 1.6-3.5 4-3.5 1.8 0 3 .6 3.9 2.2l-1.9 1.2c-.4-.7-.9-1.1-1.9-1.1s-1.5.4-1.5 1c0 .6.5.9 1.5 1.3l.8.3c2.4.9 3.8 1.9 3.8 4 0 2.3-1.8 3.6-4.3 3.6-2.4 0-3.9-1.1-4.8-2.7"
            fill="#000000"
          />
        </svg>
      );
    case "c++":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#00599C" />
          <path
            d="M10.8 15.6c-.6.3-1.3.4-2.1.4-2.4 0-4.1-1.7-4.1-4.2s1.7-4.2 4.1-4.2c.8 0 1.5.1 2.1.4l-.6 1.7c-.4-.2-.9-.3-1.5-.3-1.3 0-2.2 1-2.2 2.4s.9 2.4 2.2 2.4c.6 0 1.1-.1 1.5-.3l.6 1.8zm4 -4.6h1.2v-1.2h1v1.2h1.2v1h-1.2v1.2h-1V12h-1.2v-1zm5 0H21v-1.2h1v1.2h1.2v1H22v1.2h-1V12h-1.2v-1z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#EA2D2E" />
          <path
            d="M10.8 18.2c2.8.2 5.5-.3 7.8-1.5-.8.6-3.3 1.8-7.8 1.5zm-.6-1.5c2.2.1 4.5-.3 6.3-1.2-.6.5-2.8 1.4-6.3 1.2zm6.6-4.5c.8-.8 1.2-1.7 1.2-2.5 0-.4-.1-.7-.2-.9-.3.6-.8 1.2-1.4 1.7-.5.4-1.2.8-1.9 1.1.8.2 1.6.4 2.3.6zm-4.9-6.3c1 .9.7 2.1-.4 3.2-.8.8-1.9 1.5-3 2.1.5-.5 1-1.1 1.4-1.8.8-1.3.8-2.4.2-3.1.6-.2 1.3-.1 1.8-.4z"
            fill="#FFFFFF"
          />
          <path
            d="M6 16.5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5c0-.4-.3-.8-.8-1.1-.7.7-2.6 1.3-5.2 1.3s-4.5-.6-5.2-1.3c-.5.3-.8.7-.8 1.1z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#777BB4" />
          <path
            d="M6.2 15.2h1.6l.6-2.4h1.7c1.7 0 2.8-.8 3.1-2.2.3-1.4-.4-2.2-2-2.2H6.9l-1.4 6.8h.7zm2.5-3.6l.5-2h1.2c.8 0 1.2.3 1 1.1-.1.7-.6 1-1.5 1h-1.2zm6 3.6h1.6l.6-2.4h1.7c1.7 0 2.8-.8 3.1-2.2.3-1.4-.4-2.2-2-2.2h-4.3l-1.4 6.8h.7zm2.5-3.6l.5-2h1.2c.8 0 1.2.3 1 1.1-.1.7-.6 1-1.5 1h-1.2z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <path
            d="M17.8 8.6c-.4-.5-1.1-.8-1.9-.9.4-.5.6-1.1.4-1.7-.2-.6-.8-1-1.5-1-.9 0-1.7.5-2.2 1.2-.5-.3-1.1-.4-1.7-.4-2.2 0-3.9 1.7-4 3.9-.7.2-1.3.7-1.6 1.4-.4.9-.3 2 .3 2.8.7.9 1.8 1.4 2.9 1.4h7c1.8 0 3.3-1.3 3.6-3 .3-1.5-.3-2.9-1.3-3.7z"
            fill="#F29111"
          />
        </svg>
      );
    case "sqlite":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#003B57" />
          <path
            d="M6 7.5C6 6.1 8.7 5 12 5s6 1.1 6 2.5S15.3 10 12 10 6 8.9 6 7.5zm0 4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-1.7c-1.4 1-3.6 1.7-6 1.7s-4.6-.7-6-1.7V12zm0 4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-1.7c-1.4 1-3.6 1.7-6 1.7s-4.6-.7-6-1.7v1.7z"
            fill="#00A9E0"
          />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#FF2D20" />
          <path
            d="M18.8 9.5l-5.7-3.3c-.4-.2-.8-.2-1.2 0L6.2 9.5c-.4.2-.6.6-.6 1v6.6c0 .4.2.8.6 1l5.7 3.3c.4.2.8.2 1.2 0l5.7-3.3c.4-.2.6-.6.6-1v-6.6c0-.4-.2-.8-.6-1zm-6.3 9.4l-4.7-2.7V11l4.7 2.7v5.2zm1-6.1L8.8 10l4.7-2.7 4.7 2.7-4.7 2.8zm4.7 4.3l-4.7 2.7V14.6l4.7-2.7v5.2z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "cisco":
    case "cisco ccnav7":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#1BA0D7" />
          <path
            d="M6 12v3m3-5v5m3-7v7m3-7v7m3-5v5m3-3v3"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <path d="M8 12a3 3 0 110-6h4v6H8z" fill="#F24E1E" />
          <path d="M12 6h4a3 3 0 110 6h-4V6z" fill="#FF7262" />
          <path d="M12 12h4a3 3 0 110 6h-4v-6z" fill="#1ABCFE" />
          <path d="M8 18a3 3 0 010-6h4v3a3 3 0 01-3 3H8z" fill="#0ACF83" />
          <path d="M8 18a3 3 0 003 3 3 3 0 003-3v-3H8v3z" fill="#A259FF" />
        </svg>
      );
    case "canva":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#00C4CC" />
          <path
            d="M12 6a6 6 0 100 12 6 6 0 000-12zm-1.8 8.8c-1.3 0-2.2-.9-2.2-2.3 0-1.8 1.4-3.1 3.2-3.1 1.2 0 2 .7 2 1.8 0 1.5-1.2 2.5-2.5 2.5-.2 0-.4 0-.5-.1l-.4 1.2h.4zm1.5-3.3c.5 0 .9-.4.9-1 0-.5-.3-.8-.8-.8-.8 0-1.4.7-1.4 1.4 0 .3.2.4.4.4h.9z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "vscode":
    case "vs code":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <path
            d="M17.5 2.3l-8.7 8L4.2 7 2 8.4l4.6 3.6L2 15.6l2.2 1.4 4.6-3.3 8.7 8 4.5-2.2V4.5L17.5 2.3zm0 4.7v10L10.7 12 17.5 7z"
            fill="#007ACC"
          />
        </svg>
      );
    case "pycharm":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#21D789" />
          <path d="M3 3h18v18H3z" fill="#000000" />
          <path d="M5 16h6v2H5z" fill="#21D789" />
          <path
            d="M6 7h3.5c1.4 0 2.5.8 2.5 2.2 0 1.4-1.1 2.2-2.5 2.2H7.5v2.6H6V7zm1.5 3h1.8c.6 0 1-.3 1-.8s-.4-.8-1-.8H7.5v1.6zM13 11.2c0-1.7 1.3-3.2 3.2-3.2 1.3 0 2.2.6 2.7 1.5l-1.3.8c-.3-.5-.7-.8-1.4-.8-1 0-1.7.8-1.7 1.7 0 .9.7 1.7 1.7 1.7.7 0 1.1-.3 1.4-.8l1.3.8c-.5.9-1.4 1.5-2.7 1.5-1.9 0-3.2-1.5-3.2-3.2z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "google colab":
    case "colab":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#F9AB00" />
          <path
            d="M7.8 8.8A3.2 3.2 0 1011 12 3.2 3.2 0 007.8 8.8zm8.4 0A3.2 3.2 0 1019.4 12a3.2 3.2 0 00-3.2-3.2z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "android studio":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#3DDC84" />
          <path
            d="M6.5 10.5a.8.8 0 100-1.6.8.8 0 000 1.6zm11 0a.8.8 0 100-1.6.8.8 0 000 1.6zM7.5 12h9c.5 0 .9.4.9.9v4.6c0 .5-.4.9-.9.9h-9c-.5 0-.9-.4-.9-.9v-4.6c0-.5.4-.9.9-.9z"
            fill="#073042"
          />
        </svg>
      );
    case "paddleocr":
    case "ocr":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#DC2626" />
          <path
            d="M7 6h3M7 18h3M17 6h-3M17 18h-3M6 7v3M18 7v3M6 17v-3M18 17v-3M9 10h6v4H9z"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "computer vision":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#8B5CF6" />
          <circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth="2" />
          <path
            d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "data analytics":
    case "nlp":
    case "ai-image detection":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#10B981" />
          <path
            d="M6 17l4-5 3 3 5-7M6 17h12"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
          <rect width="24" height="24" rx="4" fill="#262626" />
          <path
            d="M8 12h8m-4-4v8"
            stroke="#EF4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
