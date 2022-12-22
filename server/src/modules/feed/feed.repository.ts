import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from '../comments/schemas/comments.schema';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './schemas/feed.schema';
import { Users } from '../users/schemas/users.schema';
import { Injectable } from '@nestjs/common';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { FilterFeedOptionsDto } from './dto/filter-feed-options.dto';

@Injectable()
export class FeedRepository {
  constructor(
    @InjectModel(Feed.name) private readonly feedModel: Model<Feed>,
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async createFeed(createFeedDto: CreateFeedDto) {
    const newFeed = await this.feedModel.create(createFeedDto);
    return newFeed;
  }

  async findAll() {
    const feeds = await this.feedModel
      .find()
      .populate('comments', '', this.commentsModel);
    return feeds;
  }
  async findAllWithQuery(filter) {
    const feeds = await this.feedModel
      .find(filter)
      .populate('comments', '', this.commentsModel)
      .populate('author', '', this.userModel);
    return feeds;
  }
  async findAllById(id: string) {
    const feeds = await this.feedModel.find({ author: id });
    return feeds;
  }

  async findOneById(id: string) {
    const feed = await this.feedModel
      .findOne({ _id: id })
      .populate('comments', '', this.commentsModel);
    return feed;
  }

  async findPage(filter: FilterFeedOptionsDto, pageOptionsDto: PageOptionsDto) {
    console.log(filter);
    return await this.feedModel
      .find(filter)
      .sort({ createdAt: pageOptionsDto.order })
      .skip(pageOptionsDto.skip)
      .limit(pageOptionsDto.take)
      .populate('comments', '', this.commentsModel)
      .populate('author', '', this.userModel);
  }

  async countDocuments() {
    return await this.feedModel.countDocuments({});
  }

  async delete(filter: any) {
    const result = await this.feedModel.findOneAndDelete(filter).exec();
    return result;
  }
}