import { RootLayout } from "@/components/layouts/RootLayout";
import { GameScreen } from "@/features/games/routes";

export default function Home() {
  return (
    <RootLayout>
      <GameScreen />
    </RootLayout>
  );
}
