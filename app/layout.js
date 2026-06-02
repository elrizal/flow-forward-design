import "./globals.css";

export const metadata = {
  title: "Flow Forward Design",
  description: "Quick front-end deployment boilerplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
