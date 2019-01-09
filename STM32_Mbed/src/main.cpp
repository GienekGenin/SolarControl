#include "mbed.h"
#include <string>
#include "MbedJSONValue.h"

Serial pc(USBTX, USBRX, 9600); // tx, rx
Serial device(D1, D0, 115200); // tx, rx

//Timer is needed for correcct recieving and sending of information
Timer timer;

DigitalOut LED_1(LED1);
DigitalOut LED_2(LED2);
DigitalOut LED_3(LED3);

AnalogIn bv_sig(A0);
AnalogIn bc_sig(A1);

unsigned long lastms = 0;

// main() runs in its own thread in the OS
int main()
{
    //Start of the timer
    int begin;
    timer.start();
    LED_1 = 1;
    LED_2 = 1;
    LED_3 = 1;
    while (true)
    {
        float data[2][9];
        float bv, bc;
        MbedJSONValue values;
        begin = timer.read_ms();
        if (begin - lastms >= 1500)
        {
            float bv_sum = 0, bc_sum = 0;
            lastms = begin;
            for (int i = 0; i < 9; i++)
            {
                char light_char[5], temp_char[5];
                sprintf(light_char, "%0.0f", 0);
                sprintf(temp_char, "%0.0f", 0);
                values["light"][i] = light_char;
                values["temp"][i] = temp_char;
            }

            for (int i = 0; i < 100; i++)
            {
                bc_sum += bc_sig * 3.3;
                bv_sum += bv_sig * 3.3;
            }
            bc = bc_sum / 100 * 1.6;
            bv = bv_sum / 100 * 500 / 10;
            char bv_char[5], bc_char[5];
            sprintf(bv_char, "%2.4f", bv);
            values["bv"] = bv_char;
            sprintf(bc_char, "%2.4f", bc);
            values["bc"] = bc_char;
            std::string data = values.serialize();
            pc.printf("%s\n", data);
            device.printf("%s\n", data);
        }
    }
}
