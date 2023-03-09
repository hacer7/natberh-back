import { User } from './schemas/user.schema';
import { AuthDto } from './dto/auth.dto';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({summary: 'login'})
  @ApiResponse({status: 200, type: User})
  @Post('login')
  login(@Body() signInDto: AuthDto) {
    return this.authService.login(signInDto)
  }

  @Post('signUp')
  signUp(@Body() signUpDto: AuthDto): Promise<{ token }> {
    return this.authService.signUp(signUpDto)
  }
}