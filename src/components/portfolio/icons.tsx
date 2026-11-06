import type { TechSkill } from "./data";

interface IconProps {
  className?: string;
}

export function FlutterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.3 2 3.6 12.7l3.4 3.4L21.1 2h-6.8zm.05 9.95-5.9 5.9 3.4 3.45L21.15 12h-6.8z" opacity="0.95" />
      <path d="m11.85 21.3 3.45 3.4h6.85l-6.9-6.85-3.4 3.45z" opacity="0.6" />
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
      <path d="M3 3h18L12 12l9 9H3V3z" opacity="0.95" />
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
      <path d="M5.2 17.9 7.4 3.6c.1-.7 1-.9 1.4-.3l2.3 4.3-1 2 3.5-3.7c.5-.5 1.3-.3 1.5.3l3.7 11.7-8.4 4.9c-.7.4-1.5.4-2.2 0l-3-2.9z" opacity="0.95" />
      <path d="m11.1 7.6 8.7 15.1c.4-.3.6-.8.5-1.3L16.9 6.2c-.1-.5-.7-.7-1.1-.4l-4.7 1.8z" opacity="0.6" />
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

export function TfLiteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.5 6.5 12 0l10.5 6.5v11L12 24 1.5 17.5v-11zm10.5 8.25 7.5-4.4V7.5L12 11.9 4.5 7.5v2.85l7.5 4.4z" />
    </svg>
  );
}

export function AndroidStudioIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 10c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9s.9.4.9.9c0 .5-.4.9-.9.9m-11 0c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9s.9.4.9.9c0 .5-.4.9-.9.9M16.8 5.6l1.3-2.3c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2l-1.4 2.4C14.7 4.9 13.4 4.6 12 4.6s-2.7.3-4 .8L6.6 3c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5l1.3 2.3C4.5 7.2 2.8 9.9 2.5 13.1h19c-.3-3.2-2-5.9-4.7-7.5zM2.5 14.5v5c0 1.1.9 2 2 2h1.5v3c0 .6.4 1 1 1s1-.4 1-1v-3h8v3c0 .6.4 1 1 1s1-.4 1-1v-3H19.5c1.1 0 2-.9 2-2v-5H2.5z" />
    </svg>
  );
}

export function GitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 10.9 13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.1 4.5l3.2 3.2c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.1 3.1c.8-.3 1.8-.1 2.4.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.8-1.6-.5-2.4l-2.9-2.9v5.2c.4.3.7.8.7 1.4 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.6.3-1.1.7-1.4V8.5c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.1.7-1.4L8.1 3.2 2.4 8.9c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.9z" />
    </svg>
  );
}

export function FigmaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2H8zm8 0h-4v8h4a4 4 0 1 0 0-8zM8 10a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8H8zm8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 18a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8z" />
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
    case "tflite":
      return <TfLiteIcon className={className} />;
    case "android-studio":
      return <AndroidStudioIcon className={className} />;
    case "git":
      return <GitIcon className={className} />;
    case "figma":
      return <FigmaIcon className={className} />;
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

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.101-.475-.15-.675.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.2.05-.376-.025-.526s-.675-1.628-.925-2.23c-.244-.585-.492-.506-.675-.515-.175-.008-.376-.01-.576-.01s-.527.075-.803.376c-.275.301-1.053 1.028-1.053 2.507 0 1.48 1.078 2.909 1.228 3.109.15.201 2.121 3.238 5.139 4.542.718.311 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.088 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.275-.201-.576-.351zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.94.55 3.75 1.5 5.3L2 22l4.82-1.48c1.5 1 3.28 1.56 5.22 1.56 5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2z" />
    </svg>
  );
}
