import React from 'react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

function Default({ title = 'Default', children }: Props) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1><a href="/florals">Sparkley Event Planner</a></h1>
          </header>
          <div className="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

export default Default;
