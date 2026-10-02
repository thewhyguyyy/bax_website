// lucide-react dropped brand icons; using small inline SVGs instead.
export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.7 8.8L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.2-9.4L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.3 8.75h3.28V21H3.3V8.75ZM9.5 8.75h3.14v1.68h.05c.44-.82 1.5-1.68 3.1-1.68 3.3 0 3.9 2.17 3.9 5v7.25h-3.28v-6.43c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4v6.53H9.5V8.75Z" />
    </svg>
  );
}
