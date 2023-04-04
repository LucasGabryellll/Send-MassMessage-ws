import React  from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';

type Props = {
  descriptionAlert: string;
  setData: React.Dispatch<React.SetStateAction<boolean>>
  data: boolean
}

export function MuiAlert({ descriptionAlert, setData, data }: Props) {

  return (
    <>
      {data &&
        < Box sx={{ display: "flex", flex: 1, width: '100%', alignItems: "center" }}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
              >

              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {descriptionAlert}

            <Button onClick={() => setData(false)}>
              X
            </Button>
          </Alert>
        </Box >
      }
    </>
  );
}