import { Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
      {/* Subtle glow orb in background */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(187 72% 55% / 0.3) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Brand */}
        <header className="animate-fade-in">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-2">
            Clickway Agency
          </p>
        </header>

        {/* Main Headline */}
        <h1 className="animate-fade-in-delay-1 mt-8 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
          A Results-Driven
          <span className="block text-gradient">Digital Marketing Agency</span>
        </h1>

        {/* Supporting Text */}
        <p className="animate-fade-in-delay-2 mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
          We're building something powerful.
          <span className="block mt-2">
            Clickway Agency is launching soon — focused on performance marketing, growth strategy, and measurable results.
          </span>
        </p>

        {/* Coming Soon Badge */}
        <div className="animate-fade-in-delay-3 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-secondary-foreground">
              Website launching soon
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="animate-fade-in-delay-3 mt-12 w-16 h-px bg-border" aria-hidden="true" />

        {/* Contact Section */}
        <section className="animate-fade-in-delay-4 mt-12" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">Contact us</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Get in touch before launch
          </p>
          <a
            href="mailto:hello@clickway.agency"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 group"
          >
            <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-medium border-b border-transparent group-hover:border-primary transition-colors duration-300">
              hello@clickway.agency
            </span>
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 text-center animate-fade-in-delay-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clickway Agency. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
