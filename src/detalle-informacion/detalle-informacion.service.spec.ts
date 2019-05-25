import { Test, TestingModule } from '@nestjs/testing';
import { DetalleInformacionService } from './detalle-informacion.service';

describe('DetalleInformacionService', () => {
  let service: DetalleInformacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleInformacionService],
    }).compile();

    service = module.get<DetalleInformacionService>(DetalleInformacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
