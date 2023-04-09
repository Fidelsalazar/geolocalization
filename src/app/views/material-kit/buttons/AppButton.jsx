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
     

      
     

      <Box py="12px" />

      <SimpleCard title="different size buttons">
        <Fab size="small" color="secondary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>

        <Fab size="medium" color="secondary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>

        <Fab color="secondary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="outlined buttons">
        <Fab color="primary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>

        <Fab color="secondary" aria-label="Edit" className="button">
          <Icon>edit_icon</Icon>
        </Fab>

        <Fab variant="extended" aria-label="Delete" className="button">
          <Icon sx={{ mr: 4 }}>navigation</Icon>
          Extended
        </Fab>

        <Fab disabled aria-label="Delete" className="button">
          <Icon>delete</Icon>
        </Fab>
      </SimpleCard>
    </AppButtonRoot>
  );
}
