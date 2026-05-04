import React from 'react';

const Dragon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            style={{ animation: 'flap 1s infinite' }}
        >
            <style>{`
                @keyframes flap {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            `}</style>
            <path
                d="M32 2c-1.8 0-3.6 0.5-5.2 1.4C23.1 3.5 20.6 3 18 3c-4.7 0-8.5 2.2-10.2 5.5C7.2 11.8 8 14 8 16c0 5.1-4 9-9 9v2c5 0 8 2.9 8 7 0 1.2-0.3 2.3-0.8 3.3C9.7 38.5 12 40 12 42c0 3.1-6.2 10-12 10v2c6 0 12-8 12-10 0-3 1.5-7 8-7 0 0 0 0 0 0 1.6 0 3-0.4 4.2-1.1C23 50.5 25.6 52 32 52s9-1.5 10.8-6.1C45 48 48 49 48 51c0 3.1-6.2 10-12 10v2c6 0 12-8 12-10 0-3.1-3-5-5.1-6.4C49.1 47.6 56 50 56 52c0 3.2-6 10-12 10v2c6 0 12-8 12-10 1.7-3 0-7-4-7h-2c0-6.5-5.2-12-11.5-12H19c3.2-4.4 6.2-9.8 6.2-15.5C25.2 5.9 29.5 2 32 2z"
                fill="#3a3a3a"
            />
            <path
                d="M18 18c-4-4-2-8-2-8s4 2 8 4 2 6 2 6-6 2-8-2z"
                fill="#7a7a7a"
            />
            <path
                d="M32 26c-5 0-9 2-9 2s4-3 9-3 9 3 9 3-4 2-9 2z"
                fill="#b4b4b4"
            />
            <circle cx="24" cy="12" r="2" fill="#ff4500" />
            <circle cx="40" cy="12" r="2" fill="#ff4500" />
            <path
                d="M24 8c-1.5 0-3-3-3-3s1.5 3 3 3 3-3 3-3-1.6 3-3 3z"
                fill="#000"
            />
        </svg>
    );
};

export default Dragon;