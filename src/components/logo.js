import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
export const Logo = ({ size = 60 }) => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Image src="/assets/logo.png"
      height={size}
      width={size} />
  );
};
