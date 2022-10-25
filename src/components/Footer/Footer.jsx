import { Box, Text, Link } from './Footer.styled';

export const Footer = () => {
  return (
    <Box>
      <Text>
        &#169; 2022
        <Link
          href="https://github.com/oliinyks"
          rel="noreferrer"
          target="_blank"
        >
          Svitlana Oliinyk
        </Link>
      </Text>
    </Box>
  );
};
