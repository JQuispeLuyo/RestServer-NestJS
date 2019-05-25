import { Test, TestingModule } from '@nestjs/testing';
import { DetalleInformacionController } from './detalle-informacion.controller';

describe('DetalleInformacion Controller', () => {
  let controller: DetalleInformacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleInformacionController],
    }).compile();

    controller = module.get<DetalleInformacionController>(DetalleInformacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
