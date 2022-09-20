import React from 'react';

export default function Container({ children }) {
    return (
        <div className="mx-auto max-w-screen-lg px-4 sm:px-8">{children}</div>
    );
}
