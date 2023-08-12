import CMD from "./CMD";
import LNK from "./LNK";
import LSTChild from "./LSTChild";
import LSTParent from "./LSTParent";
import SPC from "./SPC";
import Window from "./Window"
import Paragraph from "./Paragraph";
import {H1, H2, H3, H4} from "./H1";
import Code from "./Code";

const Test = (props:any) => {
    return (
        <div className='flex flex-col  h-full w-full p overflow-y-scroll p-4'>
            <div className='flex flex-col items-center'>
                <H3>Lesson 1:</H3>
                <H1>Introduction</H1>
                <br/>
                <Window>
                    <Paragraph>
                        If you decided you learn C++ that means you are interested in low level aspects of computers.This course will give you enough knowledge to start programming your own software with C++.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        First thing we want to mention is that C++ is a language which uses compiler.Compiler is a software which translates human readable code to machine code.Machine code is group of instructions which is created for a CPU.So if you want to write a code and run it on your machine, you will need a compiler which will compile your code to machine code.Structure of all of these is very simple: You take a .cpp file(File extension for C++ file where C++ code is stored), you give it to the C++ compiler and it will output executable file for you.Then you can run executable file and program will work(If there is no compiler/linker error.Don’t worry, we will talk about this later).So first thing you need to do is installing a compiler on your machine(Computer).We recommend using linux while practicing C++ because this course is mainly focused on C++ programming on linux but if you are a Windows user, don’t worry you can still do the same on your machine.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Let’s install a compiler and a text editor.There are many different compilers and text editors but we are going to use G++ compiler and vscode text editor.Text editors are used to write text(In this case C++ code) in files.To install G++ compiler on your machine, first, identify your linux distro(Distribution).If you are using a distro which is based on Debian or is Debian open up your terminal to install G++ and vscode and type:
                    </Paragraph>

                    <CMD>sudo apt install -y gcc code</CMD>
                    <Paragraph>If you use a distro which is based on Arch or is Arch you can install G++ and vscode like this:</Paragraph>
                    <CMD>sudo pacman -Sy gcc vscode</CMD>
                    <Paragraph>If you use a distro which is based on Arch or is Arch you can install G++ and vscode like this:</Paragraph>
                    <CMD>sudo xbps-install -Sy gcc vscode</CMD>
                    <br/>

                    <p className="text-md px-2">
                        <p>In case you have Windows, download vscode from here: </p>
                        <p><LNK to="https://code.visualstudio.com/download">https://code.visualstudio.com/download</LNK></p>
                        <br/>
                        <p>and G++ from here:</p>
                        <p><LNK to="https://sourceforge.net/projects/mingw-w64/">https://sourceforge.net/projects/mingw-w64/ </LNK></p>
                    </p>
                    
                    <br/>
                    <br/>
                    <Paragraph>Ok, it’s time to talk about how programming works.You as a programmer write human readable instructions like this:</Paragraph>
                    <Code language="c" text=
{`int main(){
    int x = 10;
    int y = 20;            

    return 0;              
}`} />


                    <br/>
                    <Paragraph>And your compiler will convert it to machine code(Instructions for CPU) like this:</Paragraph>
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
                    
                    <Paragraph>Don’t worry, you don’t have to know assembly to write C++ applications but if you decide that you want to became a professional C++ programmer or a malware analyst, then you will have to learn assembly.</Paragraph>
                    <br/>
                    <br/>
                    <br/>

                </Window>
            </div>
        </div>
    );
  }
  
  export default Test;