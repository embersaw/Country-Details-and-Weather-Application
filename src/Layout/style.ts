import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';

export const BackdropStyled = styled(Backdrop)(({ theme }) => ({
  zIndex: Math.max(...Object.values(theme.zIndex)) + 1,
  color: '#fff',
}));
