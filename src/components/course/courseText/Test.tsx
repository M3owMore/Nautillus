import CMD from "./CMD";
import LNK from "./LNK";
import LS from "./LI";
import LST from "./LST";
import SPC from "./SPC";
import IMG from "./IMG.tsx";
import InlineCode from "./InlineCode";
import Window from "./Window"
import P from "./P.tsx";
import {H1, H2, H3, H4} from "./H1";
import Code from "./Code";

const Test = (props:any) => {
    return (
        <>
<Window i={1}>
    <H3>Lesson 1:</H3>
    <H1>Introduction</H1>
    <br/>
    <P>Linux is a widely used OS (Operating System). More than 96% of servers use Linux today, which means the most popular OS among devices is Linux. We can say that the IT industry is fully built on this OS. Without Linux, the whole infrastructure would collapse. When you become a hacker or a cybersecurity professional, most of the time, you will have to work with Linux.</P>
    <P>So, what is Linux? As a beginner, there is a chance that you don't even know what OSes are. We are going to define it for you: An operating system is software created to control device hardware and make these devices user-friendly. Without an operating system, every device is useless. Imagine a computer without Windows (well, it's possible to install another OS on the computer, but let's imagine that the computer doesn't have anything on it), it would be useless. So, what we are trying to say is that devices require operating systems to function. Yes, devices because not only computers, servers, and smartphones need to have OS on them. Every IoT (Internet of Things) device, for example: smart TVs, cars, smart vacuum cleaners, and much more. Most of them use Linux.</P>
    <P>Ok, let's talk about how and where Linux is being used. The most common way to use Linux is to install it on a server. Actually, you can use Linux on your computer without any problem. You can work, watch movies, play games, create programs on Linux. Linux is also being used in network devices, such as firewalls, routers, and switches.</P>
    <P>Linux is not like any other operating systems. When you install Windows on your machine, it already has everything that's required for functioning. On the other hand, Linux doesn't even have a GUI (Graphical User Interface) at the beginning. Of course, there are many Linux distributions (We will discuss them later) that have preinstalled GUIs, but there are many Linux distributions such as Arch, Void, and Gentoo that don't have GUI at the beginning.</P>
    <P>How can you download Linux? Well, the answer isn't that simple. To answer that question, we need to explain the history of Linux. Linux was originally created by Linus Torvalds, and at first, it was not a serious project. Over time, Linux became so popular that he decided to work on that seriously. It's an open-source project, and everyone can contribute. You can even make your own Linux. These are called Linux distros (Distributions). Many companies have their own Linux distros, and each one is unique. You can even build your own distro on top of other Linux distributions. Today, there are more than six hundred Linux distros. So, to answer that question, you need to decide which Linux distribution you want to use. In this situation, you might ask another question: "Which one should I use?". That's a very hard question. Many people recommend using Debian (Linux distribution) based distros, such as Ubuntu, but if you want to deeply learn Linux, you should start with Void Linux. Of course, if you are afraid to start with more advanced distributions, feel free to install Ubuntu.</P>
    <P>You can download Void Linux from this URL: <LNK to="https://voidlinux.org/download">https://voidlinux.org/download</LNK>. If you decided to install Ubuntu, you can download it from this URL: <LNK url="https://ubuntu.com/download/desktop" />.</P>
</Window>

<Window i={2}>
    <H3>Lesson 2:</H3>
    <H1>Linux Installation</H1>
    <br/>
    <P>After you download a Linux distro, what do you need to do? It depends on where you want to install Linux. If you want to install Linux as a virtual machine, you can use VirtualBox or VMware to run Linux as a virtual device on your computer. Note that it will need additional computing power because you are creating a computer inside of a computer.</P>
    <P>Of course, it's possible to install Linux as the main operating system on your machine. It's recommended to have at least an 8 GB USB flash drive. Once you download a Linux file, download a program called "Rufus" from this URL: <LNK to="https://rufus.ie/en/#">https://rufus.ie/en/#</LNK>. This program is used to format USB flash drives. Open up "Rufus" and install Linux file to the USB flash drive. Once it's done, you can reboot (Restart) your computer to install Linux.</P>
    <P>There might be one problem, your BIOS options. Go to your computer's BIOS and change boot options. Give the highest priority to the USB flash drive. Save the changes and restart your computer. Now, you can install Linux on your computer. We recommend practicing installation on VirtualBox before you try to install it on the computer. The installation process isn't hard by itself (well, it depends on which distro you want to install. For example, installing Ubuntu is very easy even for beginners, but installing Arch Linux is hard even for people who are using Linux for several years) but practicing is always good.</P>
    <P>Once the installation process is done, reboot your computer and remove the USB flash drive from it. You have successfully installed Linux on your computer.</P>
</Window>

<Window i={3}>
    <H3>Lesson 3:</H3>
    <H1>Terminals</H1>
    <br/>
    <P>During this course, you will interact with the Linux terminal very often. That's because everything can be done using them. You don't even need to have a GUI. We want to say that it's possible to do anything with terminals.</P>
    <P>What is a terminal? A terminal is an application that gives you access to the Linux shell. Now you might ask: "What is a Linux shell?". To answer that question, we need to talk about how Linux works. Basically, Linux isn't an operating system by itself; it's a kernel. A kernel is the core of the operating system. So, Linux distros are operating systems, but Linux itself is a kernel. On the operating system, we can build a UI (User Interface). To achieve anything, we need to communicate with the kernel. That's a very hard thing to do because the "language" of a kernel is very complex. Because of that, a shell was created. It simplifies commands that we send to a kernel. Terminals are programs that give us access to these shells.</P>
    <P>Now we are going to explain the basic concepts of terminals. When you open up the terminal, you can write anything there. But that "anything" should be a command that you want your computer to follow. Actually, these commands are programs too. Open up the terminal and write:</P>
    <CMD>ping -c 4 google.com</CMD>
    <P>This command sends ICMP echo requests (We recommend getting our network course) to Google's webserver four times. In reality, <InlineCode>ping</InlineCode> is the name of a file that exists in <InlineCode>/usr/bin/</InlineCode> directory (We will discuss this topic later). These programs can be created with programming languages. Now you might ask: "How does the shell decide what is the command and what isn't?". The answer is very simple. There are directories (folders) in Linux that are created for containing files that are meant to be commands. Everything that is stored there is considered as commands.</P>
    <P>Ok, how do you choose the right terminal for you? Actually, every terminal can do the job, but it's better to use a terminal like "Alacritty" or "Terminator". We recommend downloading "Alacritty" because it's a GPU (Graphics Processing Unit) based terminal and it's faster than others.</P>
</Window>

<Window i={4}>
    <H3>Lesson 4:</H3>
    <H1>Basics of Shells</H1>
    <br/>
    <P>Before we start talking about the basic concepts of shells, you need to choose which shell you want to use. For beginners, it really doesn't matter which shell is being used, but we want to show you different shells and their advantages and disadvantages. As we said earlier, everything is a program. Shells are programs too. Many Linux distros use <InlineCode>bash</InlineCode> shell as the default shell. It's able to save command history and can autocomplete commands when you press the <InlineCode>TAB</InlineCode> key on your keyboard. Its name stands for "Bourne-Again SHell."</P>
    <P>The second shell is <InlineCode>zsh</InlineCode>. This is a more advanced shell and it has more abilities which might be very helpful for beginners. For example, it can show you completed commands from the command history before you complete the command. Look at this example:</P>
    <IMG src="/courses/Linux/1.png" />
    <P>As you can see, we only wrote <InlineCode>ping</InlineCode>, but it shows us the example command which we can use. In this case, Zsh searches it from the command history. It also has the ability to correct spelling errors.</P>
    <P>The next shell is <InlineCode>fish</InlineCode>. It's very similar to Zsh, but they have several differences. For example, it has a built-in help system, and users can create their own functions and commands. You can use any of them, but for beginners, we recommend Bash. Other shells exist too, but they are not important for now.</P>
    <P>Before we start talking about basic commands and structure, we want to discuss prompts. A prompt is text that's written before commands. Most of the time, they contain information about location, user, and hostname. This is the basic prompt of Bash shell:</P>
    <IMG src="/courses/Linux/2.png" />
    <P>We added red lines to see the structure of this prompt easier. The first information you can get from the prompt is the name of the user, which is <InlineCode>cup</InlineCode>. Next, we have the hostname of the computer, which is <InlineCode>SilverFish</InlineCode>. Last but not least, we have the location, which is <InlineCode>~</InlineCode>. This symbol means that we are in the home directory (In Linux, folders are called directories). You can see that we have a <InlineCode>$</InlineCode> symbol. This means that we are not the <InlineCode>root</InlineCode> user. We will discuss users in later lessons, but for now, remember that the <InlineCode>root</InlineCode> user is an administrator user and has the permission to do anything. If we switch to the <InlineCode>root</InlineCode> user, the <InlineCode>$</InlineCode> symbol is going to be changed to the <InlineCode>#</InlineCode> symbol:</P>
    <IMG src="/courses/Linux/3.png" />
    <P>Depending on which shell you use, you can customize prompts.</P>
    <P>It's time to discuss files that are used by shells. The first file we want to discuss is <InlineCode>.bash_history</InlineCode> or <InlineCode>.zsh_history</InlineCode> and so on (File name depends on which shell you are using). In this file, the history of commands is stored. Every command that you have ever written is being stored in this file.</P>
    <P>The second file is <InlineCode>.bashrc</InlineCode> or <InlineCode>.zshrc</InlineCode> and so on (This also depends on which shell you are using, and from now on we will discuss Bash examples to make everything more clear). This file contains the configuration of the shell. You can edit the prompt, add custom functions and variables (Check out our programming courses to understand these topics), add things that you want to be executed initially, and so on.</P>
</Window>

<Window i={5}>
    <H3>Lesson 5:</H3>
    <H1>Changing Working Directories and Showing Files</H1>
    <br/>
    <P>Imagine that the prompt tells you that you are in <InlineCode>/home/user/Desktop/</InlineCode> directory. That means you can work with files that are stored in there. If you have files or directories on your desktop, you can see information about them from the terminal. First of all, you need to know what files and directories are stored on the desktop. Well, you can simply check it on your screen, but let's say that there is no GUI, and you can only work from the shell. The command which allows you to see which files and directories are stored in your working directory is:</P>
    <CMD>ls</CMD>
    <P>This means "list." Look at this example:</P>
    <IMG src="/courses/Linux/4.png" />
    <P>You can see that some of the names are red, and others are white. That's because Bash has a function in its configuration file which changes the color of names that belong to directories. Red names belong to folders, and white names belong to files. That means <InlineCode>dir1</InlineCode> and <InlineCode>FBI_secret_files</InlineCode> are directories (Folders). On the other hand, <InlineCode>file1.txt</InlineCode> and <InlineCode>file2.txt</InlineCode> are files where we can put data (standard text, in this case).</P>
    <P>It's also possible to create directories and files from the shell. Let's say that we want to make two directories, <InlineCode>dir1</InlineCode> and <InlineCode>dir2</InlineCode>. To achieve that, we can use the <InlineCode>mkdir</InlineCode> command twice:</P>
    <CMD>mkdir dir1</CMD>
    <CMD>mkdir dir2</CMD>
    <P>It's also possible to do it using only one command:</P>
    <CMD>mkdir dir1 dir2</CMD>
    <P>This command means "Make Directory."</P>
    <P>To create files from the shell, we can use the <InlineCode>touch</InlineCode> command. For example, if we want to create a file called <InlineCode>aNewFile.txt</InlineCode>, we can achieve that by writing this in the terminal:</P>
    <CMD>touch aNewFile.txt</CMD>
    <P>We can use the <InlineCode>ls</InlineCode> command to check if these directories and files exist on the desktop.</P>
    <P>If we want to change the working directory, we can use the <InlineCode>cd</InlineCode> command. This command means "Change Directory." Let's imagine that we are now in <InlineCode>/home/user/Desktop/</InlineCode> directory. If we want to go to <InlineCode>/home/user/</InlineCode> directory, we can use two commands for that:</P>
    <CMD>cd ..</CMD>
    <P>The second command is:</P>
    <CMD>cd /home/user/</CMD>
    <P>We recommend using the first one. What the first command does is that it sends the user back by one directory. For example, if we are in <InlineCode>/var/www/html/</InlineCode> and we want to go back, we will use the <InlineCode>cd ..</InlineCode> command. It will send us to <InlineCode>/var/www/</InlineCode>.</P>
    <P>If we want to go into a directory, we can type the name of the directory instead of typing <InlineCode>..</InlineCode>. If we are on the desktop and there is a directory <InlineCode>secData</InlineCode>, we can go inside by typing:</P>
    <CMD>cd secData/</CMD>
    <P>Well, <InlineCode>/</InlineCode> is not necessary.</P>
</Window>

<Window i={6}>
    <H3>Lesson 6:</H3>
    <H1>File Structure in Linux</H1>
    <P>In this lesson, we are going to discuss Linux file structure. This is very important because everyone needs to understand how files work in Linux and what each directory does. The main directory is <InlineCode>/</InlineCode>. We call this the "Root directory." That's because it's the first folder, and everything comes after it. If you are in <InlineCode>/</InlineCode> directory and you type <InlineCode>cd ..</InlineCode>, you are going to end up being in <InlineCode>/</InlineCode> again because nothing comes before that.</P>
    <P>The main directory contains several directories. These are: <InlineCode>bin</InlineCode>, <InlineCode>boot</InlineCode>, <InlineCode>dev</InlineCode>, <InlineCode>etc</InlineCode>, <InlineCode>home</InlineCode>, <InlineCode>lib</InlineCode>, <InlineCode>lib64</InlineCode>, <InlineCode>media</InlineCode>, <InlineCode>mnt</InlineCode>, <InlineCode>opt</InlineCode>, <InlineCode>proc</InlineCode>, <InlineCode>root</InlineCode>, <InlineCode>sbin</InlineCode>, <InlineCode>srv</InlineCode>, <InlineCode>sys</InlineCode>, <InlineCode>tmp</InlineCode>, <InlineCode>usr</InlineCode>, and <InlineCode>var</InlineCode>.</P>
    <P>The first directory is <InlineCode>bin</InlineCode>. This directory contains essential binary files (commands) that are required to recover and maintain the system. This is not the only directory which contains executable files.</P>
    <P>The second directory is <InlineCode>boot</InlineCode>. This directory contains bootloader files and the Linux kernel. The bootloader is a program that starts up the OS. When you power up your computer, the bootloader starts the operating system for you.</P>
    <P>The third directory is <InlineCode>dev</InlineCode>. This directory contains device files that are required to communicate with the hardware. Later in this course, you will learn that everything is a file in Linux. For example, your HDD (Hard Disk Drive) might be <InlineCode>/dev/sda</InlineCode>, and the USB flash drive might be <InlineCode>/dev/sdb</InlineCode>. In most cases, the text terminal is <InlineCode>/dev/tty1</InlineCode>.</P>
    <P>The fourth directory is <InlineCode>etc</InlineCode>. This directory contains configuration files and some of the system settings. For example, if you install the Apache2 web server on Linux, its configuration files are going to be in <InlineCode>/etc/httpd/</InlineCode> directory. Also, you can change the DNS (Domain Name System) server from <InlineCode>/etc/resolv.conf</InlineCode> file.</P>
    <P>The fifth directory is <InlineCode>home</InlineCode>. This directory contains the folders that are created for users. Each user (except the root user) has its directory in <InlineCode>/home</InlineCode>, and the names of these directories are the same as the names of users.</P>
    <P>After that, we have <InlineCode>lib</InlineCode> and <InlineCode>lib64</InlineCode>. These directories contain essential libraries. In fact, many programs depend on these libraries (if you want to learn what libraries are and how they work, check out our programming courses). You will need programming knowledge when you start working with Linux for IT.</P>
    <P>Then we have <InlineCode>media</InlineCode> and <InlineCode>mnt</InlineCode> directories. These are used for devices such as USB flash drives and CD disks. So, these directories are used for removable media.</P>
    <P>After that, we have <InlineCode>opt</InlineCode>. In later lessons, we will teach you what package managers are and how they work. But for now, remember that this directory contains packages that are not part of the package manager.</P>
    <P>After that, there is the <InlineCode>proc</InlineCode> directory. Here, virtual files are located for system processes. This is a dynamic directory and it provides real-time information about the system.</P>
    <P>After that, we have <InlineCode>root</InlineCode> directory. This is a home directory for the <InlineCode>root</InlineCode> user. Other users don't have permission to access this folder.</P>
    <P>Then we have <InlineCode>sbin</InlineCode> directory. This also contains executable files (commands), but they are used for the <InlineCode>root</InlineCode> user. For example, if you want to restart an Ubuntu server, only the <InlineCode>root</InlineCode> user has the permission to use the <InlineCode>reboot</InlineCode> command for that.</P>
    <P>Then we have <InlineCode>srv</InlineCode> directory. This directory contains data that needs to be served by the system. For example, if you have a webserver or FTP server hosted on Linux, they will use this directory to do their job correctly. It's also possible to change the directory in their configuration files.</P>
    <P>After that, we have <InlineCode>sys</InlineCode> directory. This directory is used for having virtual files that have data about Kernel parameters and configuration.</P>
    <P>Then we have <InlineCode>tmp</InlineCode>. This directory is used for storing temporary files and directories that are used by processes that are being executed. When you reboot the computer, everything is going to be deleted that is in this directory. So, don't store anything essential here. For example, if you wrote a software, don't place the source code there. It's going to be deleted after a reboot.</P>
    <P>After that, there is the <InlineCode>usr</InlineCode> directory. This directory contains specific data, libraries, and documentation. It also contains some binary files.</P>
    <P>Finally, we have the <InlineCode>var</InlineCode> directory. This directory contains variable data, for example, system logs.</P>
</Window>

<Window i={7}>
    <H3>Lesson 7:</H3>
    <H1>Input and Output in Files</H1>
    <br/>
    <P>In this lesson, we are going to talk about how I/O (Input/Output) works in files when using Linux. There are many ways to do these things in the Linux terminal. For example, it's possible to use TUI (Terminal User Interface) text editors such as Vim, NeoVim, Helix, and Nano, but we will discuss TUI text editors in later lessons. We can use <InlineCode text="cat"/> command to read data from files. For example, let's make a C++ file and write this code inside of it:</P>
    <Code language="cpp" text=
    {`#include <iostream>

int main(){
    std::cout << “Hello Nautillus!\n” << “Learn the art of hacking!” << std::endl;

    return 0;
}`} />
    <P>Let's say that the name of that file is <InlineCode text="main.cpp"/>. We can use <InlineCode text="cat"/> command like this:</P>
    <CMD>cat main.cpp</CMD>
    <P>We can show you the example:</P>
    <IMG src="/courses/Linux/5.png" />
    <P>As you can see, we read data from the file.</P>
    <P>Let's write data into the file. To do that, we need to perform more advanced operations, but don't worry, we will explain everything. Let's say that we want to write this text in <InlineCode text="file.txt"/> file: <InlineCode text="Write this data into the file!"/>, to achieve that, we need to write this command:</P>
    <CMD>echo “Write this data into the file!” {">"} file.txt</CMD>
    <P>This might be confusing to you, but actually, it's not that complex. The first word is <InlineCode text="echo"/>. This command is very simple, when we give it a text, it returns that text back. Look at this example:</P>
    <IMG src="/courses/Linux/6.png" />
    <P>As you can see, it repeated the text that we wrote. We are writing that text in the file by adding <InlineCode text=">"/> symbol. Basically, it sends return values (To understand what return values are, complete our programming courses) to files. For example, we can use <InlineCode text="ping"/> command to send ICMP echo requests to a router, and we can send its output to the file too:</P>
    <IMG src="/courses/Linux/7.png" />
    <P>As you can see, we wrote its output to <InlineCode text="output.txt"/> file.</P>
    <P>Finally, after <InlineCode text=">"/> symbol, the name of a file is needed. For example, we wrote <InlineCode text="file.txt"/> in the previous example, which means that the target file is <InlineCode text="file.txt"/>.</P>
</Window>

<Window i={8}>
    <H3>Lesson 8:</H3>
    <H1>And Then You Meet Vim</H1>
    <br/>
    <P>In the IT industry, there is a joke: "It's impossible to exit Vim." Before we start talking about how to use Vim, let us explain what Vim is. Vim is a text editor that was created in 1991. The problem is that UNIX-like systems (like Linux) didn't have GUI back then, and when people wanted to edit files, they needed some kind of interface that would give them an opportunity to edit files. Basically, Vim is like a notepad (text editor on Windows) but it's in the terminal. The problem is that there is no mouse in terminals. That means the only way to navigate is with a keyboard. So, when you are using Vim, there are keywords created for actions that require GUI. For example, if you want to save a file, you can't just press <InlineCode text="CTRL + S"/> on your keyboard; you need to press <InlineCode text=":"/> and then you need to write <InlineCode text="w"/> or if you want to save and exit the editor, <InlineCode text="wq"/>. If you want to exit Vim without saving a file, you need to press <InlineCode text=":"/> and then you need to write <InlineCode text="qa!"/>. Yes, all of this seems hard, and for many people, it is, but when you start working with Linux servers, you will find out that you need to access and edit files quickly. There is no time to use a mouse. You will need to do things quickly, and your only friend is going to be a keyboard (it sounds like suffering, but it's not like that).</P>
    <P>Let's open a file with Vim. To do that, first, find the file you want to edit. For this example, we are going to use <InlineCode text="main.cpp"/> file:</P>
    <CMD>vim main.cpp</CMD>
    <P>You've successfully opened a file using Vim. Now, don't press anything yet. You are in a visual mode. Yes, Vim has several modes: normal mode, insert mode, visual mode, and command mode. There are other modes, but they are not important for now. The first mode is activated when you enter Vim initially. You can navigate through text, perform copying, pasting, deleting, and executing commands. The second mode is activated when you press <InlineCode text="I"/> on your keyboard (In new versions of Vim such as Neovim, if you press any key, insert mode is going to be activated). You can write text in a file when Vim is in this mode. Then we have visual mode. This mode is for cutting and deleting text. The last but not least is command mode. This is very interesting because Vim is controlled from this mode. When Vim is in any mode and you press <InlineCode text=":"/> key on your keyboard, command mode will be started. If you want to see commands, press <InlineCode text="TAB"/> when you are in command mode. We already taught you basic commands, such as saving and exiting.</P>
    <P>Now you might ask: "Why should I know how to use Vim?" The answer is simple: To access and edit files quickly.</P>
