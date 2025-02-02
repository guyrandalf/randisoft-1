interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
