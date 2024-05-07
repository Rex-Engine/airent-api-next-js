import { wrappableHandle } from '@airent/api';

import { handlerConfig } from '../../../../framework.js';

import { parser, validator, executor } from '../../../../webhooks/my-webhook.js';

export const POST = wrappableHandle({ 
  ...handlerConfig,
  parser,
  validator,
  executor,
});
