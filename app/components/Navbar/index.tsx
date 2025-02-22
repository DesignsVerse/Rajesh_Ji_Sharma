"use client";

import Navbar from './Navbar';
import React, { useEffect } from 'react';

const Navbarin: React.FC = () => {
    useEffect(() => {
        // Page reload hone par scroll top par set ho
        window.scrollTo(0, 0);

        // Debounce function with setTimeout
        const debounce = (fn: Function, delay = 150) => {
            let timer: NodeJS.Timeout;
            return (...params: any[]) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    fn(...params);
                }, delay);
            };
        };

        // Function to store scroll position
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY.toString();
        };

        // Debounced function
        const debouncedScroll = debounce(storeScroll, 150);

        // Add event listener
        document.addEventListener('scroll', debouncedScroll, { passive: true });

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('scroll', debouncedScroll);
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-white">
                <Navbar />
            </div>
            {/* Extra padding to prevent content from hiding behind navbar */}
            <div className="pt-[80px]" />
        </>
    );
}

export default Navbarin;