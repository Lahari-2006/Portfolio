const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Vasantha Lahari. Built with passion and code.
        </p>
        <p className="text-sm text-muted-foreground">
          Thanks for visiting! 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
