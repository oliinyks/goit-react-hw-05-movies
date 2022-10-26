import { ErrorMessage } from './NotFound.styled';
import {StyledLink} from './NotFound.styled'

export const NotFound = () => {
  return (
    <ErrorMessage>
      Sorry, we didn't find anything. Go to the
		<StyledLink to={"/"}>main page</StyledLink>
    </ErrorMessage>
  );
};