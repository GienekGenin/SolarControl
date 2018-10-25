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
    sprintf(buffer, "%4.0f", data); // datastream value
    string massage = buffer;
    return massage;
};

string createString1(float data)
{
    char buffer[10];
    sprintf(buffer, "%4.1f", data); // datastream value
    string massage = buffer;
    return massage;
};

string createString2(float data)
{
    char buffer[10];
    sprintf(buffer, "%4.2f", data); // datastream value
    string massage = buffer;
    return massage;
};

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
        float data[2][9];
        float bv, bc;
        string temp_0, temp_1, temp_2, temp_3, temp_4, temp_5, temp_6, temp_7, temp_8;
        string light_0, light_1, light_2, light_3, light_4, light_5, light_6, light_7, light_8;
        begin = timer.read_ms();
        if (begin - lastms >= 2000)
        {
            lastms = begin;
            for (int i = 0; i < 9; i++)
            {
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
                if (i == 0)
                {
                    temp_0 = createString1(temp_sig * 4.5 * 100);
                    light_0 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 1)
                {
                    temp_1 = createString1(temp_sig * 4.5 * 100);
                    light_1 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 2)
                {
                    temp_2 = createString1(temp_sig * 4.5 * 100);
                    light_2 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 3)
                {
                    temp_3 = createString1(temp_sig * 4.5 * 100);
                    light_3 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 4)
                {
                    temp_4 = createString1(temp_sig * 4.5 * 100);
                    light_4 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 5)
                {
                    temp_5 = createString1(temp_sig * 4.5 * 100);
                    light_5 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 6)
                {
                    temp_6 = createString1(temp_sig * 4.5 * 100);
                    light_6 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 7)
                {
                    temp_7 = createString1(temp_sig * 4.5 * 100);
                    light_7 = createString(light_sig / 3.28 * 4096);
                }
                if (i == 8)
                {
                    temp_8 = createString1(temp_sig * 4.5 * 100);
                    light_8 = createString(light_sig / 3.28 * 4096);
                }
            }
            bc = bv_sig * 3.3 / 220;
            bv = bc * (982 + 200);
            string post1 = "{ \"data\": {\"bv\":" + createString2(bv * 10) + ",\"bc\":" + createString2(bc * 1000);
            string post2 = ",\"light\":[" + light_0 + "," + light_1 + "," + light_2 + "," + light_3 + ",";
            string post3 = light_4 + "," + light_5 + "," + light_6 + "," + light_7 + "," + light_8;
            string post4 = "],\"temp\":[" + temp_0 + "," + temp_1 + "," + temp_2 + "," + temp_3 + ",";
            string post5 = temp_4 + "," + temp_5 + "," + temp_6 + "," + temp_7 + "," + temp_8 + "]} }";
            pc.printf("%s\n", post1 + post2 + post3);
            device.printf("%s", post1);
            device.printf("%s", post2);
            device.printf("%s", post3);
            device.printf("%s", post4);
            device.printf("%s", post5);
        }
    }
}
