// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.scss";

const Root = () => {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Cloudflare Pages</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="bg-[url('/background.png')]">
        <Suspense>
          <ErrorBoundary>
            <div class="fixed top-0 left-0 bg-blue-400 bg-opacity-50 w-full">
              <A
                class="inline-block font-normal text-blue-950 dark:text-blue-600 hover:underline ml-4 my-1"
                href="/"
              >
                Index
              </A>
              <A
                class="inline-block font-normal text-blue-950 dark:text-blue-600 hover:underline ml-4 my-1"
                href="/xyz"
              >
                XYZ
              </A>
            </div>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
};

export default Root;
