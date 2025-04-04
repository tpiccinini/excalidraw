import dynamic from "next/dynamic";

import "../common.scss";

// Since client components get prerenderd on server as well hence importing the excalidraw stuff dynamically
// with ssr false
const Excalidraw = dynamic(
  async () => (await import("../excalidrawWrapper")).default,
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <>
      <Excalidraw />
    </>
  );
}