</Window>

<Window i={9}>
    <H3>Lesson 9:</H3>
    <H1>Users and Groups</H1>
    <br/>
    <P>It's very important to manage users and groups in Linux. If these things are not managed correctly, there are going to be many vulnerabilities that can be used by hackers to exploit the system. In most cases, hackers don't gain access directly on <InlineCode text="root"/> user. At first, they gain access on another user, and with privilege escalation, they manage to get access on <InlineCode text="root"/> user. To prevent all of this from happening, you need to correctly manage users and groups.</P>
    <P>Let's power up our Linux server. At first, we are going to be a <InlineCode text="root"/> user. We want to install Apache2 webserver, but we don't want it to be attached to <InlineCode text="root"/> user because if hackers find RCE (Remote Code Execution) exploits, they will be able to execute commands as <InlineCode text="root"/> user. So, let's create a user called <InlineCode text="user"/>:</P>
    <CMD>adduser user</CMD>
    <P>This is what's going to happen:</P>
    <IMG src="/courses/Linux/8.png" />
    <P>You might think that we didn't write passwords, but we did. Shells have the ability to take passwords from a user without showing what the user is writing in the terminal. Of course, if you customize your shell, you will be able to change that setting however you want.</P>
    <P>Now, we need to login as <InlineCode text="user"/> user. To do that, we need to use <InlineCode text="su"/> command like this:</P>
    <CMD>su user</CMD>
    <P>We don't have to type <InlineCode text="user"/> user's password in this case because as we said earlier, <InlineCode text="root"/> user has the permission to do anything. Look at this example:</P>
    <IMG src="/courses/Linux/9.png" />
    <P>Now we are <InlineCode text="user"/> user, and because of that, the prompt has changed. We can't do anything with this user because it doesn't have the permission to use <InlineCode text="sudo"/> command. This command is used to execute commands as root. For example, if a user types <InlineCode text="sudo rm -rf file.txt"/>, the file will be removed by <InlineCode text="root"/> user. Users can only use that command if they are in a special group called <InlineCode text="wheel"/>, and also, users have to type their passwords if they want to execute commands with <InlineCode text="sudo"/>. Let's go back to <InlineCode text="root"/> user and add <InlineCode text="user"/> user to the <InlineCode text="wheel"/> group:</P>
    <CMD>usermod -aG wheel user</CMD>
    <P>Now <InlineCode text="user"/> user is able to use <InlineCode text="sudo"/> command.</P>
    <P>You might be confused about what groups are. A group is a collection of users, and it gives its members access to something. For example, as we said before, the <InlineCode text="wheel"/> group gives users access to the <InlineCode text="sudo"/> command.</P>
    <P>We successfully created a new user and added it to the <InlineCode text="wheel"/> group. Now we can install a webserver and run it from a new user.</P>
