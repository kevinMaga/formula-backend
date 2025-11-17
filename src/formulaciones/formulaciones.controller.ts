import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FormulacionesService } from './formulaciones.service';
import { CreateFormulacionDto, UpdateFormulacionDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('formulaciones')
@UseGuards(JwtAuthGuard)
export class FormulacionesController {
  constructor(private readonly formulacionesService: FormulacionesService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateFormulacionDto) {
    return this.formulacionesService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.formulacionesService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.formulacionesService.findOne(id, req.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Request() req,
    @Body() dto: UpdateFormulacionDto,
  ) {
    return this.formulacionesService.update(id, req.user.id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.formulacionesService.remove(id, req.user.id);
  }
}