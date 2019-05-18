import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button, Form, Message, TextArea, Divider } from 'semantic-ui-react';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

const NewContainer = ({ title, content, onChange, onCreate, error }) => (
  <Wrapper>
    <Form error={error}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <Input
              name="title"
              fluid
              size="large"
              placeholder="할 일을 입력해주세요."
              value={title}
              onChange={onChange}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={14}>
            <TextArea
              name="content"
              rows={1}
              size="large"
              placeholder="설명도 입력해주세요."
              value={content}
              onChange={onChange}
            />
          </Grid.Column>
          <Grid.Column width={2}>
            <Button circular icon="plus" size="large" onClick={onCreate} />
          </Grid.Column>
        </Grid.Row>
        {error ? (
          <Grid.Row>
            <Grid.Column width={14}>
              <Message width={14} error={error} content="제목이 없는 Todo는 만들 수 없습니다." />
            </Grid.Column>
          </Grid.Row>
        ) : (
          <></>
        )}
        <Grid.Row>
          <Grid.Column width={14}>
            <Divider />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  </Wrapper>
);

export default NewContainer;
