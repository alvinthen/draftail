import React from "react";
import contentStates from "markov_draftjs";

import { DraftailEditor } from "../../lib";

import {
  INLINE_CONTROL,
  BLOCK_CONTROL,
  ENTITY_CONTROL,
} from "../../examples/constants/ui";

const NB_EDITORS = 5;

const benchmarkProps = {
  enableHorizontalRule: true,
  maxListNesting: 1,
  entityTypes: [
    ENTITY_CONTROL.LINK,
    ENTITY_CONTROL.IMAGE,
    ENTITY_CONTROL.DOCUMENT,
  ],
  blockTypes: [
    BLOCK_CONTROL.HEADER_TWO,
    BLOCK_CONTROL.HEADER_THREE,
    BLOCK_CONTROL.HEADER_FOUR,
    BLOCK_CONTROL.UNORDERED_LIST_ITEM,
    BLOCK_CONTROL.ORDERED_LIST_ITEM,
  ],
  inlineStyles: [INLINE_CONTROL.BOLD, INLINE_CONTROL.ITALIC],
};

export default () => (
  <>
    {contentStates.slice(0, NB_EDITORS).map((contentState, i) => (
      <DraftailEditor
        // eslint-disable-next-line @thibaudcolas/cookbook/react/no-array-index-key
        key={i}
        rawContentState={contentState}
        {...benchmarkProps}
      />
    ))}
  </>
);