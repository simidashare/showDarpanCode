import { ListContainer, ListWrapper } from "./ListComponentsElements";

const ListComponents = ({ listDescription }) => {
  return (
    <>
      <ListContainer>
        <ListWrapper>{listDescription}</ListWrapper>
      </ListContainer>
    </>
  );
};

export default ListComponents;
