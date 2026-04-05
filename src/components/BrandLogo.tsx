import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({ className, priority, sizes }: BrandLogoProps) {
  return (
    <Image
      src="/shell-coders-logo.jpg"
      alt="Shell Coders Logo"
      width={1024}
      height={1024}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
