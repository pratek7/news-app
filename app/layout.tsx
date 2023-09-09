import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="bg-gray-100 transition-all dark:bg-zinc-900 duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
          <footer className="text-center m-20 text-3xl font-extrabold animate-bounce">
            &copy; Develop By: Pratik Karki, Developer
          </footer>
        </div>
      </body>
    </html>
  );
}
