import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { RoleSelectionSection } from "./role-selection-section";
import { WelcomeFooter } from "./welcome-footer";
import { WelcomeHeader } from "./welcome-header";

export function WelcomePage() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
            <WelcomeHeader />

            <main>
                <HeroSection />
                <HowItWorksSection />
                <RoleSelectionSection />
            </main>

            <WelcomeFooter />
        </div>
    );
}