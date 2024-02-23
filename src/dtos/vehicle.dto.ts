import {
  IsString,
  IsInt,
  Max,
  IsOptional,
  IsEnum,
  Length,
} from 'class-validator';
import { VehicleStatus } from './maintenanceTask.dto';
export class VehicleDto {
  @IsString()
  @Length(2, 20)
  make: string;

  @IsString()
  vehicleModel: string;

  @IsInt()
  @Max(2024)
  year: number;

  @IsString()
  registrationNumber: string;

  @IsEnum(VehicleStatus)
  currentStatus: VehicleStatus;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  driver?: string;

  @IsOptional()
  @IsString()
  maintenanceTask?: string;
}
