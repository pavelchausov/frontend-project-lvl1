#!/usr/bin/env node

import { greetings, game } from '../src/index.js';
import getEvenRules from '../games/get-even-rules.js';

const userName = greetings();
const gameRules = getEvenRules();
game({
  userName,
  gameRules,
});
