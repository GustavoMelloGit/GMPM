import styled from "styled-components";
import { Box } from "@mui/system";
import colors from "../../../../styles/colors";
import { Container } from "@mui/material";

export const VerticalNavContainer = styled(Box)`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const VerticalNavListContainer = styled(Box)`
    width: 25rem;
    height: 100%;
    background-color: ${colors.blue[500]};
`;

export const VerticalNavContentContainer = styled(Container)`
    padding-top: 5rem;
`;
export const VerticalNavContentWrapper = styled(Box)`
    width: 100%;
    height: 100%;
    background-color: ${colors.gray[700]};
`;