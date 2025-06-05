"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

export default function Breadcrumb({
  homeElement = <Home className="h-4 w-4" />,
  separator = <ChevronRight className="h-4 w-4 mx-2" />,
  containerClasses = "py-4 flex",
  listClasses = "flex items-center text-sm text-muted-foreground",
  activeClasses = "font-medium text-foreground",
  capitalizeLinks = true,
}: BreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <nav aria-label="Breadcrumb" className={containerClasses}>
      <ol className={listClasses}>
        <li className="flex items-center">
          <Link href="/" className="hover:text-primary transition-colors">
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          const formattedLink = capitalizeLinks
            ? link.charAt(0).toUpperCase() + link.slice(1).replace(/-/g, " ")
            : link.replace(/-/g, " ");

          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span className={activeClasses}>{formattedLink}</span>
              ) : (
                <>
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {formattedLink}
                  </Link>
                  {separator}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
