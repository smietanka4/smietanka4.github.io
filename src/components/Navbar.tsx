"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeMultilink, setActiveMultilink] = useState("#home");
  const pathname = usePathname();

  // Scroll spy for active link highlighting
  useEffect(() => {
    // Only run scroll spy on the homepage
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = [
        "home",
        "oferta",
        "proces",
        "portfolio",
        "omnie",
        "faq",
        "kontakt",
      ];
      
      const scrollPos = window.scrollY + 100; // Offset for fixed nav

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveMultilink(`#${sectionId}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/#home", label: "Strona główna", icon: "fa-house" },
    { href: "/#oferta", label: "Oferta", icon: "fa-tags" },
    { href: "/#proces", label: "Proces", icon: "fa-cogs" },
    { href: "/#portfolio", label: "Portfolio", icon: "fa-briefcase" },
    { href: "/#omnie", label: "O mnie", icon: "fa-user" },
    { href: "/#faq", label: "FAQ", icon: "fa-question-circle" },
    { href: "/#kontakt", label: "Kontakt", icon: "fa-envelope" },
    { href: "/#polityka", label: "Polityka prywatności", icon: "fa-shield-halved" },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === "/" && activeMultilink === link.href.replace("/", "");
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? "active" : ""}
                onClick={() => {
                   if (pathname !== "/") {
                       // If not on home, the Link logic handles navigation.
                       // If on home, we might want to manually setActiveMultilink for immediate feedback
                       // but scroll listener will correct it anyway.
                   }
                }}
              >
                <i className={`fa-solid ${link.icon}`}></i> {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
