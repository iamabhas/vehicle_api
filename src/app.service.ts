import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IVehicle } from './models/vehicles.model';
import { VehicleDto } from './dtos/vehicle.dto';
import { MaintenanceTaskDto } from './dtos/maintenanceTask.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(@InjectModel('Vehicle') private vehicleModel: Model<IVehicle>) {}

  async getAllVehicles(): Promise<IVehicle[]> {
    return this.vehicleModel.find();
  }

  async getVehicleById(id: string): Promise<IVehicle | null> {
    return this.vehicleModel.findById(id);
  }

  async addVehicle(vehicle_dto: VehicleDto): Promise<IVehicle> {
    const newVehicle = new this.vehicleModel(vehicle_dto);
    return newVehicle.save();
  }

  async deleteVehicle(registrationNumber: string): Promise<any> {
    const result = await this.vehicleModel.deleteOne({ registrationNumber });
    if (result.deletedCount === 0) {
      return 'No vehicle found !';
    } else {
      return `Vehicle of registration number ${registrationNumber} deleted ! !`;
    }
  }

  async updateVehicle(
    registrationNumber: string,
    vehicle_dto: VehicleDto,
  ): Promise<IVehicle> {
    const updatedVehicle = await this.vehicleModel.findOneAndUpdate(
      { registrationNumber },
      vehicle_dto,
      { new: true },
    );
    if (!updatedVehicle) {
      throw new Error('Vehicle not found');
    }
    return updatedVehicle;
  }

  async assignDriver(
    registrationNumber: string,
    driver: string,
  ): Promise<IVehicle> {
    const vehicle = await this.vehicleModel.findOne({ registrationNumber });
    if (!vehicle) {
      throw new Error('Vehicle not found !');
    }

    vehicle.driver = driver;
    return vehicle.save();
  }

  async manageMaintenanceTask(
    registrationNumber: string,
    taskDto: MaintenanceTaskDto,
  ): Promise<IVehicle> {
    const vehicle = await this.vehicleModel.findOne({ registrationNumber });
    if (!vehicle) {
      throw new Error('Vehicle not found !');
    }

    vehicle.currentStatus = taskDto.currentStatus;
    vehicle.maintenanceTask = taskDto.maintenanceTask;
    return vehicle.save();
  }
}
