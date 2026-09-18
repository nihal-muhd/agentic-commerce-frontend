export const primaryNavigation = [
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/admin", label: "Admin" },
] as const;

export const routeGroups = [
  {
    title: "Public",
    routes: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/cart", label: "Cart" },
      { href: "/checkout", label: "Checkout" },
    ],
  },
  {
    title: "Admin",
    routes: [
      { href: "/admin", label: "Admin Home" },
      { href: "/admin/products", label: "Product Management" },
      { href: "/admin/incidents", label: "Incidents" },
      { href: "/admin/agent-traces", label: "Agent Traces" },
    ],
  },
] as const;
