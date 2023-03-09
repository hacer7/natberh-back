import { AuthDto } from './dto/auth.dto';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @Get('qwe')
  // qwe() {
  //   return 'qwe'
  // }

  @Post('login')
  login(@Body() signInDto: AuthDto) {
    return this.authService.login(signInDto)
  }

  @Post('signUp')
  signUp(@Body() signUpDto: AuthDto): Promise<{ token }> {
    return this.authService.signUp(signUpDto)
  }
}