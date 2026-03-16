export const GlitchText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <span className={`relative inline-block ${className}`} data-text={children}>
    {children}
  </span>
);
