export const Footer = () => {
  return (
    <footer className="py-6 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Akashat Ojha. All rights reserved.</p>
      </div>
    </footer>
  );
};
