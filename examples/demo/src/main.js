import { greet } from '@scope/example-package';

const target = document.getElementById('greeting');
if (target) target.textContent = greet('World');
