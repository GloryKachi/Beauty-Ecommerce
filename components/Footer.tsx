import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2d5143' }} className=" text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                    {/* Shop column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 lowercase">shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">home</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">about</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">shop</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">blog</a></li>
                        </ul>
                    </div>

                    {/* Policy column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 lowercase">policy</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">terms & conditions</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">privacy policy</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">refund policy</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">shipping policy</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors lowercase">accessibility statement</a></li>
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 lowercase">contact</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li className="lowercase">500 terry francine street</li>
                            <li className="lowercase">san francisco, ca 94158</li>
                            <li><a href="mailto:info@mysite.com" className="hover:text-primary-foreground transition-colors">info@mysite.com</a></li>
                            <li><a href="tel:123-456-7890" className="hover:text-primary-foreground transition-colors">123-456-7890</a></li>
                        </ul>
                    </div>

                    {/* Newsletter column */}
                    <div>
                        <h3 className="font-semibold text-xl md:text-2xl mb-2 lowercase">subscribe to our newsletter</h3>
                        <p className="text-primary-foreground/80 mb-6 lowercase">be the first to know about our hottest discounts</p>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="text-sm mb-1 block">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your email"
                                    className="w-full px-4 py-3 rounded-sm bg-transparent border border-primary-foreground/50 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
                                />
                            </div>

                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="subscribe-checkbox"
                                    className="mt-1 w-4 h-4 accent-accent"
                                />
                                <label htmlFor="subscribe-checkbox" className="text-sm text-primary-foreground/80">
                                    Yes, subscribe me to your newsletter.
                                </label>
                            </div>

                            <button
                                style={{backgroundColor: '#e1f861',color: '#2d5143'}}
                                type="submit"
                                className="px-8 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors lowercase"
                            >
                                subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-primary-foreground/20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">❀</span>
                            <span className="text-3xl font-semibold lowercase tracking-tight">onsko</span>
                        </div>

                        {/* Social icons and copyright */}
                        <div className="flex flex-col items-center md:items-end gap-2">
                            <div className="flex items-center gap-4">
                                <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Facebook">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="TikTok">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-sm text-primary-foreground/70">
                                © 2026 by onsko. Made by <a href="#" className="underline hover:text-primary-foreground transition-colors">IQly Studio</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