</Window>

<Window i={10}>
    <H3>Lesson 10:</H3>
    <H1>File Permissions</H1>
    <br/>
    <P>In this lesson, we are going to talk about file permissions. This is a very important topic because almost everything is built on this, and please pay attention to every detail that we mention in this lesson.</P>
    <P>As we said earlier, everything is a file in Linux. Knowing permission types will help you in many things. First of all, you need to understand what permission types are. In Linux, there are three permission types: read, write, and execute. Read permission means that a user can read data from that file. It means that a user can obtain information that is written inside that file. Write permission means that a user can write data to that file. It means that a user can add information to that file. Execute permission means that a user can execute a file. For example, if you write this code in <InlineCode text="main.cpp"/> file:</P>
    <Code language="cpp" text=
    {`#include <iostream>

int main(){
    std::cout << "Yes, yes, it works!" << std::endl;

    return 0;
}`} />
    <P>And then you compile it like this:</P>
    <CMD>g++ main.cpp -o main</CMD>
    <P>You will be able to execute it like this:</P>
    <CMD>./main</CMD>
    <P>On the other hand, you can't execute a file if you don't have the permission. Of course, the file has to be executable if you want to execute it. This will happen if you try to execute a file but you don't have the permission to do it:</P>
    <IMG src="/courses/Linux/10.png" />
    <P>Let's start up our server again and see file permissions in <InlineCode text="/"/> directory:</P>
    <IMG src="/courses/Linux/11.png" />
    <P>Let's take <InlineCode text="lrwxrwxrwx"/> for example. This might be very confusing for you, but in reality, it's just telling us information about who has permissions and who doesn't.</P>
    <P>The first letter gives us information about what type the file is. In this case, it's <InlineCode text="l"/>, which means symbolic link. We are going to talk about linking later in this course. These letters can be: -, d, l, c, and b. The first letter means that it's a regular file. The second letter means that it's a directory. We already talked about the third letter. The fourth letter means that the file is a character device file. The fifth letter means that the file is a block device file.</P>
    <P>It's time to talk about permissions. The section <InlineCode text="rwxrwxrwx"/> is divided into three parts. Each part contains three letters. The first part gives us information about user permissions. In this case, the user can read, write, and execute the file. The second part gives us information about group permissions. In this case, the group has permission to read, write, and execute. The last part gives the information about other permissions. In this case, others can read, write, and execute the file.</P>
    <P>Let's discuss another example. In this case, we have <InlineCode text="-r-xr-x---"/>. The first letter is <InlineCode text="-"/>, that means it's a regular file. Then you can see that the user has the permission to read and execute the file but doesn't have the permission to write data into that file. Then we have group permissions. It's the same as the user's permissions. Finally, we have other permissions. Others don't have any permissions.</P>
    <P>After permissions, we have the owner user and group of the file. Let's discuss this example: <InlineCode text="-rwxrwx--- Ricco sap"/>. In this case, the owner of this file is <InlineCode text="Ricco"/> user, and the group that owns this file is <InlineCode text="sap"/>. Actually, the group doesn't really own the file; it's just being associated with this file.</P>
    <P>Why is it important to know file permissions? Because if you don't know how to manage permissions correctly, hackers will easily gain access to sensitive information. Look at this example:</P>
    <IMG src="/courses/Linux/12.png" />
    <P>As you can see, <InlineCode text="root"/> user doesn't even have the permission to read the file, but others can read, write, and execute the file. The user who is not <InlineCode text="root"/> can easily read the secret information from that file.</P>
