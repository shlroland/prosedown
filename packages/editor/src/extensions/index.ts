import { defineBasicExtension } from 'prosekit/basic'
import {
  type Union,
  defineBaseKeymap,
  defineHistory,
  union,
} from 'prosekit/core'
import { defineBlockquote } from 'prosekit/extensions/blockquote'
import { astBlockquoteFrom, astBlockquoteTo } from './blockquote'
import { astBreakFrom, decorationBreak, defineBreak } from './break'
import { astCodeFrom, astCodeTo, defineCode } from './code'
import {
  astDeleteFrom,
  decorationDelete,
  defineDelete,
  deleteIndicator,
} from './delete'
import { defineDoc } from './doc'
import {
  astEmphasisFrom,
  decorationEmphasis,
  defineEmphasis,
  emphasisIndicator,
} from './emphasis'
import { astHeadingFrom, astHeadingTo, defineHeading } from './heading'
import {
  astHighlightFrom,
  decorationHighlight,
  defineHighlight,
  highlightIndicator,
  highlightRemark,
} from './highlight'
import {
  astInlineCodeFrom,
  decorationInlineCode,
  defineInlineCode,
  inlineCodeIndicator,
} from './inline-code'
import { astLinkFrom, decorationLink, defineLink, linkIndicator } from './link'
import {
  astBulletListTo,
  astListFrom,
  astOrderedListTo,
  defineList,
} from './list/list'
import {
  astListItemFrom,
  astListItemTo,
  defineListItem,
} from './list/list-item'
import {
  type ParagraphExtension,
  astParagraphFrom,
  astParagraphTo,
  defineParagraph,
  stringToMarkdownPlugin,
} from './paragraph'
import {
  astStrongFrom,
  decorationStrong,
  defineStrong,
  strongIndicator,
} from './strong'
import { defineTable } from './table'
import {
  astTableCellFrom,
  astTableCellTo,
  astTableFrom,
  astTableHeaderlTo,
  astTableRowFrom,
  astTableRowTo,
  astTableTo,
} from './table/ast'
import {
  type TextExtension,
  astTextFrom,
  defineText,
  inlineKeeperRemark,
  textIndicator,
} from './text'
import {
  astThematicBreakFrom,
  astThematicBreakTo,
  defineThematicBreak,
} from './thematic-break'

export function defineBasicDemoExtension() {
  return defineBasicExtension()
}

export type EditorExtension = ReturnType<typeof defineBasicDemoExtension>

export type BasicExtension = Union<[ParagraphExtension, TextExtension]>

export function defineExtension() {
  return union([
    defineDoc(),
    defineText(),
    defineStrong(),
    defineInlineCode(),
    defineParagraph(),
    defineEmphasis(),
    defineHeading(),
    defineBlockquote(),
    defineLink(),
    defineList(),
    defineListItem(),
    defineCode(),
    defineBreak(),
    defineThematicBreak(),
    defineHighlight(),
    defineDelete(),
    defineTable(),
    defineHistory(),
    defineBaseKeymap(),
  ])
}

export function defineAstFrom() {
  return [
    astParagraphFrom(),
    astTextFrom(),
    astStrongFrom(),
    astInlineCodeFrom(),
    astEmphasisFrom(),
    astHeadingFrom(),
    astBlockquoteFrom(),
    astLinkFrom(),
    astListFrom(),
    astListItemFrom(),
    astCodeFrom(),
    astBreakFrom(),
    astThematicBreakFrom(),
    astHighlightFrom(),
    astDeleteFrom(),
    astTableFrom(),
    astTableRowFrom(),
    astTableCellFrom(),
  ] as const
}

export function defineAstTo() {
  return [
    astParagraphTo(),
    astHeadingTo(),
    astBlockquoteTo(),
    astCodeTo(),
    astBulletListTo(),
    astOrderedListTo(),
    astListItemTo(),
    astThematicBreakTo(),
    astTableTo(),
    astTableRowTo(),
    astTableCellTo(),
    astTableHeaderlTo(),
  ]
}

export function defineRemarkPlugins() {
  return [stringToMarkdownPlugin(), highlightRemark(), inlineKeeperRemark()]
}

export function defineDecorationActions() {
  return [
    decorationBreak(),
    decorationEmphasis(),
    decorationInlineCode(),
    decorationLink(),
    decorationStrong(),
    decorationHighlight(),
    decorationDelete(),
  ]
}

export function defineIndicatorContent() {
  return [
    deleteIndicator(),
    emphasisIndicator(),
    highlightIndicator(),
    inlineCodeIndicator(),
    linkIndicator(),
    strongIndicator(),
    textIndicator(),
  ]
}
