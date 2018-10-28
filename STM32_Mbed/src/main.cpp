#include "mbed.h"
#include <string>

Serial pc(USBTX, USBRX, 9600); // tx, rx
Serial device(D1, D0, 115200); // tx, rx

//Timer is needed for correcct recieving and sending of information
Timer timer;

DigitalOut LED_1(LED1);
DigitalOut LED_2(LED2);
DigitalOut LED_3(LED3);

DigitalOut S0(D9);
DigitalOut S1(D8);
DigitalOut S2(D7);
DigitalOut S3(D6);
AnalogIn light_sig(A0);
AnalogIn temp_sig(A1);
AnalogIn bv_sig(A2);

unsigned long lastms = 0;

string createString(float data)
{
    char buffer[10];
    sprintf(buffer, "%4.2f", data); // datastream value
    string massage = buffer;
    return massage;
};

float roundAnal(float data)
{
    return floor(data * 3.3 * 100) / 100;
}

// main() runs in its own thread in the OS
int main()
{
    //Start of the timer
    int begin;
    timer.start();
    int pin_stat[9][4] = {
        {1, 1, 1, 0},
        {0, 0, 0, 1},
        {1, 0, 0, 1},
        {0, 1, 0, 1},
        {1, 1, 0, 1},
        {0, 0, 1, 1},
        {1, 0, 1, 1},
        {0, 1, 1, 1},
        {1, 1, 1, 1},
    };
    LED_1 = 1;
    LED_2 = 1;
    LED_3 = 1;
    while (true)
    {
        float sum = 0;
        string result = "", temp = "", light = "", bv, bc;
        begin = timer.read_ms();
        if (begin - lastms >= 2000)
        {
            lastms = begin;
            for (int i = 0; i < 9; i++)
            {
                float temp_data, light_data;
                for (int c = 0; c < 4; c++)
                {
                    if (c == 0)
                    {
                        S0 = pin_stat[i][c];
                    }
                    if (c == 1)
                    {
                        S1 = pin_stat[i][c];
                    }
                    if (c == 2)
                    {
                        S2 = pin_stat[i][c];
                    }
                    if (c == 3)
                    {
                        S3 = pin_stat[i][c];
                    }
                }

                temp_data = roundAnal(temp_sig);
                light_data = roundAnal(light_sig);
                sum = sum + temp_data + light_data;
                temp += createString(temp_data) + ",";
                light += createString(light_data) + ",";
            }
            float bv_data = roundAnal(bv_sig);
            sum += bv_data;
            string bv = createString(bv_data) + ",";
            result = temp + light + bv + createString(sum);
            pc.printf("%s\n", result);
            device.printf("%s", result);
        }
    }
}
