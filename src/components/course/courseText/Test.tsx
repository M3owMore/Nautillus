import CMD from "./CMD";
import LNK from "./LNK";
import LSTChild from "./LSTChild";
import LSTParent from "./LSTParent";
import SPC from "./SPC";
import Img from "./Img";
import InlineCode from "./InlineCode";
import Window from "./Window"
import P from "./P.tsx";
import {H1, H2, H3, H4} from "./H1";
import Code from "./Code";

const Test = (props:any) => {
    return (
        <>
            <Window>
                <H3>Lesson 1:</H3>
                <H1>Introduction</H1>
                <br/>
                <P>
                    If you decided you learn C++ that means you are interested in low level aspects of computers.This course will give you enough knowledge to start programming your own software with C++.
                </P>
                <br/>
                <P>
                    First thing we want to mention is that C++ is a language which uses compiler.Compiler is a software which translates human readable code to machine code.Machine code is group of instructions which is created for a CPU.So if you want to write a code and run it on your machine, you will need a compiler which will compile your code to machine code.Structure of all of these is very simple: You take a .cpp file(File extension for C++ file where C++ code is stored), you give it to the C++ compiler and it will output executable file for you.Then you can run executable file and program will work(If there is no compiler/linker error.Don’t worry, we will talk about this later).So first thing you need to do is installing a compiler on your machine(Computer).We recommend using linux while practicing C++ because this course is mainly focused on C++ programming on linux but if you are a Windows user, don’t worry you can still do the same on your machine.
                </P>
                <br/>
                <P>
                    Let’s install a compiler and a text editor.There are many different compilers and text editors but we are going to use G++ compiler and vscode text editor.Text editors are used to write text(In this case C++ code) in files.To install G++ compiler on your machine, first, identify your linux distro(Distribution).If you are using a distro which is based on Debian or is Debian open up your terminal to install G++ and vscode and type:
                </P>

                <CMD>sudo apt install -y gcc code</CMD>
                <P>If you use a distro which is based on Arch or is Arch you can install G++ and vscode like this:</P>
                <CMD>sudo pacman -Sy gcc vscode</CMD>
                <P>If you use a distro which is based on Arch or is Arch you can install G++ and vscode like this:</P>
                <CMD>sudo xbps-install -Sy gcc vscode</CMD>
                <br/>

                <div className="text-md px-2">
                    <p>In case you have Windows, download vscode from here: </p>
                    <p><LNK to="https://code.visualstudio.com/download">https://code.visualstudio.com/download</LNK></p>
                    <br/>
                    <p>and G++ from here:</p>
                    <p><LNK to="https://sourceforge.net/projects/mingw-w64/">https://sourceforge.net/projects/mingw-w64/ </LNK></p>
                </div>
                
                <br/>
                <br/>
                <P>Ok, it’s time to talk about how programming works.You as a programmer write human readable instructions like this:</P>
                <Code language="cpp" text=
{`int main(){
    int x = 10;
    int y = 20;            

    return 0;              
}`} />


                <br/>
                <P>And your compiler will convert it to machine code(Instructions for CPU) like this:</P>
                <Code language="asmatmel" text=
{`push rbp
mov rbp, rsp
mov dword [var_8h], 0xa
mov dword [var_4h], 0x14
mov eax, 0
pop rbp
ret
add byte [rax], al`} />

                <br/>
                
                <P>Don’t worry, you don’t have to know assembly to write C++ applications but if you decide that you want to became a professional C++ programmer or a malware analyst, then you will have to learn assembly.</P>
                <br/>
                <br/>
                <br/>

            </Window>

            <Window>
                <H3>Lesson 2:</H3>
                <H1>Basic structure of C++ code</H1>
                <br/>
                <P>To write useful C++ code, you need to understand C++’s syntax and code structure.In programming we have many conceptions that exist in math(Don’t worry, you don’t have to be math expert to learn programming) too, for example, functions.A function in programming is a block which holds some code.Functions can be called.Calling a function means that you are telling a CPU to execute instructions which is stored in called function.Every program has a thing called “Entry point”.Entry point is a “place” where code starts executing.In C++ entry point is a function called “main”.Every C++ program has to have a function called “main”.Of course it’s possible to change an entry point from the linker parameters but it’s not interesting for us right now.Let’s just focus on standard C++ code.</P>
                <br/>
                <P>If you want to create a C++ program, you start writing code like this:</P>
                <Code language="cpp" text=
    {`int main(){
    return 0;
}`} />
                <P>As you see, we just wrote few lines of code and actually, this application is ready.We can compile this code and run the application but nothing interesting will happen.We need to add more code inside of “main” function to do something more interesting.In reality, things are happening when we compile this code and execute the output file.”main” function returns value of “0” and then program execution ends.So remember, every function(Excluding “void” functions which will be discussed) has to return some kind of value.So, every C++ code has “main” function inside of it and every “main” function has “return 0;” written at the very end of it.</P>
                <br/>
                
                <P>Also, look how shifted “return 0;” is.That means, it belongs to “main” function.If we unshift “return 0;” “main” function will not hold it anymore and there will be an error.</P>
                <br/>
            </Window>
            
            <Window>
                <H3>Lesson 3:</H3>
                <H1>Data types and variables</H1>
                <br/>
                <P>To achieve something with programming, we need to manipulate data.Data to be manipulated should be stored somewhere.Programmers store data in variables.A variable is a little “box” which holds some value.A value can be anything starting with numbers and ending with letters.Every variable has to have unique name but there are some restrictions.First of all, spaces are not allowed in names.Secondly, special characters like “!”, “@”, “#” and etc are not allowed.Also, You can’t use the same names for different variables.</P>
                <br/>
                <P>Before you create a variable in C++ you need to understand that every variable in this language has to have a data type identifier next to it.For example, if you want to create a variable which will hold integer number, you need to write keyword “int” before you write a variable:</P>
                <Code language="cpp" text=
{`int main(){
    int varName = 10;

    return 0;
}`} />
                <P>As you see, we just created a variable which has a name “varName” and its value is 10.We can show you real life example too.Imagine that you are creating a game where a main character has a speed and health.We can name our variables appropriately:</P>
                <Code language="cpp" text=
{`int main(){
    int speed = 10;
    int health = 100;

    return 0;
}`} />
                <P>As you see, we created two variables.</P>
                <br/>
                <P>Let’s talk about data types.In C++ there are six fundamental data types.There are: integers(int), floating point numbers(float), double floating point numbers(double), characters(char), booleans(bool) and void values(void).We will discuss each data type for you to understand their usage.</P>
                <br/>
                <P>First of all, we have integers.This data type is used when programmers want to store integer numbers.For example, programmers can store how many seconds are left until the end of some process and etc.</P>
                <br/>
                <P>Secondly, we have floating point numbers.Floats are used when programmers want to store more detailed numbers than integers.For example, if a programmer wants to define a variable which will hold a value of earth’s gravity, he can do it like this:</P>
                <Code language="cpp" text=
{`float earthG = 9.8;`} />
                <br/>
                <P>After floats, we have double floating point numbers.This is the same as floating point numbers.Only difference is a size allocated in memory for them.Before we talk about other data types let’s discuss sizes and what they are.C++ is a lower level language, that means you have to manually manage computer’s memory(RAM).Every variable is stored in RAM, that means every data type is stored differently.That’s why we have different data type identifiers such as int and float.Variables need space to be stored in memory.Every data type requires different amount of space.For example, integer numbers require 2 or 4 bytes of memory(We will discuss bytes and bits in a few moments).Floating point numbers require 4 bytes of memory.Double floating point numbers require 8 bytes of memory because it stores larger or smaller float numbers than standard float data type does.</P>
                <br/>
                <P>A char data type takes only 1 byte of memory and it stores characters.For example, these are characters: ‘A’ , ‘w’,  ‘4’, ‘#’, ‘]’, ‘;’ and etc.</P>
                <br/>
                <P>After characters, we have booleans.A bool data type can only have two values: 1(true) or 0(false).For that reason this data type only needs 1 bit(Not byte) of memory.</P>
                <br/>
                <P>Finally, we have a void.This data type doesn’t require any memory because it’s empty.We can’t put anything into it because it’s void.This data type is mainly used for defining functions which shouldn’t return any value.For example, function like this:</P>
                <Code language="cpp" text=
{`void testFunc() { } `} />
                <br/>
                <P>We discussed every fundamental data type in C++.Of course there are more data types but let’s just focus on fundamental data types for now.We will discuss more complex data types in other lessons.</P>
                <br/>
                <P>Before we end this lesson, let’s discuss how memory works in computers(And not only memory).Everyone knows that computers are electronic devices and they require electricity to work.If we define electricity in very simple way, it’s just a stream of electrons.As you know, atoms have a nucleus where protons and neutrons are stored.Electrons are orbiting around the nucleus.Computers use electrons for counting.They count in binary(Unlike them, we count in decimal).A binary means that we can use only two numbers for counting.These are 1 and 0.For computers this is how it works: If there is an electron, it means 1 and if there is no electron, it means 0.1 Bit is 1 electron.1 Byte is 8 bits.1 KB(Kilobyte) is 1 000 bytes.1 GB(Gigabyte) is 1 000 KB.1 TB(Terabyte) is 1 000 GB and so on.This is how data is measured in computers.</P>

            
            
            
            </Window>

            <Window>
                <H3>Lesson 4:</H3>
                <H1>Math operators in C++ language</H1>
                <br/>
                <P>Programming languages are able to tell CPUs to perform math calculations.Of course, in assembly there are instructions which tell CPU to do that but let’s focus on C++ for now.We can add, subtract, multiply and divide numbers.Actually, it’s very easy thing to do in every programming language.Let’s say we have two integer numbers and we want to add them together.Then we want to store sum of them in another variable.This is a perfect example:</P>
                <Code language="cpp" text=
{`int main(){
    int num1 = 10;
    int num2 = 215;

    int result = num1 + num2;

    return 0;
}`} />
                <P>As you see, we just used “+” operator which is addition operator.It adds two numbers together.Value of “result” variable is 225 because we added 215 to 10.</P>
                <br/>
                <P>To subtract numbers, we can use “-” operator.We can repeat the same example as the last one but we need to change the operator:</P>
                <Code language="cpp" text=
{`int main(){
    int num1 = 10;
    int num2 = 215;

    int result = num1 - num2;

    return 0;
}`} />
                <P>As you can see, we subtract 215 from 10.Value of “result” variable is -205.</P>
                <br/>
                <P>In case you want to multiply values of “num1” and “num2”, you can use “*” operator.Let’s repeat our example:</P>
                <Code language="cpp" text=
{`int main(){
    int num1 = 10;
    int num2 = 215;

    int result = num1 * num2;

    return 0;
}`} />
                <P>In this case, value of “result” variable is 2150 because 215 * 10 = 2150.That’s very simple arithmetic.</P>
                <br/>
                <P>Finally(Actually, we are not done yet), we have operator for dividing numbers.We can use “/” to devide numbers.We are going to repeat the same example but we will change the operator again:</P>
                <Code language="cpp" text=
{`int main(){
    int num1 = 10;
    int num2 = 215;

    int result = num1 * num2;

    return 0;
}`} />          
                <P>In this case, we are dividing 10 by 215.Let’s stop here for a minute.We will add few lines of code which might be confusing for you but please ignore them for now and just copy it in your text editor because we want to show you something very interesting:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    int num1 = 10;
    int num2 = 215;

    int result = num1 / num2;

    std::cout << result << std::endl;

    return 0;
}`} />   
                <P>If you compile and run this code, output in console will be 0 but if we devide 10 by 215 answer won’t be 0.So a CPU can’t even calculate correct answer for us? No, not in this case.What really happens here is that we are using integer numbers, not floating point numbers.Answer of this division is approximately 0.05.When we told our CPU that we were using integer numbers, it removed floating point from our numbers.That means, nothing after “.” is showed in the output and we only see 0 which is written before “.”.If we change int keywords to float then it will show the correct answer which is 0.0465116.</P>
                <br/>
                <P>There is another operator which is called modulo operator which can be used to know if an integer number is odd or even.This is a perfect example for demonstrating usage of modulo operator:</P>
                <Code language="cpp" text=
{`int main(){
    int x = 8;

    int result = x % 2;

    return 0;
}`} />  
                <P>If value of “result” variable equals to 0 then “x” variable’s value is an even number.In other cases, it’s an odd number.</P>

            </Window>

            <Window>
                <H3>Lesson 5:</H3>
                <H1>Libraries and standard functions</H1>
                <br/>
                <P>We have to talk about libraries and standard functions because when we start explaining other topics we will need to use them and if you don’t understand what they are and how they work you are going to be confused.Many people get confused when it comes to libraries but actually, it’s very easy to understand.</P>
                <br/>
                <P>First of all, we want to discuss how compilation works.When you write some code in C++ file and save it, then you have to pass it to a compiler.It reads your code and translates to the machine code.There are several keywords which are called preprocessor directives.Those are translated before anything else.This is an example:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    return 0;
}`} />
                <br/>
                <P>In this example, <InlineCode text="#include <iostream>" /> is a preprocessor directive.Actually, everything that has “#” symbol at the beginning is a preprocessor directive.Here is what’s hapenning.With the first line of code we tell the compiler to copy everything that is written in “iostream.h” file and paste it in the place of <InlineCode language="c" text="#include <iostream>" /> You can find “iostream.h” file on your machine too.That file is called library.Library is just a file which contains some C++ code.There are predefined variables and functions which makes programming easier.One of the predefined function is “cout” function which you have already seen.It prints output in console.So, to be able to use “cout” function, we have to include “iostream.h” file in our code.If we do this, there will be an error:</P>
                <Code language="cpp" text=
{`int main(){
    std::cout << “This is the test!” << std::endl;

    return 0;
}`} />
                <P>There is no “iostream.h” file included, so code doesn’t know what “cout” or “endl” is.”endl” is a predefined variable which means new line or “\n”.It’s like when you type a text in a text editor and you press enter.It just creates new line for you.</P>
                <br/>
                <P>Now let’s discuss filetypes in C++.C++ has several file extensions.First of all, we have .cpp extension.This is a file where main C++ code is stored.It has to have “main” function(Entry point) and it can be compiled.</P>
                <br/>
                <P>Secondly, we have .h extension.This is a file where C++ code is stored but it’s a library.Libraries can’t be compiled.They can only be included in .cpp files.</P>
                <br/>
                <P>Of course, you can create your own libraries.If you have your .cpp file and .h file in the same path, you can include it to your application too.Let’s create our first library.Create a new file, save it as “library.h”(You can name it whatever you want.Only thing you have to do is to write “.h” at the end of the name) and write this code inside the file:</P>
                <Code language="cpp" text=
{`#include <iostream>

void print(const char* param){
    std::cout << param << std::endl;
}`} />
                <P>Please ignore <InlineCode text=" const  char* param" /> for now. Next, write this in your .cpp file:</P>
                <Code language="cpp" text=
{`#include “library.h”

int main(){
    print(“Hello Nautillus!”);

    return 0;
}`} />
                <P>Compile .cpp file and “Hello multiverse!” will be printed in the console.</P>
                <br/>
                <P>Look how we used “” symbols instead of {"<>"} when including our library.That’s because {"<>"} symbols are used when programmers want to include standard libraries.They are stored in special folder.</P>
                <br/>
                <P>Now you might ask, what’s the <InlineCode text="std::" /> and why are we writing it next to “cout” function? It’s easy to explain.If we use technical words “std::” is a namespace teller that tells a compiler which namespace to use.This explanation is not enough for you because you are a beginner so we will explain it with simple words.</P>
                <br/>
                <P>Imagine you just created your own library and for some reason you named a function inside of it “cout”.Then you included it in your code but you also included “iostream.h” library.With <InlineCode text="std::" /> you tell the compiler that you want to use “cout” from standard library(From “iostream.h”) and not from your custom library.If you don’t want to write “std::” in every moment and you don’t have a function which has the same name as some standard function you can do this:</P>
                <Code language="cpp" text=
{`#include <iostream>
using namespace std;

int main(){
    cout << “Hello Nautillus!” << endl;

    return 0;
}`} />
                <P>As you see, there are no  <InlineCode text="std::" /> anymore.That’s because we tell the compiler that we want to use standard namespace everytime we call a function or use a variable.</P>
                <br/>
                <P>Before we end this lesson, we want to give some information about .hpp files and connection between C and C++ languages to you.If you ever see a file with .hpp extension, don’t get confused, it’s just a library for C++.</P>
                <br/>
                <P>C and C++ languages have many thing in common.One of the best thing is that we can include C’s libraries into C++ code like this:</P>
                <Code language="cpp" text=
{`#include <stdio.h>
#include <stdlib.h>

int main(){
    printf(“Hello Nautillus!\\n”);

    return 0;
}`} />
                <P>This code works very well.</P>
            </Window>

            <Window>
                <H3>Lesson 6:</H3>
                <H1>If/else statements and changing code’s flow</H1>
                <br/>
                <P>One of the best thing that programming languages have is that its flow can have several branches.We can execute a program in many different ways.This makes many things possible like requiring passwords for access and etc.Before we begin coding, look at the structure of if/else statement:</P>
                <Code language="cpp" text=
{`if(Some condition){
    //Some code...
}
else{
    //Another code...
}`} />
                <P>As you see, we use “if” and “else” keywords for creating statements.Let’s create a quick number checker which tells us if a number is odd or even:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    int number = 10;

    if(number % 2 == 0){
        std::cout << “Number is even!” << std::endl;
    }
    else{
        std::cout << “Number is odd!” << std::endl;
    }

    return 0;
}`} />
                <P>That’s all it was needed for building a number checker.We can compile and run it.In console “Number is even!” will be printed.Before we explain how all of these works, we want to tell you what “==” is in the condition section.When we are defining variables we use “=” to give them values.When we want to compare one thing to another then we have to use “==”, that’s all.Ok now back to if/else statements.If the condition(Which is written in () symbols) is completed, then the block of “if” will execute but if not, then block of “else” is executed.We can give them more than one condition like this:</P>
                <Code language="cpp" text=
{`if(SomeCondition){
    //Some code...
}
else if(AnotherCondition){
    //Another code...
}
else if(AnotherCondition){
    //Another code...
}
else{
    //Another code...
}
`} />
                <P>That’s all it was needed for building a number checker.We can compile and run it.In console “Number is even!” will be printed.Before we explain how all of these works, we want to tell you what “==” is in the condition section.When we are defining variables we use “=” to give them values.When we want to compare one thing to another then we have to use “==”, that’s all.Ok now back to if/else statements.If the condition(Which is written in () symbols) is completed, then the block of “if” will execute but if not, then block of “else” is executed.We can give them more than one condition like this:</P>
                <P>That’s all.It wasn’t hard, was it? Programming is actually really easy.Practice in your text editor to understand better how if/else statements work.</P>
            </Window>

            <Window>
                <H3>Lesson 7:</H3>
                <H1>Loops in C++</H1>
                <br/>
                <P>In programming loops are very useful.We can execute anything as many times as we need.This is very helpful when it comes to routine.Maybe you are coding a server which should send messages to millions of clients.</P>
                <br/>
                <P>There are several loops in C++ and basically they do the same thing but there are little differences.The first loop we would like to talk about is “while” loop.This is the structure of while loop:</P>
                <Code language="cpp" text=
{`while(SomeCondition){
    //Some code...
}`} />
                <P>In this case, while “Some condition” is “true”, “Some code…” will be executed over and over again.Of course, we are going to show you an example of “while loop”:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    int x = 0;

    while(x < 10){
        std::cout << “Nautillus is the only way to learn hacking!” << std::endl;

        x++;
    }

    return 0;
}`} />
                <P>If you compile and run this code, “Nautillus is the only way to learn hacking!” will be printed 10 times in your console.Before we continue, we want to talk about <InlineCode text="x < 10"/> We created “x” variable and its value was set to 0.Then, we run while loop and inside of it we write “cout” function which prints the text in the console and then we add 1 to “x” variable. <InlineCode text="x++;"/> means that we are adding 1 to “x”.If you look at condition you will see that the while loop is going to execute until the value of “x” becomes equal or more than 10.”{"<"}” means less than and “{">"}” means more than something.These are operators too which check if something is less than or is more than the other thing.</P>
                <br/>
                <P>Another loop which we want to discuss is “for loop”.This loop has different contidion than the while loop.Look at this example:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    for(int x = 0; x < 10; x++){
        std::cout << “Nautillus is the only way to learn hacking!” << std::endl;
    }

    return 0;
}`} />
                <P>This and the while loop does exactly the same job.Only difference is in conditions.For loop requires three conditions.First, we defined “x” variable, then we gave the main condition which is that loop will work while “x” variable’s value is less than 10 and finally, we increase value of “x” by one each time loop fully executes.We can do the same by giving “x” value of 10, then changing “{">"}” to “{"<"}” and changing “x++” to “x--”. <InlineCode text="x--"/> is the same as <InlineCode text="x++"/> but it takes 1 from “x” variable’s value instead of giving it. We will give you an example for this too:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    for(int x = 10; x > 0; x--){
        std::cout << “Nautillus is the only way to learn hacking!” << std::endl;
    }

    return 0;
}`} />
                <P>As you see, it’s very easy thing to do.</P>
                <br/>
                <P>Finally, we have “do while” loop.This loop is almost the same as while loop.Only difference is the syntax.This is the structure of do while loop:</P>
                <Code language="cpp" text=
{`do{
    //Some code...
}
while(SomeCondition);
`} />
                <P>And of course, we have an example for that too:</P>
                <Code language="cpp" text=
{`#include <iostream>

int main(){
    int x = 0;

    do{
        std::cout << “Nautillus is the only way to learn hacking!” << std::endl;

        x++;
    }
    while(x < 10);

    return 0;
}`} />
                <P>Please practice everything you learn after completing lessons because theory is nothing without practice.It also helps you to understand better how things actually work.Don’t be afraid to do some experiments.Everyone should make mistakes at the beginning to learn how not to make mistakes.</P>

            </Window>
        </>
    );
  }
  
  export default Test;