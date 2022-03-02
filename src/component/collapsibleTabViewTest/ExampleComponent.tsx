import React from 'react';
import {Tabs, CollapsibleRef, CollapsibleProps} from '../../downloadCollapse';
import Albums from '../../component/collapsibleTabViewTest/Shared/Albums';
import Article from '../../component/collapsibleTabViewTest/Shared/Article';
import Contacts from '../../component/collapsibleTabViewTest/Shared/Contacts';
import {HEADER_HEIGHT} from '../../component/collapsibleTabViewTest/Shared/Header';
import SectionContacts from '../../component/collapsibleTabViewTest/Shared/SectionContacts';

type Props = {
  emptyContacts?: boolean;
} & Partial<CollapsibleProps>;

const Example = React.forwardRef<CollapsibleRef, Props>(
  ({emptyContacts, ...props}, ref) => {
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
    );
  },
);

export default Example;
