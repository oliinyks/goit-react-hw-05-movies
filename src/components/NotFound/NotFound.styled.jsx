import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ErrorMessage = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`
export const StyledLink = styled(Link)`
	color: inherit;
	margin-left: 5px;
`