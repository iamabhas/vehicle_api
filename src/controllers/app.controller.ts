import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Delete,
  Param,
} from '@nestjs/common';
import { AppService } from '../app.service';
import { VehicleDto } from 'src/dtos/vehicle.dto';
import { IVehicle } from 'src/models/vehicles.model';
import { MaintenanceTaskDto } from 'src/dtos/maintenanceTask.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-all-vehicles')
  async getAllVehicles(): Promise<IVehicle[]> {
    const vehicles = await this.appService.getAllVehicles();
    if (!vehicles) {
      throw new Error('Error Fetching Vehicles');
    }
    return vehicles;
  }

  @Get('/get-vehicle/:id')
  async getVehicleById(@Param('id') id: string): Promise<IVehicle> {
    const vehicle = await this.appService.getVehicleById(id);
    if (!vehicle) {
      throw new Error('Vehicle not found');
    }
    return vehicle;
  }

  @Post('/add-vehicle')
  async addVehicle(@Body() vehicle_dto: VehicleDto): Promise<any> {
    try {
      const newVehicle = await this.appService.addVehicle(vehicle_dto);
      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: 'Vehicle added !',
        data: newVehicle,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          statusCode: HttpStatus.BAD_REQUEST,
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('/delete-vehicle/:registrationNum')
  async deleteVehicle(
    @Param('registrationNum') registrationNum: string,
  ): Promise<any> {
    const response = await this.appService.deleteVehicle(registrationNum);
    return { message: `${response}` };
  }

  @Post('/update-vehicle/:registrationNum')
  async updateVehicle(
    @Param('registrationNum') registrationNum: string,
    @Body() vehicle_dto: VehicleDto,
  ): Promise<any> {
    return this.appService.updateVehicle(registrationNum, vehicle_dto);
  }

  @Post('/assign-driver/:registrationNum')
  async assignDriver(
    @Param('registrationNum') registrationNum: string,
    @Body('driver') driver: string,
  ): Promise<any> {
    await this.appService.assignDriver(registrationNum, driver);
    return {
      message: `Driver ${driver} has been assigned to vehicle ${registrationNum}.`,
    };
  }

  @Post('/maintenance-task/:registrationNum')
  async manageMaintenanceTask(
    @Param('registrationNum') registrationNum: string,
    @Body() taskDto: MaintenanceTaskDto,
  ): Promise<any> {
    await this.appService.manageMaintenanceTask(registrationNum, taskDto);
    return {
      status: `Vehicle of number ${registrationNum} is ${taskDto.currentStatus}`,
      maintenanceTask: taskDto.maintenanceTask,
    };
  }
}
