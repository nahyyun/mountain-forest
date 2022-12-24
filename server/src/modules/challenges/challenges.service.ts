import { ObjectId, Types } from 'mongoose';
import { ChallengeDto } from './dto/challenges.dto';
import { ChallengesRepository } from './challenges.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { ResponseChallengeDto } from './dto/response-challenges.dto';
import { ResponseStatusDto } from 'src/common/dto/response-status';
import { UsersDto } from '../users/dto/users.dto';
import { Level, levelToPoint } from 'src/common/enums/level.enum';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { FilterAdminChallengesOptionsDto } from './dto/filter-admin-challenges-options.dto';
import { PageMetaDto } from 'src/common/dto/page-meta.dto';
import { PageDto } from 'src/common/dto/page.dto';

@Injectable()
export class ChallengesService {
  constructor(private readonly challengesRepository: ChallengesRepository) {}
  async create(
    currentUser: UsersDto,
    createChallengeDto: CreateChallengeDto,
  ): Promise<ResponseStatusDto> {
    const challengeDto = {
      ...createChallengeDto,
      organizer: new Types.ObjectId(currentUser._id),
      point: levelToPoint(createChallengeDto.level),
    };
    const newChallenge = await this.challengesRepository.create(challengeDto);
    if (!newChallenge) {
      throw new NotFoundException({
        status: 404,
        message: '생성에 실패했습니다 ',
      });
    }
    return { status: 201, message: 'success' };
  }

  async findAll() {
    return await this.challengesRepository.findAll();
  }
  async findAllByUserId(userId: string) {
    const filter = { organizer: new Types.ObjectId(userId) };
    return await this.challengesRepository.findAllByFilter(filter);
  }

  async findOneById(id: string): Promise<ResponseChallengeDto> {
    const challenge = await this.challengesRepository.findOneById(id);
    return new ResponseChallengeDto(challenge);
  }

  async updateById(
    id: string,
    updateChallengeDto: UpdateChallengeDto,
  ): Promise<ResponseStatusDto> {
    const result = await this.challengesRepository.updateById(
      id,
      updateChallengeDto,
    );
    if (!result) {
      throw new NotFoundException({
        status: 404,
        message: '업데이트에 실패했습니다',
      });
    }
    return { status: 200, message: 'success' };
  }

  async removeById(id: string): Promise<ResponseStatusDto> {
    const result = await this.challengesRepository.deleteOneById(id);
    if (!result) {
      throw new NotFoundException({
        status: 404,
        message: '삭제에 실패했습니다',
      });
    }
    return { status: 200, message: 'success' };
  }

  async updateApprove(id: string): Promise<ResponseStatusDto> {
    const result = await this.challengesRepository.updateApprove(id);
    if (!result) {
      throw new NotFoundException({
        status: 404,
        message: '업데이트에 실패했습니다',
      });
    }
    return { status: 200, message: 'success' };
  }

  async findPageAdmin(
    filterFeed: FilterAdminChallengesOptionsDto,
    pageOptionsDto: PageOptionsDto,
  ) {
    const filter = {};

    const [itemCount, feeds] = await Promise.all([
      this.challengesRepository.countDocuments(filter),
      this.challengesRepository.findPage(filter, pageOptionsDto),
    ]);
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    return new PageDto(feeds, pageMetaDto);
  }
}
