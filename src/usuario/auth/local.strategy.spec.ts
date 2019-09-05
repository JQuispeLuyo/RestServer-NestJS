import { Test, TestingModule } from '@nestjs/testing';
import { Local.Strategy } from './local.strategy';

describe('Local.Strategy', () => {
  let provider: Local.Strategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Local.Strategy],
    }).compile();

    provider = module.get<Local.Strategy>(Local.Strategy);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
