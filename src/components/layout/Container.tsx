type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 lg:max-w-6xl ${className}`}>
      {children}
    </div>
  );
}