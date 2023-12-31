import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import "./globals.css";

export const metadata = {
  title: "New Year Celebration",
  description:
    "Celebrate the New Year in style with this interactive and visually stunning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              flexGrow: 1,
              color: "#fff",
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
