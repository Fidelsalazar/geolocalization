import { Box, Button, Fab, Icon, IconButton, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';

const AppButtonRoot = styled('div')(({ theme }) => ({
  
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
  '& .button': { margin: theme.spacing(1) },
  '& .input': { display: 'none' },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  background: '#017550',
  color: 'white',
}));

export default function AppButton() {
  return (
    <AppButtonRoot>
      
        <Fab 
          variant="extended" 
          aria-label="Delete" 
          className="button"
          style={{position: 'fixed', top: '65%', right: 20}}
        >
          <Icon sx={{ mr: 1 }}>navigation</Icon>
          Save
        </Fab>
      
    </AppButtonRoot>
  );
}
