'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Home() {
  // const [appError, setAppError] = useState(false);
  // const handleSetAppError = () => {
  //   setAppError(true);
  // };
  // return appError ? (
  //   Error()
  // ) : (
  //   <div className="" onClick={handleSetAppError}>
  //     Hello, World!
  //   </div>
  // );

  const router = useRouter();

  return (
    <div className="flex gap-8">
      <Link href="/dashboard" scroll={false}>
        Dashboard
      </Link>
      <span
        onClick={() => {
          router.push('/blog', {scroll: false});
        }}
        className="cursor-pointer"
      >
        blog
      </span>
      <Link href="/redirect" scroll={false}>
        redirect
      </Link>
    </div>
  );
}
