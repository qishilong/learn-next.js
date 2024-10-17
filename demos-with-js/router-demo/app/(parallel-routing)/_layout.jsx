import './globals.css';
import Link from 'next/link';

const ParallelRoutingLayout = ({children, team, analytics}) => {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav>
          <Link href="/">Home</Link>
          <br />
          <Link href="/page-views">Page Views</Link>
          <br />
          <Link href="/visitors">Visitors</Link>
        </nav>
        <div className="flex gap-6 w-screen h-screen">
          {children}
          {team}
          {analytics}
        </div>
      </body>
    </html>
  );
};

export default ParallelRoutingLayout;
