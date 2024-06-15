import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Unstable_Grid2 as Grid,
  Stack,
  Typography
} from '@mui/material';
import { useCallback } from 'react';

export const SettingsNotifications = () => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="Gestion des notifications"
          title="Notifications"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              xs={12}
              sm={6}
              md={4}
            >
              <Stack spacing={1}>
                <Typography variant="h6">
                  Notifications
                </Typography>
                <Stack>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Messages"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Appels"
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Stack spacing={1}>
                <Typography variant="h6">
                  Messages
                </Typography>
                <Stack>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Appels"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Sauvegarder
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
