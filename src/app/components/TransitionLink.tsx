"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type TransitionLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(function TransitionLink(
  { href, target, children, ...props },
  ref,
) {
  return (
    <Link ref={ref} href={href} target={target} {...props}>
      {children}
    </Link>
  );
});

export default TransitionLink;
