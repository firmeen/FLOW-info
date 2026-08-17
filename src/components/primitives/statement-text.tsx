import type { ReactNode } from "react";

import { EmphasisText, type EmphasisTone } from "@/components/primitives/emphasis-text";

export type StatementHighlight = {
  text: string;
  tone?: EmphasisTone;
};

export function StatementText({
  text,
  highlights = [],
  inverse = false,
}: {
  text: string;
  highlights?: readonly StatementHighlight[];
  inverse?: boolean;
}) {
  if (highlights.length === 0) return <>{text}</>;

  const nodes: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let next:
      | { index: number; highlight: StatementHighlight }
      | undefined;

    for (const highlight of highlights) {
      const index = text.indexOf(highlight.text, cursor);
      if (index === -1) continue;
      if (!next || index < next.index) next = { index, highlight };
    }

    if (!next) {
      nodes.push(text.slice(cursor));
      break;
    }

    if (next.index > cursor) nodes.push(text.slice(cursor, next.index));

    nodes.push(
      <EmphasisText
        key={`${next.highlight.text}-${next.index}`}
        tone={inverse && !next.highlight.tone ? "inverse" : next.highlight.tone ?? "strong"}
      >
        {next.highlight.text}
      </EmphasisText>,
    );

    cursor = next.index + next.highlight.text.length;
  }

  return <>{nodes}</>;
}
