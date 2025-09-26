export function Footer() {
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EduVerse. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Terms of Service</a>
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  