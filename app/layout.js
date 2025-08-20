 export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Quote of the Day</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Helvetica Neue', sans-serif",
          background: "linear-gradient(135deg, #f8f1f4, #fde2e4, #f9fbe7)",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
