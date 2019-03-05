import { Counter } from './Counter';
import { hideable } from './hideable';

const HideableCounter = hideable(Counter);

export {
  HideableCounter,
}