import { Interweave } from "interweave";
import type { Node } from "interweave";
import { polyfill } from "interweave-ssr";

import { LogLink } from "./log-link";

const html = `
<article>
  <a href="https://google.com" className="replace-this">This link is hijacked by LogLink Component. Check the browser console.</a>
<article>
`;

function transform(node: HTMLElement, children: Node[]): React.ReactNode {
  if (node.tagName === 'a') {
    return <LogLink href={node.getAttribute('href') ?? ''}>{children}</LogLink>;
  }
}

export default function Home() {
  // TODO: move to somewhere appropriate
  polyfill();

  return (
    <Interweave
      content={html}
      transform={transform}
    />
  );
}
