import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from '../components/atoms/Button';
import AddEditButton from '../components/atoms/AddEditButton';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Adele</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('AddEditButton', module)
  .add('primary button', () => (
    <AddEditButton primary onClick={action('clicked')}>
      ADD
    </AddEditButton>
  ))
  .add('not primary button', () => (
    <AddEditButton onClick={action('clicked')}>EDIT</AddEditButton>
  ));

//onClick={this.props.toggleModal}
