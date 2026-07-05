"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type TransitionLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(function TransitionLink(
  { href, target, children, onClick, ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (typeof href !== "string") return;

        if (href.startsWith("#")) {
          event.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", href);
          return;
        }

        if (!href.startsWith("/")) return;

        document.documentElement.classList.add("route-transitioning");
        window.setTimeout(() => document.documentElement.classList.remove("route-transitioning"), 260);
      }}
      {...props}
    >
      {children}
    </Link>
  );
});

export default TransitionLink;