</Window>

<Window i={11}>
    <H3>Lesson 11:</H3>
    <H1>Changing the Owner of a File</H1>
    <br/>
    <P>In this lesson, we are going to talk about changing the owner of a file. This is very useful because we can manage files and directories easily.</P>
    <P>Why should you change the owner of a file? If you manage ownership correctly, your server will be much more secure. Hackers can use incorrect ownership of files for privilege escalation attacks.</P>
    <P>Let's discuss an example. Imagine that you have a file called <InlineCode text="data.json"/> in your documents folder, and you want to change the owner of that file. The owner of the file is <InlineCode text="user"/> user, but you want <InlineCode text="root"/> user to be the owner of the file. To set <InlineCode text="root"/> user as the owner of that file, you need to type this:</P>
    <CMD>chown root data.json</CMD>
    <P>Now, let's remove all permissions from <InlineCode text="user"/> user like this:</P>
    <CMD>chmod 700 data.json</CMD>
    <P>In this command, <InlineCode text="700"/> means that we want to set file permissions like this:</P>
    <CMD>
        -rwx------
    </CMD>
    <P>You already understand what that tells us. Only the user who owns the file can read, write, and execute the file.</P>
    <P>Now, the file is protected from other users. Only <InlineCode text="root"/> user can access the file. Other users can't even read data from that file.</P>
</Window>

