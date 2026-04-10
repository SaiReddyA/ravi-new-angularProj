import { CanActivateFn } from '@angular/router';

export const routecheckerGuard: CanActivateFn = (route, state) => {
  return false;
};
