################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS += \
D:/Programs/heroku_apps/SolarControl/STM32_HAL/Src/main.c \
D:/Programs/heroku_apps/SolarControl/STM32_HAL/Src/stm32f7xx_hal_msp.c \
D:/Programs/heroku_apps/SolarControl/STM32_HAL/Src/stm32f7xx_it.c 

OBJS += \
./Application/User/main.o \
./Application/User/stm32f7xx_hal_msp.o \
./Application/User/stm32f7xx_it.o 

C_DEPS += \
./Application/User/main.d \
./Application/User/stm32f7xx_hal_msp.d \
./Application/User/stm32f7xx_it.d 


# Each subdirectory must supply rules for building sources it contributes
Application/User/main.o: D:/Programs/heroku_apps/SolarControl/STM32_HAL/Src/main.c
	@echo 'Building file: $<'
	@echo 'Invoking: MCU GCC Compiler'
	@echo $(PWD)
	arm-none-eabi-gcc -mcpu=cortex-m7 -mthumb -mfloat-abi=hard -mfpu=fpv5-d16 '-D__weak=__attribute__((weak))' '-D__packed=__attribute__((__packed__))' -DUSE_HAL_DRIVER -DSTM32F767xx -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Inc" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/STM32F7xx_HAL_Driver/Inc" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/STM32F7xx_HAL_Driver/Inc/Legacy" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/CMSIS/Device/ST/STM32F7xx/Include" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/CMSIS/Include"  -Og -g3 -Wall -fmessage-length=0 -ffunction-sections -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '

Application/User/stm32f7xx_hal_msp.o: D:/Programs/heroku_apps/SolarControl/STM32_HAL/Src/stm32f7xx_hal_msp.c
	@echo 'Building file: $<'
	@echo 'Invoking: MCU GCC Compiler'
	@echo $(PWD)
	arm-none-eabi-gcc -mcpu=cortex-m7 -mthumb -mfloat-abi=hard -mfpu=fpv5-d16 '-D__weak=__attribute__((weak))' '-D__packed=__attribute__((__packed__))' -DUSE_HAL_DRIVER -DSTM32F767xx -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Inc" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/STM32F7xx_HAL_Driver/Inc" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/STM32F7xx_HAL_Driver/Inc/Legacy" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/CMSIS/Device/ST/STM32F7xx/Include" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/CMSIS/Include"  -Og -g3 -Wall -fmessage-length=0 -ffunction-sections -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '

Application/User/stm32f7xx_it.o: D:/Programs/heroku_apps/SolarControl/STM32_HAL/Src/stm32f7xx_it.c
	@echo 'Building file: $<'
	@echo 'Invoking: MCU GCC Compiler'
	@echo $(PWD)
	arm-none-eabi-gcc -mcpu=cortex-m7 -mthumb -mfloat-abi=hard -mfpu=fpv5-d16 '-D__weak=__attribute__((weak))' '-D__packed=__attribute__((__packed__))' -DUSE_HAL_DRIVER -DSTM32F767xx -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Inc" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/STM32F7xx_HAL_Driver/Inc" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/STM32F7xx_HAL_Driver/Inc/Legacy" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/CMSIS/Device/ST/STM32F7xx/Include" -I"D:/Programs/heroku_apps/SolarControl/STM32_HAL/Drivers/CMSIS/Include"  -Og -g3 -Wall -fmessage-length=0 -ffunction-sections -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$@" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