<Window i={12}>
    <H3>Lesson 12:</H3>
    <H1>How to Get Help</H1>
    <br/>
    <P>Linux has hundreds of thousands of commands. We can't discuss every one of them in courses. In fact, nobody can do that. There will be situations in your career when you decide to do something but won't be able to use a command. For example, if you want to send files via SSH (Secure SHell), you will need to use the <InlineCode text="scp"/> command. You might not know how to use that command. You can get help from two sources: You can search the usage of that command online, or you can use the <InlineCode text="man"/> command to read the documentation of that command in your terminal.</P>
    <P>For example, if you don't know how to use <InlineCode text="scp"/> to send files via SSH, type this command in your terminal:</P>
    <CMD>man scp</CMD>
    <P>This command will spawn the documentation of the command in your terminal. Then you will be able to read everything about <InlineCode text="scp"/>.</P>
    <P>Please note that not every command has documentation in <InlineCode text="man"/>. For example, if you want to see how to use <InlineCode text="msfconsole"/>, you can't use the <InlineCode text="man"/> command because it doesn't have documentation there. You will need to search information about <InlineCode text="msfconsole"/> online.</P>
    <P>There is another way of getting help. Almost every command supports <InlineCode text="-h"/> or <InlineCode text="--help"/> flag (we will discuss command flags later). These flags mean that you want to see how the command can be used. For example, if you want to see how to use <InlineCode text="bash"/> command, write this in your terminal:</P>
    <CMD>bash --help</CMD>
    <P>These flags are just command arguments that can be given to commands (check our programming courses to understand what arguments are).</P>
    <P>As a Linux server administrator or as a hacker, you have to be able to search the usage of the command quickly. Use every source of information to complete tasks as soon as possible. Just imagine that you are a hacker and you are attacking some government website. You need to use some command but you don't know how. You start searching online to find out how to use flags on that specific command. That will take tens of minutes. That's too much time. Just use <InlineCode text="man"/> command or <InlineCode text="--help"/> flag. Being able to do things quickly is required in Linux server administration too. Imagine that you want to create a Docker container and you don't know how. Instead of searching online, you can just use <InlineCode text="man"/> command. Saving time will help other departments of your company to complete tasks quickly.</P>
</Window>

<Window i={13}>
    <H3>Lesson 13:</H3>
    <H1>Binary in "chmod"</H1>
    <br/>
    <P>Look at this command: <InlineCode>chmod 777 executable.elf</InlineCode>. In this example, we are giving some kind of permissions on <InlineCode>executable.elf</InlineCode> file. What does <InlineCode>777</InlineCode> mean? Well, actually, it's not a very complicated thing. This number represents a binary number.</P>
    <P>Let's take a look at permission information: <InlineCode>-rwx------</InlineCode>. You can see that the owner can read, write, and execute the file, but other people can do nothing. We can write this in a decimal number. To achieve that, we need to convert this into binary. We can take "r," "w," and "x," and they will represent 1. We can take "-" and it will represent 0. Now, if we write this in binary, we are going to get this:</P>
    <CMD>
111000000
    </CMD>
    <P>You already know that there are three sections, and each section contains three symbols (digits in binary). In binary, <InlineCode>111</InlineCode> means 7. So, if we write this:</P>
    <CMD>chmod 700 executable.elf</CMD>
    <P>We are going to get this:</P>
    <CMD> 
-rwx------
    </CMD>
    <P>If you can count to 7 in binary, you will be able to set permissions using the <InlineCode>chmod</InlineCode> command without any problem.</P>
    <P>Let's discuss another example. This is the command: <InlineCode>chmod 742 executable.elf</InlineCode>. This means that we are going to have <InlineCode>rwx</InlineCode> in the first section because 7 in binary is <InlineCode>111</InlineCode>. We are going to have <InlineCode>r--</InlineCode> in the second section because 4 in binary is <InlineCode>100</InlineCode>. We are going to have <InlineCode>-w-</InlineCode> in the last section because 2 in binary is <InlineCode>10</InlineCode>.</P>
    <P>You can now set your own custom permissions on files and directories. Use this skill wisely because if you set permissions incorrectly, there is going to be a chance that a hacker will exploit your mistakes.</P>
</Window>

<Window i={14}>
    <H3>Lesson 14:</H3>
    <H1>Pipes</H1>
    <br/>
    <P>Pipes are used often because they are very powerful. They give us the opportunity to execute many commands at the same time. For example, if you are analyzing log files, you might want to find specific pieces of text in them. Log files can contain millions of lines of text, and it will be extremely hard for you to find things that you need.</P>
    <P>Imagine that you are a Linux server administrator, and hackers have attacked servers. The next day, cybersecurity specialists give you possible IP addresses which might belong to the attack, and they tell you to find them in log files. You type this command:</P>
    <CMD>
cat httpd_log.txt
    </CMD>
    <P>The problem is, millions of lines of text are shown to you. It’s very hard to find the correct information. You can use pipes to filter information. Let’s say that the IP address that was given to you is <InlineCode>83.192.57.22</InlineCode>. You can filter information like this:</P>
    <CMD>
cat httpd_log.txt | grep "83.192.57.22"
    </CMD>
    <P>Now, only those lines will be printed that contain <InlineCode>83.192.57.22</InlineCode>.</P>
    <P>Of course, we can use multiple pipes at the same time. For example, if we also want to sort those lines, we can add <InlineCode>| sort</InlineCode> at the end of the command like this:</P>
    <CMD>
cat httpd_log.txt | grep "83.192.57.22" | sort
    </CMD>
    <P>Pipes are like threading but in terminals (To learn what threading is and how it works, complete our programming courses).</P>
</Window>

<Window i={15}>
    <H3>Lesson 15:</H3>
    <H1>Remove Data from Files</H1>
    <br/>
    <P>In this lesson, we are going to teach you how to remove information from files. There are many ways of doing that. In this lesson, we are going to discuss two of them.</P>
    <P>The first method is very easy. Let’s take <InlineCode>DSIS.asm</InlineCode> file as an example. This file contains assembly code (Check out our Assembly course). If we want to remove everything from this file, we can type this:</P>
    <CMD>
: {">"} DSIS.asm
    </CMD>
    <P>Then, if you type <InlineCode>cat DSIS.asm</InlineCode>, you will see that it’s empty. That’s because <InlineCode>:</InlineCode> means nothingness. It’s null, and we are addressing it to <InlineCode>DSIS.asm</InlineCode> file.</P>
    <P>The second method uses <InlineCode>/dev/null</InlineCode>. This file is a constant stream of zeros. We can put those zeros anywhere we want. In this case, we are going to fill <InlineCode>DSIS.asm</InlineCode> with zeros:</P>
    <CMD>
cat /dev/null {">"} DSIS.asm
    </CMD>
    <P>As you can see, we read data from <InlineCode>/dev/null</InlineCode> file and we filled <InlineCode>DSIS.asm</InlineCode> file.</P>
    <P>Why do you need to do that? Well, imagine that you gained access to a server. You hacked it and stole information, but now you want to remove your traces. You can delete data from files that you used when you were in the server’s shell.</P>
    <P>Many hackers use <InlineCode>shred</InlineCode> command, but it removes everything from files, even metadata by overwriting the file’s inode. The only problem <InlineCode>shred</InlineCode> command has is that it fills files with random data. That’s bad because if server administrators find files like that, they will find out that the hacker was in the shell, doing bad things to them.</P>
</Window>

