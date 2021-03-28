import React from 'react'
import styled from '../../../../../lib/v2/styled'
import SidebarContextList from '../atoms/SidebarContextList'
import SidebarHeader from '../atoms/SidebarHeader'
import SidebarItem, { FoldingProps } from '../atoms/SidebarTreeItem'
import cc from 'classcat'

interface SidebarTreeProps {
  tree: SidebarNavCategory[]
}

export type SidebarTreeChildRow = SidebarNavRow & Partial<SidebarFoldingNavRow>

export interface SidebarNavCategory {
  label: string
  folded: boolean
  controls?: SidebarNavControls[]
  folding?: FoldingProps
  displayed?: boolean
  toggleDisplayed?: () => void
  rows: SidebarTreeChildRow[]
}

type SidebarFoldingNavRow = SidebarNavRow & {
  folded: boolean
  folding: FoldingProps
  rows: SidebarTreeChildRow[]
}

interface SidebarNavRow {
  id: string
  emoji?: string
  defaultIcon?: string
  label: string
  depth: number
  navigateTo?: () => void
  controls?: SidebarNavControls[]
}

type SidebarNavControls =
  | { icon: string; onClick: () => void }
  | { icon: string; create: () => Promise<void> }

const SidebarTree = ({ tree }: SidebarTreeProps) => (
  <Container className='sidebar__tree'>
    <SidebarHeader label='Explorer'>{tree.length > 0 && <>in</>}</SidebarHeader>
    <SidebarContextList className='sidebar__tree__wrapper'>
      {tree.map((category) => {
        return (
          <>
            <SidebarItem
              className='sidebar__category'
              id={`category-${category.label}`}
              label={category.label}
              labelClick={category.folding?.toggle}
              folding={category.folding}
              folded={category.folded}
              depth={-1}
            />
            {!category.folded && (
              <div className='sidebar__category__items'>
                <NestedRows rows={category.rows} />
              </div>
            )}
          </>
        )
      })}
    </SidebarContextList>
  </Container>
)

const NestedRows = ({ rows }: { rows: SidebarTreeChildRow[] }) => {
  return (
    <>
      {rows.map((child) => {
        return (
          <div className={cc([])} key={child.id}>
            <SidebarItem
              key={child.id}
              id={`tree-item-${child.id}`}
              label={child.label}
              labelClick={child.navigateTo}
              folding={child.folding}
              folded={child.folded}
              depth={child.depth}
              emoji={child.emoji}
              defaultIcon={child.defaultIcon}
            />
            {!child.folded && (child.rows || []).length > 0 && (
              <NestedRows rows={child.rows || []} />
            )}
          </div>
        )
      })}
    </>
  )
}

export default SidebarTree

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .sidebar__tree__wrapper {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .sidebar__category {
    flex: 0 0 auto;
  }

  .sidebar__category + .sidebar__category {
    border-top: none;
  }

  .sidebar__category__items {
    flex-shrink: 2;
    overflow: auto;
  }
`
