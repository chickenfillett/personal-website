"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type TransitionLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(function TransitionLink(
  { href, target, children, onClick, ...props },
  ref,
) {
  const router = useRouter();

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

        if (!href.startsWith("/") || href === window.location.pathname) return;

        event.preventDefault();
        document.documentElement.classList.add("route-transitioning");
        window.setTimeout(() => {
          router.push(href);
          window.setTimeout(() => document.documentElement.classList.remove("route-transitioning"), 180);
        }, 90);
      }}
      {...props}
    >
      {children}
    </Link>
  );
});

export default TransitionLink;