<Window i={16}>
    <H3>Lesson 16:</H3>
    <H1>File Linking</H1>
    <br/>
    <P>In this lesson, we are going to talk about file linking in Linux. Knowing how to link files will help you in many situations. It has many uses; for example, with file linking, we can enable or disable services (httpd, sshd, vsftpd, and etc).</P>
    <P>What are file links? A file link is a reference to the file. It's possible to create many links to a single file. There are two types of file links: hard links and soft links. These links can be applied to anything. For example, if there is a file called <InlineCode text="file.txt"/> in <InlineCode text="/home/user/Documents"/> directory, and we want to create its link in <InlineCode text="/var/www/html"/> directory, we can do it by writing this command:</P>
    <CMD>sudo ln /home/user/Documents/file.txt /var/www/html/file_link.txt</CMD>
    <P>Please note that this is a hard link. A hard link is a direct link to the file. When we are creating a hard link, we treat it as a separate file, but it's just a reference. So, if the original file is changed in some way, these changes will affect the hard link too. Also, if any changes were made to the hard link, these changes will affect the original file. Note that files and their hard links share the same inode numbers (we will discuss inodes). To create a hard link, we can use the <InlineCode text="ln"/> command. As we already told you, if you want to see how to use a specific command, use <InlineCode text="man"/>, but actually, it's very easy to create a hard link. This is how it's possible to create a hard link to a file:</P>
    <CMD>sudo ln &lt;File_name_here&gt; &lt;Link_here&gt;</CMD>
    <P>Now you know how to create hard links.</P>
    <P>Unlike hard links, soft links (also known as symbolic links) are not direct links but instead, they point to the file's location in the file system. That means if a file is deleted or moved somewhere else, its soft link won't be valid anymore. It's also very easy to create soft links. The only difference between creating hard links and creating soft links is that soft links require <InlineCode text="-s"/> in the command:</P>
    <CMD>sudo ln -s /home/user/Documents/file.txt /var/www/html/file_link.txt</CMD>
    <P>Now you can create both hard and soft links. We recommend practicing creating links to different files. Also, use <InlineCode text="ls"/> command to learn more about links. Use <InlineCode text="ls -l"/> to see what types of files the links are.</P>
</Window>

<Window i={17}>
    <H3>Lesson 17:</H3>
    <H1>How to Find Files?</H1>
    <br/>
    <P>It might be hard to find specific files when you are managing Linux servers. That's because thousands of files are created for applications and services. We can use several commands to find files in the Linux file system.</P>
    <P>There are two main commands to find files: <InlineCode text="whereis"/> and <InlineCode text="locate"/>. Let's say you want to find a file called <InlineCode text="resolv.conf"/>. Actually, every Linux administrator or hacker knows that this file is stored in <InlineCode text="/etc"/> directory (In reality, this file is a link to <InlineCode text="/run/systemd/resolve/stub-resolv.conf"/>), but we are going to use it for our example. We can type this command to find it:</P>
    <CMD>whereis resolv.conf</CMD>
    <P>We can also use <InlineCode text="locate"/> the same way to find the file.</P>
    <P>There is another command that tells us where the command is located. For example, if we want to find out where the <InlineCode text="ping"/> command is executed from, we can type this:</P>
    <CMD>which ping</CMD>
    <P>The output is going to be <InlineCode text="/usr/bin/ping"/>. Now we know the location of the <InlineCode text="ping"/> executable file.</P>
</Window>

<Window i={18}>
    <H3>Lesson 18:</H3>
    <H1>Inodes</H1>
    <br/>
    <P>In this lesson, we are going to talk about inodes. Inodes are a fundamental concept in Unix-like operating systems.</P>
    <P>What is an inode? An inode is a data structure to represent and store information about files and directories in the file system. Every file and directory has its own inode that contains metadata about these files and directories. Information stored in inodes includes: file types (what type is a file), permissions (user, group, and other permissions), ownerships (who owns files or directories), file size in bytes, pointers to data blocks, and more. Every inode has a unique number.</P>
    <P>We already talked about links. Inodes contain information about hard links. Inodes count these links.</P>
    <P>To see inode numbers from the terminal, we can use the <InlineCode text="ls"/> command. Let's say we have a file called <InlineCode text="exec.elf"/> and we want to check its inode number. We can do that like this:</P>
    <CMD>ls -i exec.elf</CMD>
    <P>If you want to see more information about files, use the <InlineCode text="stat"/> command. It will give you information about the file's inode, size, block amount, the number of links, and more. Let's use this command on <InlineCode text="exec.elf"/>:</P>
    <CMD>stat exec.elf</CMD>
    <P>In our case, the output is this:</P>
    <Code language="php" text=
    {`File: exec.elf
Size: 305659904 	Blocks: 596992     IO Block: 4096   regular file
Device: 8,1	Inode: 23212415    Links: 1
Access: (0755/-rwxr-xr-x)  Uid: (1000/user)   Gid: (1000/user)
Access: 2023-10-09 14:36:30.622087289  +0400
Modify: 2023-10-09 14:36:43.955924059 +0400
Change: 2023-10-09 14:36:43.955924059 +0400
Birth: 2023-10-09 14:36:30.622087289 +0400`}
    />
</Window>

<Window i={19}>
    <H3>Lesson 19:</H3>
    <H1>User Management in Linux</H1>
    <br/>
    <P>Correct user management is extremely important in Linux. In this lesson, we are going to teach you everything that you need to know about user management in Linux.</P>
    <P>Let's start by creating a simple user. You already know how it's done, but we are going to repeat the process:</P>
    <CMD>adduser user</CMD>
    <P>You need to type a password and then give it some additional information, but it isn't required. Now, we need to add the user to the <InlineCode text="sudo"/> group because without it, it's impossible for a user to use <InlineCode text="sudo"/>:</P>
    <CMD>usermod -aG sudo user</CMD>
    <P>Note that some Linux distributions require <InlineCode text="wheel"/> instead of <InlineCode text="sudo"/>:</P>
    <CMD>usermod -aG wheel user</CMD>
    <P>Now, let's delete the <InlineCode text="user"/> user:</P>
    <CMD>userdel user</CMD>
    <P>Note that this command deletes the user but doesn't remove the user's home directory. If we want to delete the user and remove its home directory too, we should add the <InlineCode text="-r"/> flag in the command:</P>
    <CMD>userdel -r user</CMD>
    <P>Now, the home directory of the user is also removed.</P>
    <P>It's time to talk about group management. It's possible to create custom groups in Linux. We can use the <InlineCode text="groupadd"/> command. For example, if we want to create a group called <InlineCode text="group1"/>, we can do that by typing this command:</P>
    <CMD>groupadd group1</CMD>
    <P>Then, if we want to add a user to that group, we can type this:</P>
    <CMD>usermod -aG group1 user</CMD>
    <P>In this case, we added the <InlineCode text="user"/> user to the <InlineCode text="group1"/> group. It's possible to add users to multiple groups. To check which users are in a group, we can use the <InlineCode text="getent"/> command:</P>
    <CMD>getent group group1</CMD>
    <P>In this case, we are checking members of the <InlineCode text="group1"/> group.</P>
    <P>To delete a group, we can use the <InlineCode text="groupdel"/> command. It's the same as deleting a user, but the main command is different:</P>
    <CMD>groupdel group1</CMD>
    <P>In this case, we deleted the <InlineCode text="group1"/> group. To list existing groups, we can use the <InlineCode text="getent"/> command like this:</P>
    <CMD>getent group</CMD>
    <P>This will show every group that exists.</P>
    <P>It's time to talk about permissions. You already know that we can change user permissions with the <InlineCode text="chmod"/> command. To change group permissions, we still use the <InlineCode text="chmod"/> command, but we add <InlineCode text="g+"/> like this:</P>
    <CMD>chmod g+rw file.txt</CMD>
    <P>In this case, we are giving read and write permissions to the owner group of <InlineCode text="file.txt"/> file.</P>
    <P>To change owner group of a file or directory, we can use the <InlineCode text="chown"/> command. For example, if we have <InlineCode text="file.txt"/> file and we want to change the owner group, we can do this:</P>
    <CMD>chown :group1 file.txt</CMD>
    <P>Now, the new group that owns <InlineCode text="file.txt"/> is <InlineCode text="group1"/>.</P>
    <P>Finally, we are going to talk about how to lock and unlock a user. Yes, Linux supports locking and unlocking users. For example, if we want to lock the <InlineCode text="user"/> user, we need to type this command in the terminal:</P>
    <CMD>sudo passwd -l user</CMD>
    <P>On the other hand, if we want to unlock the user, we need to type this command in the terminal:</P>
    <CMD>sudo passwd -u user</CMD>
