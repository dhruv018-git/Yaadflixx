import { Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Play className="text-white h-4 w-4" fill="currentColor" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                YaadFlix
              </span>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="text-brand-description">
              Your ultimate destination for premium movie streaming experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C23.003 5.367 17.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.775 0c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-youtube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-home">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-movies">Movies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-shows">TV Shows</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-mylist">My List</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-categories">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-action">Action</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-drama">Drama</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-comedy">Comedy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-thriller">Thriller</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-support">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-help">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-contact">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground mb-2" data-testid="text-copyright">
            © 2024 YaadFlix. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-muted-foreground">Made with</span>
            <span className="text-red-500 text-xl">❤️</span>
            <span className="text-muted-foreground">by</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-lg pulse-glow">
              Dhruv and Danish
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
