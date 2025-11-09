export const mockDomains = [
  {
    id: "1",
    name: "example.com",
    status: "active",
    expiryDate: "2025-12-31",
    verified: true,
  },
  {
    id: "2",
    name: "mycompany.com",
    status: "pending",
    expiryDate: "2025-11-15",
    verified: false,
  },
  {
    id: "3",
    name: "testdomain.net",
    status: "active",
    expiryDate: "2025-10-20",
    verified: true,
  },
];

export const mockMailboxes = [
  {
    id: "1",
    email: "admin@example.com",
    domain: "example.com",
    status: "active",
    quota: "5 GB",
    used: "2.3 GB",
  },
  {
    id: "2",
    email: "support@example.com",
    domain: "example.com",
    status: "active",
    quota: "10 GB",
    used: "5.1 GB",
  },
  {
    id: "3",
    email: "info@mycompany.com",
    domain: "mycompany.com",
    status: "suspended",
    quota: "5 GB",
    used: "4.8 GB",
  },
];

export const mockFeatures = [
  {
    id: "1",
    type: "alias",
    source: "contact@example.com",
    destination: "admin@example.com",
    status: "active",
  },
  {
    id: "2",
    type: "forwarding",
    source: "sales@example.com",
    destination: "team@example.com",
    status: "active",
  },
];
