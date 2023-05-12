import { RootStyleRegistry } from "~/utils/root-style-registry";
import { TrpcProvider } from "~/utils/trpc-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <TrpcProvider>{children}</TrpcProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
