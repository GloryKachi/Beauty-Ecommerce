// "use client";
// import React, { useState } from "react";
// import {
//     motion,
//     AnimatePresence,
//     useScroll,
//     useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { Search, Heart, Settings } from "lucide-react";
//
// export const FloatingNav = () => {
//     const { scrollYProgress } = useScroll();
//     const [visible, setVisible] = useState(true); // Changed to true
//
//     const navItems = [
//         { name: "home", link: "/" },
//         { name: "shop", link: "/shop" },
//         { name: "about", link: "/about" },
//         { name: "blog", link: "/blog" },
//     ];
//
//     useMotionValueEvent(scrollYProgress, "change", (current) => {
//         if (typeof current === "number") {
//             const direction = current - scrollYProgress.getPrevious()!;
//
//             // Removed the condition that hides it at the top
//             if (direction < 0) {
//                 setVisible(true);
//             } else {
//                 setVisible(false);
//             }
//         }
//     });
//
//     return (
//         <AnimatePresence mode="wait">
//             <motion.header
//                 initial={{
//                     opacity: 1,
//                     y: 0, // Changed from -100
//                 }}
//                 animate={{
//                     y: visible ? 0 : -100,
//                     opacity: visible ? 1 : 0,
//                 }}
//                 transition={{
//                     duration: 0.2,
//                 }}
//                 className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
//             >
//                 <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full shadow-lg px-6 py-3">
//                     <div className="flex items-center justify-between">
//                         {/* Logo */}
//                         <Link href="/" className="flex items-center gap-2">
//                             <div className="w-7 h-7 bg-emerald-600 rounded-md flex items-center justify-center">
//                                 <Settings className="w-4 h-4 text-white" />
//                             </div>
//                             <span className="text-xl font-semibold text-gray-800">onsko</span>
//                         </Link>
//
//                         {/* Navigation Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {navItems.map((item) => (
//                                 <Link
//                                     key={item.name}
//                                     href={item.link}
//                                     className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
//                                 >
//                                     {item.name}
//                                 </Link>
//                             ))}
//                         </nav>
//
//                         {/* Right Side Actions */}
//                         <div className="flex items-center gap-6">
//                             <Link
//                                 href="/login"
//                                 className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium hidden sm:block"
//                             >
//                                 log in
//                             </Link>
//
//                             <Link href="/favorites" className="relative">
//                                 <Heart className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
//                                 <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
//                                     0
//                                 </span>
//                             </Link>
//
//                             <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
//                                 <span className="text-sm font-medium hidden sm:block">Search</span>
//                                 <Search className="w-5 h-5" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </motion.header>
//         </AnimatePresence>
//     );
// };
//
// export default FloatingNav;


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Heart, Settings } from "lucide-react";

export const FloatingNav = () => {
    const navItems = [
        { name: "home", link: "/" },
        { name: "shop", link: "/shop" },
        { name: "about", link: "/about" },
        { name: "blog", link: "/blog" },
    ];

    return (
        <motion.header
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
        >
            <div className="bg-[#eeeeee] border border-white/20 rounded-full px-6 py-3" style={{ backgroundColor: '#eeeeee' }}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-emerald-600 rounded-md flex items-center justify-center">
                            <Settings className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-gray-800">
                            onsko
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/login"
                            className="hidden sm:block text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            log in
                        </Link>

                        <Link href="/favorites" className="relative">
                            <Heart className="w-5 h-5 text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        <button className="flex items-center gap-2 text-gray-700">
                            <span className="hidden sm:block text-sm font-medium">
                                Search
                            </span>
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};
export default FloatingNav;
