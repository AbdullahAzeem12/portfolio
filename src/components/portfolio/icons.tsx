import type { TechSkill } from "./data";

interface IconProps {
  className?: string;
}

export function FlutterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.3 2 3.6 12.7l3.4 3.4L21.1 2h-6.8zm.05 9.95-5.9 5.9 3.4 3.45L21.15 12h-6.8z" opacity="0.92" />
      <path d="m11.85 21.3 3.45 3.4h6.85l-6.9-6.85-3.4 3.45z" opacity="0.55" />
    </svg>
  );
}

export function JavaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M8 18.5c-2.6.4-4.5 1.2-4.5 2.2 0 1.3 3.8 2.3 8.5 2.3s8.5-1 8.5-2.3c0-1-1.9-1.8-4.5-2.2" strokeLinecap="round" />
      <path d="M8 18.5c-1.2-.3-2-.8-2-1.4 0-.7 1.2-1.3 3-1.6M16 18.5c1.2-.3 2-.8 2-1.4 0-.6-1-1.2-2.6-1.5" strokeLinecap="round" />
      <path d="M9.5 12.5c-1.6-1.6.6-3.4 2.4-5.3-.9 2.5 2.6 3 1 5.3M13.5 13.9c1.4-.7 1.5-2.2.7-3.4 2.2.9 2.9 2.9 1.3 4.1" strokeLinecap="round" />
      <path d="M9 16c0 .9 1.3 1.7 3 1.7s3-.8 3-1.7" strokeLinecap="round" />
    </svg>
  );
}

export function KotlinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 3h18L12 12l9 9H3V3z" opacity="0.92" />
      <path d="M3 3h9L3 12V3z" opacity="0.5" />
    </svg>
  );
}

export function SqlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V12c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
      <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
    </svg>
  );
}

export function FirebaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.2 17.9 7.4 3.6c.1-.7 1-.9 1.4-.3l2.3 4.3-1 2 3.5-3.7c.5-.5 1.3-.3 1.5.3l3.7 11.7-8.4 4.9c-.7.4-1.5.4-2.2 0l-3-2.9z" opacity="0.9" />
      <path d="m11.1 7.6 8.7 15.1c.4-.3.6-.8.5-1.3L16.9 6.2c-.1-.5-.7-.7-1.1-.4l-4.7 1.8z" opacity="0.55" />
    </svg>
  );
}

export function ReactNativeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function RestApiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 4c-1.5 0-2 1-2 2.5v2c0 1.5-.8 2.5-2.5 3.5C5.2 13 6 14 6 15.5v2C6 19 6.5 20 8 20" />
      <path d="M16 4c1.5 0 2 1 2 2.5v2c0 1.5.8 2.5 2.5 3.5-1.7 1-2.5 2-2.5 3.5v2c0 1.5-.5 2.5-2 2.5" />
    </svg>
  );
}

export function TechIcon({
  icon,
  className,
}: {
  icon: TechSkill["icon"];
  className?: string;
}) {
  switch (icon) {
    case "flutter":
      return <FlutterIcon className={className} />;
    case "java":
      return <JavaIcon className={className} />;
    case "kotlin":
      return <KotlinIcon className={className} />;
    case "sql":
      return <SqlIcon className={className} />;
    case "firebase":
      return <FirebaseIcon className={className} />;
    case "react-native":
      return <ReactNativeIcon className={className} />;
    case "rest":
      return <RestApiIcon className={className} />;
  }
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}
