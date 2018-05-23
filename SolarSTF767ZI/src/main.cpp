#include "mbed.h"
#include <string>
#include "MbedJSONValue.h"

Serial pc(USBTX, USBRX,230400); // tx, rx
Serial device(D1,D0,115200);  // tx, rx

//Timer needed for correcct recieving and sending of information
Timer timer;

//Light sensors
AnalogIn a_light_1(A0);
AnalogIn a_light_2(A1);
AnalogIn a_light_3(A2);
AnalogIn a_light_4(A3);
AnalogIn a_light_5(A4);
AnalogIn a_light_6(A5);
AnalogIn a_light_7(PF_8);
AnalogIn a_light_8(PF_7);
AnalogIn a_light_9(PF_9);
//Temperature sensors
AnalogIn a_temp_1(PF_6);
AnalogIn a_temp_2(PF_7);
AnalogIn a_temp_3(PA_0);
AnalogIn a_temp_4(PA_4);
AnalogIn a_temp_5(PC_2);
AnalogIn a_temp_6(PC_3);
AnalogIn a_temp_7(PC_0);
AnalogIn a_temp_8(PF_8);
AnalogIn a_temp_9(PF_9);
AnalogIn a_bc(PA_0); // battery current
AnalogIn a_bv(PF_4); //battery voltage
//start up variable for timer should anlways be unsigned
unsigned long lastms = 0;

int main() {
    //Start of the timer
    int begin;
    timer.start();
    while(1) {
        MbedJSONValue values;
        begin = timer.read_ms();
        if(begin - lastms >= 1500){
            lastms = begin;
            char val[5];
            //Light
            sprintf(val, "%4.0f", a_light_1/3.28 * 4096);
            values["data"]["light"][0] = val;
            sprintf(val, "%4.0f", a_light_2/3.28 * 4096);
            values["data"]["light"][1] = val;
            sprintf(val, "%4.0f", a_light_3/3.28 * 4096);
            values["data"]["light"][2] = val;
            sprintf(val, "%4.0f", a_light_4/3.28 * 4096);
            values["data"]["light"][3] = val;
            sprintf(val, "%4.0f", a_light_5/3.28 * 4096);
            values["data"]["light"][4] = val;
            sprintf(val, "%4.0f", a_light_6/3.28 * 4096);
            values["data"]["light"][5] = val;
            sprintf(val, "%4.0f", a_light_7/3.28 * 4096);
            values["data"]["light"][6] = val;
            sprintf(val, "%4.0f", a_light_8/3.28 * 4096);
            values["data"]["light"][7] = val;
            //Temperature
            sprintf(val, "%4.1f", a_temp_1/3.28 * 4096);
            values["data"]["temp"][0] = val;
            sprintf(val, "%4.1f", a_temp_2/3.28 * 4096);
            values["data"]["temp"][1] = val;
            sprintf(val, "%4.1f", a_temp_3/3.28 * 4096);
            values["data"]["temp"][2] = val;
            sprintf(val, "%4.1f", a_temp_4/3.28 * 4096);
            values["data"]["temp"][3] = val;
            sprintf(val, "%4.1f", a_temp_5/3.28 * 4096);
            values["data"]["temp"][4] = val;
            sprintf(val, "%4.1f", a_temp_6/3.28 * 4096);
            values["data"]["temp"][5] = val;
            sprintf(val, "%4.1f", a_temp_7/3.28 * 4096);
            values["data"]["temp"][6] = val;
            sprintf(val, "%4.1f", a_temp_8/3.28 * 4096);
            values["data"]["temp"][7] = val;
            // BV,BC
            sprintf(val, "%4.2f", a_bv * 3.28 + 1000*(float)a_bv * 3.28/200);
            values["data"]["bv"] = val;
            sprintf(val, "%4.2f", a_bc/3.28);
            values["data"]["bc"] = val;
            //send data via serial port
            std::string data = values.serialize();
            pc.printf("%s\n", data);
            device.printf("%s\n", data);
        }
    }
}