</Window>

<Window i={20}>
    <H3>Lesson 20:</H3>
    <H1>Power Commands</H1>
    <br/>
    <P>When it comes to electronic devices, it's extremely important to correctly turn them on and off. If you want to turn a computer or a server off and you just remove the power source, it might cause data loss. As a Linux server administrator or as a person who uses Linux on their computer, you don't want to lose your data. Linux has commands that solve that problem for us.</P>
    <P>The first command is <InlineCode text="shutdown"/>. This command is used for turning the computer off. To turn the computer (or server) off instantly, use this command:</P>
    <CMD>shutdown -h now</CMD>
    <P>This command tells the device that we want to turn it off now. In case you want to schedule shutdown, you will need to write the time instead of <InlineCode text="now"/>. For example, if you want your computer to be turned off at 19:50, then you will need to use this command:</P>
    <CMD>shutdown -h 19:50</CMD>
    <P>If you want to cancel the shutdown, then use this command:</P>
    <CMD>shutdown -c</CMD>
    <P>These commands will help you control when your computer will turn itself off.</P>
    <P>Now, let's talk about rebooting your computer (or server). If you want to reboot your computer, you can simply type this command:</P>
    <CMD>reboot</CMD>
    <P>That's all.</P>
    <P>In case you want to suspend or hibernate your computer (or server), then use these commands:</P>
    <CMD>systemctl suspend</CMD>
    <CMD>systemctl hibernate</CMD>
    <P>Now you know how to use power commands in Linux.</P>
</Window>

<Window i={21}>
    <H3>Lesson 21:</H3>
    <H1>Configure Network in Linux</H1>
    <br/>
    <P>In this lesson, we are going to teach you how you can configure the network in Linux. To understand everything, it's recommended to complete our Networking course. It will be very beneficial to you later in your career.</P>
    <P>Most of the time, when you connect a computer to the network, a DHCP server handles it. The DHCP server gives it an IP address and information about the default gateway. But sometimes, there is no DHCP server in the network. That means devices won't be able to get IP addresses automatically. Because of that, you should be able to set up network settings by yourself. Note that most of the time, DHCP servers handle devices, but if you will ever work with a network that has no DHCP server for some reason, then you will need to use this skill.</P>
    <P>Ok, let's start by identifying network interfaces. You can use the <InlineCode text="ifconfig"/> command, which can be installed with the package manager (we will discuss this topic later), but if there is no internet connection, you won't be able to download it. So, we are going to use this command:</P>
    <CMD>ip a</CMD>
    <P>The output is going to be big, so we are going to show you one of the interfaces:</P>
    <br/>
    <Code language="php" text=
    {`2: enp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 28:80:23:09:f0:e2 brd ff:ff:ff:ff:ff:ff
    inet 192.168.200.102/24 brd 192.168.200.255 scope global dynamic noprefixroute enp1s0
`} />
    <P>In this case, the name of the network interface is <InlineCode text="enp1s0"/>. We can use <InlineCode text="vim"/> to configure this network interface. Let's open <InlineCode text="/etc/network/interfaces"/> file (for Debian-based distros) with Vim and configure <InlineCode text="enp1s0"/> to get access to the internet:</P>
    <Code language="php" text=
    {`auto enp1s0
iface enp1s0 inet static
    address 192.168.100.15
    netmask 255.255.255.0
    gateway 192.168.100.1
`} />
    <P>Please note that these settings don't work everywhere. For example, we gave <InlineCode text="192.168.100.15"/> IP address to our server, but you will need to give the IP address to your device based on your network settings. Also, you might have a different network mask and a different gateway in your network. So, before you set up the network by yourself, check network settings.</P>
    <P>After setting up the network, it's time to restart the <InlineCode text="networking"/> service. If you are using Debian or another distro based on Debian, use this command:</P>
    <CMD>sudo service networking restart</CMD>
    <P>If you are using Arch or another distro based on Arch, use this command:</P>
    <CMD>sudo systemctl restart networking</CMD>
    <P>Then, you can check network status by pinging any IP address (we recommend using <InlineCode text="1.1.1.1"/>) like this:</P>
    <CMD>ping -c 4 1.1.1.1</CMD>
    <P>If ICMP echo requests come back, that means you have access to the internet. Ok, now it's time to set up DNS. You will need to find out which DNS server should be used. If there are no restrictions, you can use any DNS server. In this case, we are going to use one that is in our network, which is <InlineCode text="192.168.100.1"/>. You don't even need to use Vim anymore, just use the <InlineCode text="echo"/> command and send the output into <InlineCode text="/etc/resolv.conf"/> file:</P>
    <CMD>sudo echo “nameserver 192.168.100.1” {">"} /etc/resolv.conf</CMD>
    <P>Now everything will work fine.</P>
</Window>

