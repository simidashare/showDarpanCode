import styled from "styled-components";
import Colors from "../../Colors/index";

const colorDarkLi1 = Colors.color2nd;
const colorDarkLi2 = Colors.color5th;

export const ListItem = styled.li`
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  text-decoration: none;
  font-size: 1.8rem;
  line-height: 1.3;
  color: ${({ darkLi }) => (darkLi ? colorDarkLi1 : colorDarkLi2)};
`;
