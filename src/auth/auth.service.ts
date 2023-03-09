import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs'
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async login(signInDto: AuthDto): Promise<{ token: string }> {
    const { email, password } = signInDto

    const user = await this.userModel.findOne({ email })

    if (!user) throw new UnauthorizedException('Invalid email')

    const isMatchedPassword = await bcrypt.compare(password, user.password)

    if (!isMatchedPassword) throw new UnauthorizedException('Invalid password')

    const token = this.jwtService.sign({ id: user._id })

    return { token }
  }

  async signUp(signUpDto: AuthDto) {
    const { email, password } = signUpDto

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.userModel.create({
      email: email,
      password: hashedPassword
    })

    const token = this.jwtService.sign({ id: user._id })

    return { token }
  }

}