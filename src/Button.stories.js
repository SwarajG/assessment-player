import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button.tsx';

storiesOf('Button', module)
.addWithJSX('Normal button', () => <Button text="Hello World" />)