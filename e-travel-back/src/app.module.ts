import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { User } from './api/users/entities/user.entity';
import { CountriesModule } from './api/countries/countries.module';
import { Country } from './api/countries/entities/country.entity';
import { ActivitiesModule } from './api/activities/activities.module';
import { Activity } from './api/activities/entities/activity.entity';
import { CalendarsModule } from './api/calendars/calendars.module';
import { Calendar } from './api/calendars/entities/calendar.entity';
import { ContinentsModule } from './api/continents/continents.module';
import { Continent } from './api/continents/entities/continent.entity';
import { DestinationsModule } from './api/destinations/destinations.module';
import { Destination } from './api/destinations/entities/destination.entity';
import { LodgingsModule } from './api/lodgings/lodgings.module';
import { Lodging } from './api/lodgings/entities/lodging.entity';
import { TravelsModule } from './api/travels/travels.module';
import { Travel } from './api/travels/entities/travel.entity';
import { TypeActivitiesModule } from './api/type-activities/type-activities.module';
import { TypeActivity } from './api/type-activities/entities/type-activity.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => ({
        type: 'mysql',
        host: configService.get('DB_host'),
        port: +configService.get('DB_port'),
        username: configService.get('DB_username'),
        password: configService.get('DB_password'),
        database: configService.get('DB_database'),
        entities: [
          User,
          Country,
          Activity,
          Calendar,
          Continent,
          Destination,
          Lodging,
          Travel,
          TypeActivity,
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    CountriesModule,
    ActivitiesModule,
    CalendarsModule,
    ContinentsModule,
    DestinationsModule,
    LodgingsModule,
    TravelsModule,
    TypeActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
