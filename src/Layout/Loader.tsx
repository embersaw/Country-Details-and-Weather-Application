import CircularProgress from '@mui/material/CircularProgress';

import { BackdropStyled } from './style';

type props = {
  show: boolean;
};

export const Loader = (props: props) => {
  return (
    <div>
      <BackdropStyled open={props.show}>
        <CircularProgress color='inherit' />
      </BackdropStyled>
    </div>
  );
};
