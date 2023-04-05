import { useEffect } from "react";
import { isAuthenticated } from "./auth";
import { useRouter } from "next/router";

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAuth = (props: P) => {
    const router = useRouter();
    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace("/");
      }
    }, [router]);
    return <WrappedComponent {...props} />;
  };
  return WithAuth;
};
