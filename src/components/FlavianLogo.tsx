interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export default function FlavianLogo({ size = 48, showText = true, textColor = 'white' }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon - house with swoosh like their branding */}
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circle background */}
        <circle cx="24" cy="24" r="22" fill="#1a3a6b" stroke="#22d3ee" strokeWidth="1.5"/>
        {/* Cyan swoosh arc */}
        <path d="M8 32 Q20 14 40 20" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M6 36 Q22 18 42 24" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        {/* House */}
        <path d="M18 34 L18 26 L24 20 L30 26 L30 34 Z" fill="white"/>
        <path d="M15 27 L24 19 L33 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="21" y="28" width="6" height="6" rx="0.5" fill="#1a3a6b"/>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-xl tracking-widest uppercase"
            style={{ color: textColor, letterSpacing: '0.12em' }}
          >
            FLAVIAN
          </span>
          <span
            className="font-display text-sm tracking-[0.25em] uppercase"
            style={{ color: '#22d3ee', letterSpacing: '0.3em' }}
          >
            REALTY
          </span>
        </div>
      )}
    </div>
  )
}   