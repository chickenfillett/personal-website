"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { AnchorHTMLAttributes, MouseEvent, ReactNode, forwardRef } from "react";

type TransitionLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(function TransitionLink(
  { href, onClick, target, children, ...props },
  ref,
) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || isModifiedClick(event) || target) return;

    if (typeof href !== "string") return;

    const targetHref = href;
    if (!targetHref || targetHref.startsWith("#") || targetHref.startsWith("http")) return;

    event.preventDefault();
    document.documentElement.classList.add("page-is-leaving");

    window.setTimeout(() => {
      router.push(targetHref);
      window.setTimeout(() => {
        document.documentElement.classList.remove("page-is-leaving");
      }, 260);
    }, 110);
  };

  return (
    <Link ref={ref} href={href} target={target} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
});

export default TransitionLink;
