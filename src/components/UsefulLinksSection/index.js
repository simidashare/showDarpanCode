import {
  ContentContainer,
  ContentWrapper,
  LinkListWrapper,
  LinkItemList,
  LinkItem,
  IconWrapper,
  OpenIcon,
} from "./UsefulLinksElements";
import { links } from "./Data";

const UsefulLinksSection = () => {
  const linkItems = links.map((item) => {
    return (
      <LinkItemList key={item.id}>
        <IconWrapper>
          <OpenIcon />
        </IconWrapper>
        <LinkItem href={item.url} target="_blank">
          {item.id}
        </LinkItem>
      </LinkItemList>
    );
  });
  return (
    <ContentContainer>
      <ContentWrapper>
        <LinkListWrapper>{linkItems}</LinkListWrapper>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default UsefulLinksSection;
