import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { AuthService } from 'src/auth/service/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDTO } from '../dtos/auth.dto';
import { Public } from '../public.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Sign in' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'newuser@email.com',
        },
        password: {
          type: 'string',
          example: 'password',
        },
      },
    },
  })
  @Public()
  @Post('sign_in')
  @HttpCode(200)
  async signIn(@Body() auth: AuthDTO): Promise<{
    accessToken: string;
  }> {
    return this.authService.signIn(auth.email, auth.password);
  }
}
