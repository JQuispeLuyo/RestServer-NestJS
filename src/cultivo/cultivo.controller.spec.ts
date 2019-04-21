import { Test, TestingModule } from '@nestjs/testing';
import { CultivoController } from './cultivo.controller';

describe('Cultivo Controller', () => {
  let controller: CultivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CultivoController],
    }).compile();

    controller = module.get<CultivoController>(CultivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
