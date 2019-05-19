import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const ControlTab = ({ order, onClick }) => {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <Button.Group basic size="mini" floated="right">
              <Button value={'priority'} active={order === 'priority'} onClick={onClick}>
                우선순위
              </Button>
              <Button value={'deadline'} active={order === 'deadline'} onClick={onClick}>
                마감기한
              </Button>
            </Button.Group>
            {/* <Button.Group basic size="mini" floated="right">
              <Button active>Active</Button>
              <Button>Completed</Button>
            </Button.Group> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ControlTab;
