import { IsEnum, IsString } from 'class-validator';

export enum VehicleStatus {
  Active = 'Active',
  UnderMaintenance = 'Under Maintenance',
  Retired = 'Retired',
}

export class MaintenanceTaskDto {
  @IsEnum(VehicleStatus)
  currentStatus: VehicleStatus;

  @IsString()
  maintenanceTask: string;
}
