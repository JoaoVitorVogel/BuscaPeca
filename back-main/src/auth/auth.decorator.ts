import { SetMetadata } from '@nestjs/common';

// Define o decorator Auth que aceita um array de roles
export const Auth = (...roles: string[]) => SetMetadata('roles', roles);
