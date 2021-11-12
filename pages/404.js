import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h2>Oooooppsss</h2>
      <h2>Page Not found</h2>
      <p>
        <Link href="/">
          <a>Go To Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
