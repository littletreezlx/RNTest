import React from 'react'
import {
  Tabs,
  CollapsibleRef,
  CollapsibleProps,
} from '../../downloadCollapse'
import Albums from './Shared/Albums'
import Article from './Shared/Article'
import Contacts from './Shared/Contacts'
import { HEADER_HEIGHT } from './Shared/Header'
import SectionContacts from './Shared/SectionContacts'

type Props = {
  emptyContacts?: boolean
} & Partial<CollapsibleProps>

const Example = React.forwardRef<CollapsibleRef, Props>(
  ({ emptyContacts, ...props }, ref) => {
    return (
      <Tabs.Container ref={ref} headerHeight={HEADER_HEIGHT} {...props}>
        <Tabs.Tab name="article" label="Article">
          <Article />
        </Tabs.Tab>
        <Tabs.Tab name="albums" label="Albums">
          <Albums />
        </Tabs.Tab>
        <Tabs.Tab name="contacts" label="Contacts">
          <Contacts emptyContacts={emptyContacts} />
        </Tabs.Tab>
        <Tabs.Tab name="ordered" label="Ordered">
          <SectionContacts emptyContacts={emptyContacts} />
        </Tabs.Tab>
      </Tabs.Container>
    )
  }
)

export default Example
