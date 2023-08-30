import CMD from "./CMD";
import LNK from "./LNK";
import LSTChild from "./LI.tsx";
import LSTParent from "./LST.tsx";
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
    <H1>Introduction</H1>
    <P>Python is a widely used high-level programming language. It was created by Guido van Rossum in 1991. Python uses an interpreter, allowing you to run code on any machine with Python installed.</P>
    <P>To install Python on your machine, first determine your operating system (OS). If you're using Windows, visit <LNK to="https://www.python.org">https://www.python.org</LNK> and download Python for Windows. After downloading, install it just like any other program on your device. Once installed, you're ready to go.</P>
    <P>If you're a Linux user, identify your Linux distribution. If you have Debian or a Debian-based distribution, open a terminal and type:</P>
    <CMD>sudo apt install -y python3</CMD>
    <P>If you have Arch or an Arch-based distribution, type:</P>
    <CMD>sudo pacman -Sy python3</CMD>
    <P>If you're using Void Linux, type:</P>
    <CMD>sudo xbps-install -Sy python3</CMD>
    <P>For MacOS users, visit <LNK to="https://www.python.org">https://www.python.org</LNK>, download Python for MacOS, and install it as you would any other program.</P>
    <P>To install Python on your Android device within Termux, simply type:</P>
    <CMD>pkg install python3</CMD>
    <P>Note that you should download the Python 3.x.x package. Avoid downloading the Python version 2.x.x package.</P>
    <P>After installing Python, open a terminal and type:</P>
    <CMD>python3 --version</CMD>
    <P>If the installation was successful, it will display the current version of Python on your device.</P>
    <P>Now you can run Python code on your machine. You can edit Python code in a text editor within a file and then execute that file with the Python interpreter. Alternatively, you can directly open the Python interpreter and input code. For example, if you edited a file named <InlineCode>file.py</InlineCode> with Python code, you can execute the code like this:</P>
    <CMD>python3 file.py</CMD>
    <P>If you want to open the Python interpreter directly, type:</P>
    <CMD>python3</CMD>
    <P>After executing the <InlineCode>python3</InlineCode> command, you will see <InlineCode>&gt;&gt;&gt;</InlineCode> as the terminal prompt, indicating that you are in a Python shell. You can write and execute Python code there. To exit the Python shell, type:</P>
    <CMD>exit()</CMD>
    <P>Alternatively, you can press <InlineCode>CTRL</InlineCode> + <InlineCode>D</InlineCode>.</P>
</Window>


        </>
    );
  }
  
  export default Test;