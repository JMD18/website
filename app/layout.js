import "./globals.css";

export const metadata = {
  title: "Joshua Daugherty",
  description: "Software Engineer & Developer - Portfolio",
  icons: {
    icon: "/img/misc/jmd_square.png",
    apple: [
      { url: "/img/misc/jmd_square.png", sizes: "120x120" },
      { url: "/img/misc/jmd_square.png", sizes: "152x152" },
      { url: "/img/misc/jmd_square.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
