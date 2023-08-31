import React, { ReactNode } from 'react';

export default function RootLayout({ children }: {
    children: ReactNode;
})
{
    return (
        <html lang="en">
            <head>
                <title>Of!True Engineering</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" type="image/x-icon" href="/" />
            </head>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}