<Window i={22}>
    <H3>Lesson 22:</H3>
    <H1>Command Structure</H1>
    <br/>
    <P>In this lesson, we are going to talk about command structure. When you are using commands, you are calling files from <InlineCode text="bin"/> directories. These are compiled codes, and most of them are able to take arguments. For example, look at this command:</P>
    <CMD>ls /</CMD>
    <P>The main command is <InlineCode text="ls"/> and its argument is <InlineCode text="/"/>. With the argument, we are telling it to show files and directories that are stored in <InlineCode text="/"/> directory.</P>
    <P>Most of the time, you are going to have commands that require arguments. For example, if you are a hacker or penetration tester or bug hunter, you will have to use <InlineCode text="nmap"/> many times:</P>
    <CMD>nmap --script http-auth targetwebsite.cf</CMD>
    <P>In this case, there are three arguments and one of them is a subargument. Look closely, we are using <InlineCode text="--script"/> to choose the script that is going to be used when scanning <InlineCode text="targetwebsite.cf"/> and the name of the script is <InlineCode text="http-auth"/>. So, <InlineCode text="http-auth"/> is the argument for <InlineCode text="--script"/> and because of that, <InlineCode text="http-auth"/> is the subargument of <InlineCode text="nmap"/> command.</P>
    <P>Well, we understand that all of this seems to be complicated, but actually, it's not that hard. The structure of the command looks like this:</P>
    <CMD>
        {"<mainCommand> <Argument1> <Argument2>..."}
    </CMD>
    <P>Let's create a simple program in C++ language, which will take one argument, and then that argument will be printed:</P>
    <Code language="cpp" text=
    {`#include <iostream>

int main(int argc, char* argv[]){
    std::cout << argv[1] << std::endl;

    return 0;
}`} />
    <P>If we paste the compiled code into <InlineCode text="/bin"/> directory to run it (let's say that the name of the file is <InlineCode text="ourProgram"/>) like this:</P>
    <CMD>ourProgram Hello!</CMD>
    <P>We are going to get <InlineCode text="Hello!"/> as the output. To understand how all of this works, complete our C++ course.</P>
</Window>

<Window i={23}>
    <H3>Lesson 23:</H3>
    <H1>Package Manager</H1>
    <br/>
    <P>Unlike Windows, Linux has a very interesting way to manage system applications. We can use package managers to install software on our devices. Imagine, if you want to download Firefox web browser on Windows, you need to go to the website, download the file, and install Firefox by yourself. On Linux, everything is different.</P>
    <P>Imagine that you are using Arch or Arch-based Linux distribution, and you want to install Firefox web browser on your device. You will need to type this command:</P>
    <CMD>sudo pacman -Sy firefox</CMD>
    <P>Your package manager (in this case <InlineCode text="pacman"/>) connects to a repository (it's a server which holds packages) and downloads <InlineCode text="firefox"/> package. Also, it's downloading other packages that are needed for <InlineCode text="firefox"/> package. These are called dependencies.</P>
    <P>If you want to update your operating system, you will need to use the package manager again. Remember, Linux distributions fully depend on package managers. Let's upgrade Debian and Debian-based Linux distributions. Note that they use <InlineCode text="apt"/> package manager. To do that, we will need to write two commands:</P>
    <CMD>sudo apt update</CMD>
    <CMD>sudo apt upgrade</CMD>
    <P>In some cases, it's recommended to reboot your device after updating your system.</P>
    <P>How to know what package manager your system uses? Well, you can simply search it on Google, but there are several things you should know. If you use Debian or Debian-based Linux distributions, you will have <InlineCode text="apt"/> package manager. If you use Arch or Arch-based Linux distributions, you will have <InlineCode text="pacman"/> package manager. In the case of using Void Linux, then you will have <InlineCode text="xbps-install"/> package manager. If none of them work on your system, then feel free to search information about your Linux distribution. Remember, asking always helps, and you should never stop learning.</P>
    <P>Different package managers have different command structures. For example, if you are using <InlineCode text="apt"/> package manager, you already know how to update your system. On the other hand, if you have <InlineCode text="pacman"/> and you want to update your device, then you will have to use this command:</P>
    <CMD>sudo pacman -Syu</CMD>
    <P>If you have any questions about command usage, you already know how to get that information. With <InlineCode text="man"/> command, you will be able to check every detail of package managers.</P>
</Window>

<Window i={24}>
    <H3>Lesson 24:</H3>
    <H1>"&&" in Commands</H1>
    <br/>
    <P>Sometimes, system updates take hours, and because of that, you might not want to wait for them at the desk. For example, if you are updating your system, you can go somewhere else instead of sitting in front of the screen and watching how your operating system is being updated.</P>
    <P>The problem is that if you want to execute two commands, this might create some problems. Let's say you want to update Ubuntu, which is based on Debian. At first, you will need to write <InlineCode text="sudo apt update"/> and then <InlineCode text="sudo apt upgrade"/>. The problem is that if the first command takes much time and you leave the desk, the second command won't be executed by itself.</P>
    <P>That's why you should use <InlineCode text="&&"/> in commands. Look at this example:</P>
    <CMD>sudo apt update && sudo apt upgrade</CMD>
    <P>In this case, <InlineCode text="sudo apt upgrade"/> will be automatically executed after <InlineCode text="sudo apt update"/>. So, the <InlineCode text="&&"/> operator helps us to create command chains that can be very helpful in many situations.</P>
</Window>

<Window i={25}>
    <H3>Lesson 25:</H3>
    <H1>Desktop Environments and Window Managers</H1>
    <br/>
    <P>Did you know that Linux doesn't have to have a GUI (Graphical User Interface)? Yes, you can have Linux without GUI. No, that doesn't mean that you won't need a screen or some kind of remote connection like SSH or Telnet, but still, you can work without GUI on Linux.</P>
    <P>In this lesson, we are going to talk about DEs (Desktop Environments) and WMs (Window Managers). A DE is a group of packages that create a GUI for users. For example, KDE Plasma, GNOME, XFCE, and more. These are DEs. You can install them from your package manager. Every one of them is different, and every one of them has its pros and cons. There are also WMs, like BspWM, I3WM, and more. These are window managers. Note that DEs and WMs are not the same. Yes, both of them provide GUI, but there is a big difference. For example, if you use DEs, you can use the Desktop to store files. On the other hand, WMs don't have that feature. They just give you a simple GUI for application windows. Unlike WMs, DEs give you a full GUI, with Desktop support. Yes, DEs have more features than WMs, but most of the time, WMs are more beautiful than DEs. We would like to share a very interesting SubReddit with you: <LNK href="https://www.reddit.com/r/unixporn/">Unixporn</LNK>. This SubReddit contains screenshots of WMs that are configured by Linux users. WMs are heavily customizable, unlike DEs.</P>
    <P>Which one should you use, and do you really need one? Well, it depends on your needs. For example, if you want to make 3D models or house design on Linux, then yes, you will need to use a DE or WM. On the other hand, if you are a reverse engineer, you don't really need to have a DE or WM. Now let's decide which one you should use. Well, if you are a beginner, we recommend DEs because they don't need to be configured. If you know coding and you want to try something new, then feel free to use a WM.</P>
</Window>

<Window i={26}>
    <H3>Lesson 26:</H3>
    <H1>Security</H1>
    <br/>
    <P>Of course, it's very important to secure your device. In this lesson, we are going to talk about security in Linux. Unlike Windows, you need to consider many different attack possibilities. Most of the time, Linux devices get attacked from their services (HTTP, FTP, and etc).</P>
    <P>Well, to defend a webserver, you need to find and fix bugs in your code, and that's not what we want to discuss in this lesson. It's important to set up firewalls, set correct file permissions, and set strong passwords on users.</P>
    <P>Ok, let's set up a firewall. To do that, we need to download a package called <InlineCode text="gufw"/>. After that, there is going to be an application which will be used to configure the firewall on the device. You can add different rules on the firewall too.</P>
    <P>Now, it's time to discuss correct file permissions. When you install Linux on the server, be careful not to make mistakes when working with files. Every user must have its own <InlineCode text="home"/> directory, and these directories should not be accessed by other users. Also, don't forget to set passwords on users, and remember, never use weak passwords. Weak passwords can simply be written in many wordlists, and hackers will be able to gain access to your device in no time. So, as we said earlier, use strong passwords.</P>
    <P>It's very important to constantly update your system. Let's think for a second, why updates are needed at all? Updates have two purposes: To add new features and fix bugs. Now, what does fixing bugs mean? Well, every software has problems and security flaws. There are no unhackable programs. So, developers constantly create new updates to solve bugs that they have already found. But the problem is that every update contains bugs. The good thing is that hackers have no idea about that. So, it's better to update your system.</P>
    <P>If you think that your server has been hacked, check system logs. These files contain everything. For example, if you have Apache2 webserver, you can check its logs to find out who was talking to it. Also, close every port that you don't need.</P>
</Window>

<Window i={27}>
    <H3>Lesson 27:</H3>
    <H1>Use "alias"</H1>
    <br/>
    <P>As you start working with Linux, you will see that many commands are very long, and you want to make them shorter. For example, if you are using Debian and you want to update it, you will need to type this on your keyboard:</P>
    <CMD>sudo apt update && sudo apt upgrade</CMD>
    <P>If you don't want to do that, you can create an alias for it. To do that, you will need to use the <InlineCode text="alias"/> command. Let's create a command called <InlineCode text="update"/> to use it instead of the long command:</P>
    <CMD>alias update="sudo apt update && sudo apt upgrade"</CMD>
    <P>That's all you need to create an alias. You can do it for anything. For example, if you want to stop using commonly used flags in the <InlineCode text="nmap"/> command, then do this:</P>
    <CMD>alias nnmap="nmap -sC -sV -A -T5"</CMD>
    <P>Now, if you write <InlineCode text="nnmap targetwebsite.cf"/>, it's going to be equal to this:</P>
    <CMD>nmap -sC -sV -A -T5 targetwebsite.cf</CMD>
</Window>

        </>
    );
  }
  
  export default Test;