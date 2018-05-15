#include "mbed.h"
#include <string>

Serial pc(USBTX, USBRX,9600); // tx, rx
Serial device(D1,D0,9600);  // tx, rx

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

string createString(float data){
    char buffer [10];
    sprintf (buffer, "%4.2f",data);// datastream value
    string massage = buffer;
    return massage;
};

string lightArr, tempArr, battaryArr;
string createData(float L1,float L2,float L3, float L4,float L5,float L6,float L7,float L8,float L9,float T1,float T2,float T3,float T4,float T5,float T6,float T7,float T8,float T9,float bc,float bv){
    //Create light sensor strings
    string _L1 = createString(L1);string _L2 = createString(L2);string _L3 = createString(L3);
    string _L4 = createString(L4);string _L5 = createString(L5);string _L6 = createString(L6);
    string _L7 = createString(L7);string _L8 = createString(L8);string _L9 = createString(L9);
    //Create temp sensor strings
    string _T1 = createString(T1);string _T2 = createString(T2);string _T3 = createString(L3);
    string _T4 = createString(T4);string _T5 = createString(T5);string _T6 = createString(L6);
    string _T7 = createString(T7);string _T8 = createString(T8);string _T9 = createString(L9);
    // battery data
    string _bc = createString(bc);string _bv = createString(bv);
    string postMessage = "{\"L1\":"+ _L1 +",\"L2\":"+ _L2 +",\"L3\":"+ _L3 +",\"L4\":"+ _L4 +",\"L5\":"+ _L5 +",\"L6\":"+ _L6 +",\"L7\":"+ _L7 +",\"L8\":"+ _L8 +",\"L9\":"+ _L9 +",\"T1\":"+ _T1 +",\"T2\":"+ _T2 +",\"T3\":"+ _T3 +",\"T4\":"+ _T4 +",\"T5\":"+ _T5 +",\"T6\":"+ _T6 +",\"T7\":"+ _T7 +",\"T8\":"+ _T8 +",\"T9\":"+ _T9 +",\"bc\":"+ _bc +",\"bv\":"+ _bv +"}";
    lightArr = "{\"L1\":"+ _L1 +",\"L2\":"+ _L2 +",\"L3\":"+ _L3 +",\"L4\":"+ _L4 +",\"L5\":"+ _L5 +",\"L6\":"+ _L6 +",\"L7\":"+ _L7 +",\"L8\":"+ _L8 +",\"L9\":"+ _L9;
    tempArr = ",\"T1\":"+ _T1 +",\"T2\":"+ _T2 +",\"T3\":"+ _T3 +",\"T4\":"+ _T4 +",\"T5\":"+ _T5 +",\"T6\":"+ _T6 +",\"T7\":"+ _T7 +",\"T8\":"+ _T8 +",\"T9\":"+ _T9;
    battaryArr = ",\"bc\":"+ _bc +",\"bv\":"+ _bv +"}";
    return postMessage;
}

int main() {
    //Start of the timer
    int begin;
    timer.start();
    while(1) {
        begin = timer.read_ms();
        if(begin - lastms >= 3000){
            lastms = begin;
            //Value of light sensors
            float L1 = a_light_1/3.28 * 4096,L2 = a_light_1/3.28 * 4096,L3 = a_light_1/3.28 * 4096;
            float L4 = a_light_4/3.28 * 4096,L5 = a_light_5/3.28 * 4096,L6 = a_light_6/3.28 * 4096;
            float L7 = a_light_7/3.28 * 4096,L8 = a_light_8/3.28* 4096,L9 = a_light_9/3.28 * 4096;
            float T1 = a_temp_1/3.28 * 4096,T2 = a_temp_2/3.28 * 4096,T3 = a_temp_3/3.28 * 4096;
            float T4 = a_temp_4/3.28 * 4096,T5 = a_temp_5/3.28 * 4096,T6 = a_temp_6/3.28 * 4096;
            float T7 = a_temp_7/3.28 * 4096,T8 = a_temp_8/3.28 * 4096,T9 = a_temp_9/3.28 * 4096;
            float bc = a_bc/3.28,bv = a_bv * 3.28 + 1000*(float)a_bv * 3.28/200;

            string message = createData(L1,L2,L3,L4,L5,L6,L7,L8,L9,T1,T2,T3,T4,T5,T6,T7,T8,T9,bc,bv);
            pc.printf("\n Message: %s", message);
            device.printf("%s", lightArr);
            device.printf("%s", tempArr);
            device.printf("%s", battaryArr);
        }
    }
}
