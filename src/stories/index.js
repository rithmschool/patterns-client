import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PrimarySecondaryButton from '../components/atoms/PrimarySecondaryButton';
import { Button, Welcome } from '@storybook/react/demo';
import WideButton from '../components/atoms/WideButton';
import LongDataDisplay from '../components/atoms/LongDataDisplay';
import Modal from '../components/molecules/Modal';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('WideButton')} />
));

storiesOf('WideButton', module).add('with text', () => (
  <WideButton onClick={action('clicked')}>Wide Button</WideButton>
));

storiesOf('Modal', module).add('testing', () => <Modal />);

storiesOf('PrimarySecondaryButton', module)
  .add('primary colored button', () => (
    <PrimarySecondaryButton primary onClick={action('clicked')}>
      ADD
    </PrimarySecondaryButton>
  ))
  .add('secondary button', () => (
    <PrimarySecondaryButton onClick={action('clicked')}>
      EDIT
    </PrimarySecondaryButton>
  ));

storiesOf('LongDataDisplay', module).add('long data display', () => (
  <LongDataDisplay />
));
