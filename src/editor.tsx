import { jsonFromNode, type NodeJSON } from 'prosekit/core'
import type { ProseMirrorNode } from 'prosekit/pm/model'
import { ProseKit, useDocChange } from 'prosekit/react'
import { useCallback, useMemo } from 'react'

import { createMarkdownEditor } from './create-editor'

const markdownContent = `
asdfsdaf***safsdf*** as
dfasdf \`asdf\` 

lorem\\
ipsum

foo  
bar

\`\`\`ts
const xx: string = 'yy'
\`\`\`

1. xx
2. 123

- asdf
- werq

`

export function Editor(props: {
  defaultDoc?: NodeJSON
  onDocUpdate?: (doc: NodeJSON) => void
}) {
  const editor = useMemo(() => {
    const { editor, markdown } = createMarkdownEditor()
    const doc = markdown.fromMarkdownText(markdownContent)
    editor.setContent(doc)
    return editor
  }, [])

  const handleDocChange = useCallback(
    (doc: ProseMirrorNode) => props.onDocUpdate?.(jsonFromNode(doc)),
    [props.onDocUpdate]
  )
  useDocChange(handleDocChange, { editor })

  return (
    <ProseKit editor={editor}>
      <div className="box-border h-full w-full min-h-36 overflow-y-hidden overflow-x-hidden rounded-md border border-solid border-gray-200 shadow dark:border-zinc-700 flex flex-col bg-white dark:bg-neutral-900">
        <div className="relative w-full flex-1 box-border overflow-y-scroll">
          <div
            ref={editor.mount}
            className='ProseMirror box-border min-h-full px-[max(40px,_calc(50%-330px))] py-[24px] outline-none outline-0 [&_span[data-mention="user"]]:text-blue-500 [&_span[data-mention="tag"]]:text-violet-500 [&_pre]:text-white [&_pre]:bg-zinc-800'
          />
        </div>
      </div>
    </ProseKit>
  )
}
