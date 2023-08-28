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
<Window i={1}>
    <H3>Lesson 1:</H3>
    <H1>Introduction</H1>
    <br/>
    <P>If you've decided to learn Ruby, it indicates your interest in writing your own Metasploit Framework modules and exploits. This course consists of three parts: Basics of the Ruby language, Object-Oriented Programming (OOP) in Ruby, and Networking in Ruby.</P>
    <br/>
    <P>How does Ruby work? Ruby is a high-level, dynamic scripting language. This means it uses an interpreter for execution. Scripting languages, like Ruby, don't directly interact with hardware. Instead, an interpreter translates Ruby code into machine code each time you run a script.</P>
    <br/>
    <P>Before you start programming in Ruby, you need to install a Ruby interpreter. Let's begin by explaining how to install Ruby on Windows, as many beginners use Windows on their computers. Open your browser and download Ruby from <LNK to="https://rubyinstaller.org/">https://rubyinstaller.org/</LNK> and install it. Then open the command prompt (cmd) and check if Ruby is installed by typing:</P>
    <CMD>ruby -v</CMD>
    <P>This command will display the version of Ruby in the console.</P>
    <br/>
    <P>If you're a Linux user, determine your Linux distribution and follow these steps. For Debian or Debian-based distros, open the terminal and run:</P>
    <CMD>sudo apt install ruby-full</CMD>
    <P>For Arch or Arch-based distros:</P>
    <CMD>sudo pacman -S ruby</CMD>
    <P>If you're using Void Linux:</P>
    <CMD>sudo xbps-install -S ruby</CMD>
    <P>After installing the Ruby package, you're good to go.</P>
    <br/>
    <P>For macOS users, open the terminal and install Ruby using the "brew" package manager:</P>
    <CMD>brew install ruby</CMD>
    <P>Once Ruby is installed, you'll need a text editor to write your code. If you're a Windows user, download Visual Studio Code (VSCode) from <LNK to="https://code.visualstudio.com/download">https://code.visualstudio.com/download</LNK>. You can also download VSCode for Debian, Debian-based, Fedora, OpenSUSE, or Red Hat Linux distros from that link. If you're using a different Linux distro, install the "vscode" package using your terminal. Replace "ruby" with "vscode" in the commands we provided.</P>
    <br/>
    <P>MacOS users can also download VSCode from the link we provided and install it on their computers.</P>
    <br/>
    <P>After installing a text editor, you're ready to start using Ruby!</P>
</Window>

<Window i={2}>
    <H3>Lesson 2:</H3>
    <H1>Variables and Data Types</H1>
    <br/>
    <P>To achieve something with code, we need to manipulate data. For that, we can use variables. Variables are fundamental in programming and exist in every programming language.</P>
    <br/>
    <P>What are variables? Imagine a variable as a container where you can store various types of information. This information can be numbers, texts, symbols, and more.</P>
    <br/>
    <P>To create a variable, you need to give it a name. There are some rules for naming variables. Names can't contain spaces or special symbols, but you can use letters, numbers, and underscores. After naming the variable, you can use the <InlineCode text="="/> operator to assign it a value. For example, to create a variable named <InlineCode text="first_variable_1"/> with a value of 10 in Ruby:</P>
    <Code language="ruby" text={`first_variable_1 = 10`} />
    <P>By doing this, you've created a variable. In computer terms, you've stored the value "10" in computer memory, associated with the variable <InlineCode text="first_variable_1"/>. Storing data in variables is crucial for various programming tasks. For instance, imagine you're creating a server that receives data from clients, processes it, and sends processed data back. To achieve this, you need to store information in variables, both about the clients and the data sent by them.</P>
    <br/>
    <P>Now, let's explore the types of data you can put inside variables. Ruby has several data types, but there are even more in different programming languages. For instance, in C++, there's an <InlineCode text="int"/> (integer) data type for holding whole numbers, and even custom types like <InlineCode text="pid_t"/> for holding process IDs. For now, let's focus on the basic data types in Ruby.</P>
    <P>There are five basic data types in Ruby: integer numbers (<InlineCode text="int"/>), floating-point numbers (<InlineCode text="float"/>), booleans (<InlineCode text="bool"/>), characters (<InlineCode text="char"/>), and strings (<InlineCode text="string"/>).</P>
    <br/>
    <P>The <InlineCode text="int"/> data type is used to store whole numbers. This can be useful for counting, for example:</P>
    <Code language="ruby" text={`cycles_left = 3`} />
    <br/>
    <P>The <InlineCode text="float"/> data type is used to store floating-point numbers with decimal places. It allows for storing more precise numbers:</P>
    <Code language="ruby" text={`pi = 3.14159`} />
    <P>The <InlineCode text="bool"/> data type represents boolean values. It can only have two values: true (1) and false (0). Computers use binary, where 0 means no electricity and 1 means electricity. Similarly, <InlineCode text="bool"/> can have only true or false values:</P>
    <Code language="ruby" text={`is_active = true`} />
    <Code language="ruby" text={`is_inactive = false`} />
    <br/>
    <P>Finally, the <InlineCode text="char"/> data type represents individual characters. In high-level languages, characters and strings are often combined, but in lower-level languages like C and C++, they are distinct. Characters are represented using single quotes:</P>
    <Code language="ruby" text={`first_letter = 'A'`} />
    <br/>
    <P>Strings are sequences of characters. They can be created using either single or double quotes:</P>
    <Code language="ruby" text={`greeting = 'Hello, world!'`} />
    <Code language="ruby" text={`name = "Alice"`} />
    <br/>
    <P>You can also change the value of a variable:</P>
    <Code language="ruby" text={`count = 5`} />
    <Code language="ruby" text={`count = "new value"`} />
    <P>It's even possible to change the data type of a variable:</P>
    <Code language="ruby" text={`number = 42`} />
    <Code language="ruby" text={`number = "forty-two"`} />
</Window>

<Window i={3}>
    <H3>Lesson 3:</H3>
    <H1>Math Operators</H1>
    <br/>
    <P>Computers excel at one thing: performing calculations. When you execute any operation on your computer, countless calculations occur in a fraction of a second. In essence, computers are powerful calculators. Programming languages provide built-in math operators for performing mathematical operations like addition, subtraction, multiplication, and division.</P>
    <br/>
    <P>Let's start with addition. To add two numbers, you can create "int" variables and then create another variable to store the sum of the previous two. For example:</P>
    <Code language="ruby" text={`var_1 = 10
var_2 = 20

sum = var_1 + var_2`} />
    <P>The <InlineCode text="+"/> operator performs addition. You can use it as many times as needed:</P>
    <Code language="ruby" text={`var_1 = 10
var_2 = 20

sum = var_1 + var_2 + var_2 + var_1 + var_1 + var_2`} />
    <P>Yes, you can repeat the same variable multiple times. Similarly, you can subtract numbers by using the <InlineCode text="-"/> operator:</P>
    <Code language="ruby" text={`var1 = 10
var2 = 20

var3 = var2 - var1`} />
    <P>In this case, the value of <InlineCode text="var3"/> would be 10.</P>
    <br/>
    <P>Next, multiplication. You can use the <InlineCode text="*"/> operator:</P>
    <Code language="ruby" text={`var1 = 10
var2 = 20

var3 = var2 * var1`} />
    <P>The value of <InlineCode text="var3"/> is now 200 because <InlineCode text="10 * 20"/> equals 200.</P>
    <br/>
    <P>For division, you can use the <InlineCode text="/"/> operator:</P>
    <Code language="ruby" text={`var1 = 10
var2 = 20

var3 = var2 / var1`} />
    <P>The value of <InlineCode text="var3"/> in this case is 2, as <InlineCode text="20 / 10"/> equals 2.</P>
    <br/>
    <P>Another operator that's important but not always mentioned is the "Modulo" operator. It's used for finding the remainder of division and has various applications, like determining if a number is even or odd. For instance:</P>
    <Code language="ruby" text={`x = 12

if x % 2 == 0 then
    puts(true)
else
    puts(false)
end`} />
    <P>Focus on the "Modulo" operator. In this example, we checked whether the value of <InlineCode text="x"/> is even or odd.</P>
</Window>

<Window i={4}>
    <H3>Lesson 4:</H3>
    <H1>If/Else and Flow Control in Ruby Language</H1>
    <br/>
    <P>We have the ability to control the flow of our code. This ability is crucial because it enables us to perform various tasks. For example, we can use flow control to check if a password is correct using if/else statements.</P>
    <br/>
    <P>Let's consider a scenario: We have a variable with a value and we want to check if its value is equal to 599. We can achieve this using if/else statements. But before we delve into an example, let's introduce the basic structure of an if/else statement:</P>
    <Code language="ruby" text={`if conditionHere then
    Some code...
else
    Other code...
end`} />
    <P>Here, the keywords are "if," "then," "else," and "end." Keywords in programming languages are predefined words that serve special purposes when used in code. Now, let's create a program that checks if a number is equal to 599 or not:</P>
    <Code language="ruby" text={`x = 10

if x == 599 then
    puts("x is equal to 599")
else
    puts("x is not equal to 599")
end`} />
    <P>In this example, the "else" block will be executed. The condition <InlineCode text="x == 599"/> checks whether the value of variable <InlineCode text="x"/> is equal to 599.</P>
    <br/>
    <P>The "elsif" keyword allows us to add multiple conditions within the same if/else statement. You can use "elsif" as many times as needed:</P>
    <Code language="ruby" text={`if conditionHere then
    Some code...
elsif anotherConditionHere then
    Other code...
end`} />
    <P>Why do we use <InlineCode text="=="/> for comparing two values? The <InlineCode text="="/> operator is already used for assigning a value to a variable. Using <InlineCode text="="/> in a condition would cause an error because it's used for assignment. Hence, the <InlineCode text="=="/> operator was created specifically for comparing two values.</P>
</Window>

<Window i={5}>
    <H3>Lesson 5:</H3>
    <H1>Arrays</H1>
    <br/>
    <P>In this lesson, we will explore arrays. An array is a variable that can hold multiple values. In high-level programming languages like Ruby, we can even store different data types in the same array.</P>
    <br/>
    <P>Creating an array in Ruby is straightforward. Let's take a look at the structure of an array and then explore some examples:</P>
    <Code language="ruby" text={`nameHere = [value1, value2, value3...]`} />
    <P>First, provide a name for the array and then add values within the brackets. For instance:</P>
    <Code language="ruby" text={`x = [12, -3.834, '$', 'Hello!', true]`} />
    <P>In this case, <InlineCode text="x"/> is an array that holds various data types.</P>
    <br/>
    <P>Each element in an array has an index. We can access array items using these indexes:</P>
    <Code language="ruby" text={`x = ['a', 'b', 'c', '$']

puts(x[1])`} />
    <P>In this example, "b" will be printed because array indexes start at 0. So, the index of the second item is 1.</P>
    <br/>
    <P>Let's discuss some functions used with arrays:</P>
    <P>The "push" function adds an element to the end of an array:</P>
    <Code language="ruby" text={`x = ['$', '#', 2306, true]

x.push(true)
# Now x looks like this: ['$', '#', 2306, true, true]`} />
    <P>The "pop" function removes the last element from an array:</P>
    <Code language="ruby" text={`x = ['aaaa', 'bbbb', 'dddd']

x.pop
# Now x looks like this: ['aaaa', 'bbbb']`} />
    <P>To determine the length of an array, use the "length" function:</P>
    <Code language="ruby" text={`x = [1, 2, 3, 4, 5]

sizeOfX = x.length`} />
    <P>The "index" function retrieves the index of a specific item:</P>
    <Code language="ruby" text={`x = [1, 2, 3, 4, 5]

index = x.index(2)`} />
    <P>Arrays can be reversed using the "reverse" function:</P>
    <Code language="ruby" text={`x = [1, 2, 3]

puts(x.reverse)`} />
    <P>When using array-specific functions, format it as:</P>
    <Code language="ruby" text={`arrayName.functionName`} />
</Window>

<Window i={6}>
    <H3>Lesson 6:</H3>
    <H1>Functions</H1>
    <br/>
    <P>In this lesson, we will explore functions and how to use them. Functions in programming are similar to functions in mathematics. They are blocks of code that need to be called to execute. Functions can have parameters, which are values passed to them. Let's dive into creating and using functions:</P>
    <br/>
    <P>To create a function, follow this structure:</P>
    <Code language="ruby" text={`def nameHere()
    Some code...
end`} />
    <P>For example:</P>
    <Code language="ruby" text={`def greeter()
    puts("Hello!")
end

greeter()`} />
    <P>If you run this code, "Hello!" will be printed because we called the "greeter" function using "greeter()". If we remove the function call, nothing will be printed.</P>
    <br/>
    <P>Now, let's discuss function parameters. Parameters are values passed to functions when they are called. Declare parameters when defining the function:</P>
    <Code language="ruby" text={`def nameHere(parameter1, parameter2, parameter3...)
    Some code...
end`} />
    <P>Let's create a function that takes two parameters and outputs their sum:</P>
    <Code language="ruby" text={`def add(x, y)
    puts(x + y)
end`} />
    <P>Now we can call the "add" function:</P>
    <Code language="ruby" text={`add(1, 2)`} />
    <P>This will print "3" in the console.</P>
    <br/>
    <P>Functions can have default parameter values. For instance, if you want to write a user's name when logging into a system but no name is provided, you can set a default value for the parameter:</P>
    <Code language="ruby" text={`def logger(name = "guest")
    puts(name + " logged in!")
end`} />
    <P>Calling the "logger" function without any parameters:</P>
    <Code language="ruby" text={`logger()`} />
    <P>This will print "guest logged in!" in the console.</P>
    <br/>
    <P>Now, calling the "logger" function with a user's name:</P>
    <Code language="ruby" text={`logger("John")`} />
    <P>In this case, "John logged in!" will be printed.</P>
</Window>

<Window i={7}>
    <H3>Lesson 7:</H3>
    <H1>Loops</H1>
    <br/>
    <P>Loops help programmers do tasks repetitively without rewriting code over and over again. For instance, consider printing "hello!" ten times in the console. You might have done something like this:</P>
    <Code language="ruby" text={`puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")
puts("hello!")`} />
    <P>However, this approach isn't efficient. Ruby provides various types of loops to streamline such tasks. Instead of writing the <InlineCode text="puts" /> function ten times, you can achieve the same with the following code:</P>
    <Code language="ruby" text={`10.times do
    puts("hello!")
end`} />
    <P>Let's start with the <InlineCode text="times" /> loop. This loop repeats an action a specified number of times. Here's the structure:</P>
    <Code language="ruby" text={`numberHere.times do
    Some code...
end`} />
    <P>Try creating your own <InlineCode text="times" /> loop.</P>
    <br/>
    <P>Next, let's discuss the <InlineCode text="while" /> loop. This loop continues executing as long as a given condition is true. Here's the structure of the <InlineCode text="while" /> loop:</P>
    <Code language="ruby" text={`while conditionHere do
    Some code...
end`} />
    <P>Here's an example of the <InlineCode text="while" /> loop in Ruby:</P>
    <Code language="ruby" text={`x = 1

while x <= 10 do:
    print("hello!")
end`} />
    <P>Don't worry about the "<InlineCode text="<=" />" operator for now; we'll explain it later. Focus on understanding the loop structure.</P>
    <br/>
    <P>After the <InlineCode text="while" /> loop, let's talk about the <InlineCode text="until" /> loop. The <InlineCode text="until" /> loop is quite similar to the <InlineCode text="while" /> loop; the main difference is that you use the <InlineCode text="until" /> keyword, and the operator changes from "<InlineCode text="<=" />" to "<InlineCode text=">=" />". This is because "<InlineCode text="<=" />" represents less than or equal, and "<InlineCode text=">=" />" represents greater than or equal. Here's how the loop structure should look:</P>
    <Code language="ruby" text={`x = 1

until x >= 10 do:
    print("hello!")
end`} />
    <P>Usually, the <InlineCode text="while" /> loop is preferred over the <InlineCode text="until" /> loop.</P>
    <br/>
    <P>Next, we have the <InlineCode text="for" /> loop. This loop repeats an action based on a specified condition. Let's first understand the structure of the <InlineCode text="for" /> loop, and then we'll provide an example:</P>
    <Code language="ruby" text={`for conditionHere do
    Some code...
end`} />
    <P>Here's an example of the <InlineCode text="for" /> loop:</P>
    <Code language="ruby" text={`for x in 1..10 do
    puts(x)
end`} />
    <P>In this example, we take the variable <InlineCode text="x" />, and we iterate from 1 to 10. Each iteration assigns a number to the variable <InlineCode text="x" />, which represents the number of times the loop executes. Initially, the value of <InlineCode text="x" /> is 1, and at the end, the value is 10.</P>
    <br/>
    <P>If you have an array and you want to perform an action for each member of the array, you can use the <InlineCode text="each" /> loop. Here's an example:</P>
    <Code language="ruby" text={`x = [1, 2, 3]

x.each do |y|
    puts(y)
end`} />
    <P>In this case, <InlineCode text="each" /> is a specific function designed for arrays. We use it to create a loop. In the example, we introduce a new variable called <InlineCode text="y" /> and assign it the value of each array member using the <InlineCode text="||" /> symbols. These symbols are essential for syntax.</P>
    <br/>
    <P>For creating infinite loops, you can use the <InlineCode text="loop" /> loop. It doesn't have a condition and runs indefinitely. Here's an example:</P>
    <Code language="ruby" text={`loop do
    puts("Hello!")
end`} />
    <P>That's all. If you run this code on your computer, "Hello!" will be printed in the console infinitely.</P>
</Window>

<Window i={8}>
    <H3>Lesson 8:</H3>
    <H1>Input and Output</H1>
    <br/>
    <P>Almost every application requires some form of user input. As a programmer, you need to know how to gather input from users, process it, and provide processed output back to users. In this lesson, we'll discuss user input and output.</P>
    <P>As you already know, the <InlineCode text="puts" /> function is used to display content in the console. It takes one parameter and prints it:</P>
    <Code language="ruby" text={`puts("Make yourself a legend!")`} />
    <P>This code will print <InlineCode text="Make yourself a legend!" /> to the console.</P>
    <P>Now, let's learn how to obtain input from the user. In this case, we use the <InlineCode text="gets" /> function (Note: Unlike C/C++, this Ruby <InlineCode text="gets" /> function is safe to use). Let's create a program that asks for the user's name:</P>
    <Code language="ruby" text={`print("Enter your name: ")
name = gets()`} />
    <P>The problem is that the <InlineCode text="puts" /> function adds a newline character (<InlineCode text="\\n" />) at the end of each parameter. This is why the user's input appears on a new line after "Enter your name: ". To fix this, use the <InlineCode text="print" /> function instead of <InlineCode text="puts" />:</P>
    <Code language="ruby" text={`print("Enter your name: ")
name = gets()`} />
    <P>Now, the <InlineCode text="name" /> variable stores the data that the user entered.</P>
    <P>It's a good practice to use the <InlineCode text="chomp" /> method when using the <InlineCode text="gets" /> function. This method removes the newline character (<InlineCode text="\\n" />) from the input, preventing formatting issues:</P>
    <Code language="ruby" text={`print("Enter your name: ")
name = gets.chomp()`} />
    <P>Using <InlineCode text="chomp" /> ensures that your input is processed correctly.</P>
</Window>

<Window i={9}>
    <H3>Lesson 9:</H3>
    <H1>File Input and Output</H1>
    <br/>
    <P>When building applications, you often need to save and retrieve data. For example, you might want to save default settings for your application. All of this data can be stored in files for later use. In this lesson, we'll teach you how to read data from files and write data to files.</P>
    <P>Let's imagine you have a file named <InlineCode text="file.txt" /> and you want to read data from it. To do this, you need to open the file, read the data, and then close the file:</P>
    <Code language="ruby" text={`file = File.open("file.txt", "r")
dataFromFile = file.read()

file.close()`} />
    <P>In this code, the contents of <InlineCode text="file.txt" /> are stored in the <InlineCode text="dataFromFile" /> variable. You can then use the data for further processing. Here's what's happening:</P>
    <P>We used the <InlineCode text="File" /> class (we'll explain classes later) and its <InlineCode text="open" /> function, which takes two parameters. The first parameter is the name of the file, and the second parameter specifies whether you want to read ("r") or write ("w") data. In this case, we used "r" to read.</P>
    <P>If you want to write data to a file, you can use the "w" parameter with the <InlineCode text="open" /> function. However, using "w" will overwrite the existing data in the file:</P>
    <Code language="ruby" text={`file = File.open("file.txt", "w")
file.write("Don't be afraid to hack something :P")
file.close()`} />
    <P>In this example, we used the <InlineCode text="write" /> function to write "Don't be afraid to hack something :P" to <InlineCode text="file.txt" />. Keep in mind that using "w" will erase any previous data in the file.</P>
    <P>If you want to append data to an existing file without losing the previous content, you can use the "a" parameter. This will append data to the file:</P>
    <Code language="ruby" text={`file = File.open("file.txt", "a")
file.write("Don't be afraid to hack something :P")
file.close()`} />
</Window>

<Window i={10}>
    <H3>Lesson 10:</H3>
    <H1>"unless"</H1>
    <br/>
    <P>In this lesson, we'll discuss another aspect of flow control. We'll introduce you to the <InlineCode text="unless" /> statement, which is the evil twin of <InlineCode text="if/else" /> statements.</P>
    <P>You already know that with <InlineCode text="if/else" />, the <InlineCode text="if" /> block is executed when the condition is true. For example:</P>
    <Code language="ruby" text={`if 10 == 10 then
    puts("Yes!")
end`} />
    <P>In this case, the <InlineCode text="puts" /> function will be executed. When using <InlineCode text="unless" /> instead of <InlineCode text="if/else" />, the <InlineCode text="unless" /> block is executed when the condition is false. The structure of <InlineCode text="unless" /> looks like this:</P>
    <Code language="ruby" text={`unless conditionHere then
    Some code...
else
    Some code...
end`} />
    <P>If the condition of the <InlineCode text="unless" /> block is false, then the <InlineCode text="unless" /> block will be executed. If the condition is true, then the <InlineCode text="else" /> block will be executed. Consider this code:</P>
    <Code language="ruby" text={`unless 10 == 10 then
    puts("No!")
else
    puts("Yes!")
end`} />
    <P>In this example, "Yes!" will be printed in the console. Here's another example:</P>
    <Code language="ruby" text={`unless true == false then
    puts("No!")
else
    puts("Yes!")
end`} />
    <P>In this case, "No!" will be printed in the console.</P>
</Window>

<Window i={11}>
    <H3>Lesson 11:</H3>
    <H1>"case"</H1>
    <br/>
    <P>In this lesson, we'll introduce you to another way to control flow in Ruby: the <InlineCode text="case" /> statement. This construct allows you to handle multiple conditions in an organized manner. Let's explore the structure of the <InlineCode text="case" /> statement:</P>
    <Code language="ruby" text={`case variableName
when condition1
    Some code...
when condition2
    Some code...
when condition3
    Some code...
else
    Some code...
end`} />
    <P>It's simpler than it may seem. Let's look at an example:</P>
    <Code language="ruby" text={`x = 1

case x
when 1
    puts("x = 1")
when 2
    puts("x = 2")
when 3
    puts("x = 3")
else
    puts("We don't know the value of x")
end`} />
    <P>If the value of the <InlineCode text="x" /> variable is equal to 1, the first <InlineCode text="when" /> block will be executed. If the value of <InlineCode text="x" /> is equal to 2, the second <InlineCode text="when" /> block will be executed. If the value of <InlineCode text="x" /> is equal to 3, the third <InlineCode text="when" /> block will be executed. If the value of <InlineCode text="x" /> doesn't match any of the conditions, the <InlineCode text="else" /> block will be executed. You can add as many <InlineCode text="when" /> blocks as needed.</P>
</Window>

<Window i={12}>
    <H3>Lesson 12:</H3>
    <H1>Can We Control Loops?</H1>
    <br/>
    <P>Sometimes, we need to break out of loops or skip certain iterations. Ruby provides two keywords that can help us achieve these: <InlineCode text="break"/> and <InlineCode text="next"/>.</P>
    <P>First, let's understand what "breaking from a loop" means. It refers to stopping the loop and continuing with the rest of the code. Take a look at this example:</P>

    <Code language="ruby" text=
    {`x = 1

while true do
    x = x + 1

    if x == 5 then
        break
    end
end

puts("Loop stopped working!")`} />

    <P>In this example, we create a loop where the value of the variable <InlineCode text="x"/> increases by 1 in each iteration. Inside the loop, we have an <InlineCode text="if"/> block that checks if the value of <InlineCode text="x"/> is equal to 5. If it is, the loop breaks. Until the value of <InlineCode text="x"/> becomes 5, the <InlineCode text="puts"/> function will not be executed. This is how we can use the <InlineCode text="break"/> keyword to exit from loops.</P>
    <br/>
    <P>Now, let's talk about the <InlineCode text="next"/> keyword. It's a useful way to skip iterations. For example, consider this code:</P>

    <Code language="ruby" text=
    {`x = 1

while x <= 10 do
    x = x + 1

    if x == 5 then
        next
    else
        puts(x)
    end
end`} />

    <P>If you run this code, you'll notice that "5" is not printed to the console. This is because when the value of <InlineCode text="x"/> becomes 5, we use the <InlineCode text="next"/> keyword to skip that iteration and move on to the next one.</P>
</Window>

<Window i={13}>
    <H3>Lesson 13:</H3>
    <H1>"return"</H1>
    <br/>
    <P>When it comes to functions, the <InlineCode text="return" /> keyword holds significant importance. This keyword enables us to capture the values returned by functions in variables. Consider this code:</P>

    <Code language="ruby" text=
    {`def func(x, y)
    return x + y
end

sum = func(1, 2)`} />

    <P>Now, the variable <InlineCode text="sum" /> holds the value 3. We can also create function compositions. Let's take a look at functions and their composition:</P>

    <Code language="ruby" text=
    {`def a(x, y)
    return x + y
end

def b(x, y)
    return x + y
end

def c(x, y)
    return x + y
end

result = c(a(1, 2), b(1, 2))

puts(result)`} />

    <P>In this case, <InlineCode text="6" /> will be printed to the console. As you can see, the <InlineCode text="return" /> keyword enables various possibilities, such as function compositions. The interesting thing is that when <InlineCode text="return" /> is encountered inside a function, it becomes the exit point of the function. An exit point is...</P>
</Window>

<Window i={14}>
    <H3>Lesson 14:</H3>
    <H1><InlineCode text="Comments" /></H1>
    <br/>
    <P>When you start working with a team of programmers, you'll encounter substantial code sections that weren't authored by you. Understanding code written by others can be challenging. Consider this code:</P>

    <Code language="ruby" text=
    {`def f(base, value)
    Math.log(value) / Math.log(base)
end`} />

    <P>You might not understand this code at first glance without comments. Let's add comments to this function:</P>

    <Code language="ruby" text=
    {`# This function calculates logarithms
def f(base, value)
    Math.log(value) / Math.log(base)
end`} />

    <P>Now you understand what it does. This was a simple example, but imagine dealing with a large codebase without any comments. It becomes difficult to read and comprehend.</P>
    <P>Another way to use comments is to mark code that requires changes. For instance, you can indicate that a function needs updating:</P>

    <Code language="ruby" text=
    {`# This function needs to be updated
def someFunc()
    puts("Enter your name: ")

    x = gets()
end`} />

    <P>Comments are created using the <InlineCode text="#" /> symbol. Anything following it is considered a comment. Comments are ignored by interpreters and compilers, meaning they aren't treated as instructions.</P>
    <P>Ruby also supports multi-line comments. While <InlineCode text="#" /> symbol denotes single-line comments, you can use <InlineCode text="=begin" /> and <InlineCode text="=end" /> to create multi-line comments like this:</P>

    <Code language="ruby" text=
    {`=begin

I am a multi-line comment.
You can use me to write more extensive explanations.

=end`} />

    <P>Both comment styles have their place. Use single-line comments for brief messages to other programmers, and multi-line comments when you need to convey more information to your team members.</P>
    <P>Remember that not every part of the code needs to be commented. For example, avoid comments like this:</P>

    <Code language="ruby" text=
    {`# Here I created a variable which holds 10 as its value
x = 10`} />

    <P>Writing comments like that isn't necessary. Everyone understands that you created the <InlineCode text="x" /> variable with a value of 10. Instead, you should do this:</P>

    <Code language="ruby" text=
    {`# This variable is used by the "attack" function to set the maximum number of threads
x = 10`} />

    <P>This is much better because others now understand why the <InlineCode text="x" /> variable is declared and what the value of <InlineCode text="x" /> signifies.</P>
</Window>

<Window i={15}>
    <H3>Lesson 15:</H3>
    <H1>Hashes</H1>
    <br/>
    <P>Imagine you want to create an item with multiple characteristics. In that case, you'll need to use hashes. A hash is very similar to an array, but the difference is that hashes have <InlineCode text="keys" /> and <InlineCode text="values" />. Note that we're not talking about hashing algorithms and cryptography. Let's create our first hash:</P>

    <Code language="ruby" text=
    {`car = { brand: "McLaren", model: "P1", year: 2023 }`} />

    <P>As you see, we created a hash called "car" which has three keys, each with its corresponding value. The keys are: <InlineCode text="brand" />, <InlineCode text="model" />, and <InlineCode text="year" />. The values are: "McLaren", "P1", and 2023.</P>
    <P>If you want to use a key in your code, you need to reference it from the hash, like this:</P>

    <Code language="ruby" text=
    {`puts(car[:brand])`} />

    <P>We can also modify values:</P>

    <Code language="ruby" text=
    {`car[:model] = "720S"`} />

    <P>Now, the value of the <InlineCode text="model" /> key is "720S". It's also possible to add and delete keys:</P>

    <Code language="ruby" text=
    {`car = { brand: "McLaren", model: "P1", year: 2023 }

car[:HP] = 986 // Added horsepower of McLaren P1

delete car[:HP] // Deleted horsepower of McLaren P1`} />

    <P>If you want to check if a key exists within the hash, you can use the <InlineCode text="key?" /> function:</P>

    <Code language="ruby" text=
    {`car = { brand: "McLaren", model: "P1", year: 2023 }

puts(car.key?(:HP))`} />

    <P>In this case, the output will be <InlineCode text="false" /> because there is no <InlineCode text="HP" /> key in the <InlineCode text="car" /> hash.</P>
</Window>

<Window i={16}>
    <H3>Lesson 16:</H3>
    <H1>Libraries</H1>
    <br/>
    <P>Every application requires libraries. What is a library? A library is a file where code is stored. You might wonder, Yes, but every file contains code. What's the difference between a standard .rb file and a library? The distinction is that libraries contain predefined functions, classes, and variables that can be useful for various tasks. For example, consider the <InlineCode text="http" /> library. We can incorporate it into our code using the <InlineCode text="require" /> keyword:</P>

    <Code language="ruby" text=
    {`require "http"`} />

    <P>After that, we can utilize objects from that library:</P>

    <Code language="ruby" text=
    {`require "http"

http = HTTP.accept(:json)
response = http.get('https://targetwebsite.co')

puts(response)`} />

    <P>The response from <InlineCode text="https://targetwebsite.co" /> will be printed in the console. The only challenge is that these libraries might not be available on your machine. You need to install them using Ruby's package manager, gem. Open your terminal and execute:</P>

    <CMD>gem install http</CMD>

    <P>After that, this code will function on your device. Every library is different, and to utilize them effectively, you need to learn how they work. For instance, if you intend to create an application that sends HTTP requests to a web server, you need to understand the <InlineCode text="http" /> library.</P>
    <P>Before using libraries, there are some points to consider. First, you won't be able to use libraries you're unfamiliar with. You need to read their documentation to understand their usage. Second, it's recommended not to delve into the documentation before completing this course, as you might not grasp many concepts without the foundational knowledge from this course. Additionally, you won't be able to use libraries that require additional knowledge. For example, if you lack networking knowledge, you can't effectively use networking libraries. The same applies to other domains such as HTTP or Linux.</P>
    <P>That's why we suggest gaining comprehensive knowledge from our courses, as it will expedite your growth.</P>
    <P>Now, let's create our first library. Create a new file named <InlineCode text="lib.rb" /> and write the following code:</P>

    <Code language="ruby" text=
    {`def f(x)
    puts x
end`} />

    <P>Next, create another file named <InlineCode text="file.rb" /> and write this code:</P>

    <Code language="ruby" text=
    {`require "./lib.rb"

f('It works!')`} />

    <P>Afterward, run <InlineCode text="file.rb" />. Remember, both files must be in the same directory. For instance, if you created <InlineCode text="lib.rb" /> on your desktop, <InlineCode text="file.rb" /> must also be on the desktop.</P>
</Window>

<Window i={17}>
  <H3>Lesson 17:</H3>
  <H1>Classes</H1>
  <br />
  <P>
    Let's start by explaining what OOP (<InlineCode text="Object-Oriented Programming" />) is. OOP is
    a style of writing code using objects for storing functions and variables.
    The main "object" in OOP is a class. Classes are created when we want to
    define something with many characteristics and abilities. Take a look at
    this example:
  </P>
  <Code
    language="ruby"
    text={`class Test
  public
    @var = 10

    def setVar(x)
      @var = x
    end

    def getVar()
      return @var
    end
end`}
  />
  <P>
    As you can see, we've created a class that contains one variable and two
    functions. Unfortunately, we can't directly access variables from classes
    in Ruby, so we use functions to get and modify their values. The{" "}
    <InlineCode text="var" /> variable has an "@" symbol at the beginning.
    That's because we can create unlimited objects using the{" "}
    <InlineCode text="Test" /> class, and each object will have its own{" "}
    <InlineCode text="var" /> variable. To access an object's personal{" "}
    <InlineCode text="var" /> variable, we use the "@" symbol. Think of it as
    cloning 100 humans from 1. Each clone has its own card with a specific
    number. Let's name one clone <InlineCode text="Bob" />. To access Bob's
    card, we go to Bob and ask for the card. This is similar to using the "@" symbol because a class is a data type that can be used by multiple objects,
    each having its own variables.
  </P>
  <P>
    Now, let's finish our code:
  </P>
  <Code
    language="ruby"
    text={`class Test
  public
    @var = 10

    def setVar(x)
      @var = x
    end

    def getVar()
      return @var
    end
end

// Creating an object called <InlineCode text="ObjN" /> with the <InlineCode text="Test" /> class
ObjN = <InlineCode text="Test.new" />

// Setting the value of <InlineCode text="var" /> variable in the <InlineCode text="ObjN" /> object
<InlineCode text="ObjN.setVar(382)" />

// Storing the value of <InlineCode text="var" /> inside the <InlineCode text="val" /> variable
<InlineCode text="val = ObjN.getVar()" />

// Printing the value of <InlineCode text="val" /> in the console
<InlineCode text="puts(val)" />`}
  />
</Window>

<Window i={18}>
  <H3>Lesson 18:</H3>
  <H1>“public”, “private”, and “protected”</H1>
  <br />
  <P>
    In this lesson, we are going to talk about visibility in classes. It's
    possible to create variables and functions inside of a class that you won't
    be able to use externally. How? If we use the <InlineCode text="private" />{" "}
    keyword, then nothing can be accessed from outside of a class:
  </P>
  <Code
    language="ruby"
    text={`class Test
  private
  def func()
    puts("func works!")
  end
end

obj = Test.new

obj.func()`}
  />
  <P>
    In this case, calling <InlineCode text="obj.func()" /> causes an error
    because the <InlineCode text="func" /> function is a <InlineCode text="private" />{" "}
    function. This means it can only be accessed from inside the <InlineCode text="Test" />{" "}
    class. Now, let's create a <InlineCode text="public" /> function:
  </P>
  <Code
    language="ruby"
    text={`class Test
  public
  def func()
    puts("func works!")
  end
end

obj = Test.new

obj.func()`}
  />
  <P>Now everything will work fine.</P>
  <P>
    There is a third keyword that controls visibility in classes, and that's{" "}
    <InlineCode text="protected" />. It's more complex than the others because
    it's connected to class inheritance. Basically,{" "}
    <InlineCode text="protected" /> variables and functions can only be accessed
    from classes that are created under the main class. The next lesson will
    discuss class inheritance, and we will talk more about the{" "}
    <InlineCode text="protected" /> keyword there.
  </P>
</Window>

<Window i={19}>
  <H3>Lesson 19:</H3>
  <H1>Class Inheritance</H1>
  <br />
  <P>
    It's possible to create subclasses from the main class. In this lesson, you
    will learn how class inheritance actually works. So, let's create our main
    class:
  </P>
  <Code
    language="ruby"
    text={`class Module
  private
  @targetIP = '0.0.0.0'
  @targetPort = 0
  @threads = 0

  public
  def setTarget(tIP, tPort)
    targetIP = tIP
    targetPort = tPort
  end

  def setThreads(t)
    threads = t
  end
end`}
  />
  <P>
    As you can see, we have <InlineCode text="private" /> variables and{" "}
    <InlineCode text="public" /> functions which will be used to configure
    variables. Now, let's create a subclass of the <InlineCode text="Module" />{" "}
    class:
  </P>
  <Code
    language="ruby"
    text={`class AttackModule < Module
  public
  def attackTarget()
    # Code for attacking the target
  end
end`}
  />
  <P>
    <InlineCode text="AttackModule" /> has all the variables and functions that{" "}
    <InlineCode text="Module" /> has, and in addition to that, it has the{" "}
    <InlineCode text="attackTarget" /> function. On the other hand, the{" "}
    <InlineCode text="Module" /> class doesn't have the{" "}
    <InlineCode text="attackTarget" /> function. So, in this case,{" "}
    <InlineCode text="Module" /> is the main class and{" "}
    <InlineCode text="AttackModule" /> class is a subclass of the{" "}
    <InlineCode text="Module" /> class. Let's change <InlineCode text="public" />{" "}
    to <InlineCode text="protected" /> in the <InlineCode text="Module" /> class:
  </P>
  <Code
    language="ruby"
    text={`class Module
  private
  @targetIP = '0.0.0.0'
  @targetPort = 0
  @threads = 0

  protected
  def setTarget(tIP, tPort)
    targetIP = tIP
    targetPort = tPort
  end

  def setThreads(t)
    threads = t
  end
end`}
  />
  <P>Now, functions can only be used from subclasses of the <InlineCode text="Module" /> class.</P>
</Window>

<Window i={20}>
  <H3>Lesson 20:</H3>
  <H1>“module”</H1>
  <br />
  <P>
    Ruby has an excellent feature called modules. A module is a group of
    functions that can be added to classes. This helps us manage our code more
    easily. Let's create a module:
  </P>
  <Code
    language="ruby"
    text={`module TheFirstModule
  def func1()
    puts "Hello from TheFirstModule!"
  end

  def func2(var)
    puts var
  end
end`}
  />
  <P>Now, let's create a class:</P>
  <Code
    language="ruby"
    text={`class Test
end`}
  />
  <P>
    We can use the <InlineCode text="include" /> keyword to add{" "}
    <InlineCode text="TheFirstModule" /> to the <InlineCode text="Test" /> class:
  </P>
  <Code
    language="ruby"
    text={`class Test
  include TheFirstModule
end`}
  />
  <P>
    After that, we can use every function and variable that are inside{" "}
    <InlineCode text="TheFirstModule" />:
  </P>
  <Code
    language="ruby"
    text={`newClass = Test.new

newClass.func1()
newClass.func2("ping!")`}
  />
  <P>
    As you can see, it's very easy to add modules to classes. Modules are very
    helpful when it comes to managing our code. For example, you can create a
    module for functions that are used for attacking. This way, the code is
    managed and clean.
  </P>
</Window>

<Window i={21}>
  <H3>Lesson 21:</H3>
  <H1>Introduction to Networking in Ruby</H1>
  <br />
  <P>
    This part will provide you with knowledge about creating network applications
    and performing attacks using Ruby. To understand the topics discussed in this
    part, you will need to complete networking and hacking courses.
  </P>
  <P>
    Ruby has a library called <InlineCode text="socket" /> which can be used for
    network communications. What is a socket? Basically, sockets are endpoints.
    For example, if you host a socket server, your computer becomes a socket. If
    you write a client application for that server and run the program on your
    computer, it becomes a socket. Let's import the <InlineCode text="socket" />{" "}
    library in our code:
  </P>
  <Code
    language="ruby"
    text={`require "socket"`}
  />
  <P>
    After that, we can create a server or a client application. Let's discuss
    servers first. To create a server, we need to bind it to the IP and port of
    the computer. For example, let's use localhost, which is "127.0.0.1" for
    every computer. The server port is going to be 4444. We are going to create a
    variable which will hold the value of the <InlineCode text="new" /> function
    that is stored in the <InlineCode text="TCPServer" /> class:
  </P>
  <Code
    language="ruby"
    text={`server = TCPServer.new("127.0.0.1", 4444)`}
  />
  <P>
    As you can see, the <InlineCode text="new" /> function gets two parameters:
    the IPv4 address and the port number. If you want to listen on every IP
    (Internet Protocol) that your computer has, just use "0.0.0.0" instead of
    "127.0.0.1". To find out your local IPv4 address, open up your terminal and
    type:
  </P>
  <Code
    language="bash"
    text={`ifconfig`}
  />
  <P>
    If you are a Windows user, then use this command instead:
  </P>
  <Code
    language="bash"
    text={`ipconfig`}
  />
  <P>
    If you run the code, nothing will happen. That's because, after binding the
    server, the code stops working. We need to do something that will keep the
    code executing. The best way to do that is to use loops. We can use any type
    of loop, but in this case, we are going to use a <InlineCode text="while" /> loop:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

server = TCPServer.new("127.0.0.1", 4444)
while true == true
  client = server.accept()
  puts(client)
end`}
  />
  <P>
    Run this code on your machine. If you want to connect to that server, you can
    use the "ncat" command:
  </P>
  <Code
    language="bash"
    text={`ncat 127.0.0.1 4444 -v`}
  />
  <P>
    After you run this command, check the Ruby application. It would print
    something like this in the console:{" "}
    <InlineCode text="#<TCPSocket:0x000055b47dbf1878>" />. As you can see, we
    have a <InlineCode text="TCPSocket" /> class which is stored at{" "}
    <InlineCode text="0x000055b47dbf1878" /> address in RAM.{" "}
    <InlineCode text="client = server.accept()" /> means that we created a new
    variable called "client" which stores everything about the client. Now, let's
    send some data to the client:
  </P>
  <Code
    language="ruby"
    text={`client.puts("Hello from the server!")`}
  />
  <P>
    As you can see, we added the <InlineCode text="puts" /> function to the{" "}
    <InlineCode text="client" /> variable. This way, "Hello from the server!" will
    be sent to the client. Run the script again and reconnect to it with the{" "}
    "ncat" command. You'll see that after connecting to the server, the "Hello
    from the server!" message is printed in the terminal. This is because the
    server sent that data to the client (which is "ncat" in this case).
  </P>
  <P>
    It's also possible to receive data from the client using the <InlineCode text="gets" /> function. Let's build a small server that receives data from the client and prints it in the console:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

server = TCPServer.new("0.0.0.0", 4444)

client = server.accept()
while true == true
  msg = client.gets.chomp()

  puts(msg)
end`}
  />
  <P>
    Run this code on your machine and connect to the server with "ncat". Then
    write something in the client's console and press the "enter" button. The
    server will receive the data. Now, let's stop using "ncat" and write our own client for that server:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

# TCPSocket, not TCPServer
client = TCPSocket.new("127.0.0.1", 4444)

# This variable holds data about the remote host (in this case, data about the server)
remoteHost = client.peeraddr.last()

while true == true
  data = gets.chomp()
  client.puts(data)
end`}
  />
  <P>
    Run both scripts, and you will see that the client can send data to the
    server as many times as you write something new. If you are writing a server
    and you want to close the connection to the client, use the{" "}
    <InlineCode text="close" /> function like this:
  </P>
  <Code
    language="ruby"
    text={`client.close()`}
  />
  <P>
    Also, if you want to shut down the server, use the <InlineCode text="close" />{" "}
    function on your server's variable:
  </P>
  <Code
    language="ruby"
    text={`server.close()`}
  />
  <P>
    On the other hand, if you want to turn off your client, just use the same
    function on the client's variable:
  </P>
  <Code
    language="ruby"
    text={`# Client’s code
client.close()`}
  />
</Window>

<Window i={22}>
  <H3>Lesson 22:</H3>
  <H1>UDP Sockets</H1>
  <br />
  <P>
    Writing UDP servers and clients is harder because UDP is a "connectionless"
    protocol, as you already know from the networking course. It's almost the
    same as creating TCP sockets, but the main difference is in logic. Let's
    build the UDP server:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

server = UDPSocket.new()
server.bind("0.0.0.0", 4444)`}
  />
  <P>
    As you can see, we need to use the <InlineCode text="bind" /> function to
    bind the IPv4 address and the port number. Now, let's receive data from the
    client:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

server = UDPSocket.new()
server.bind("0.0.0.0", 4444)

while true == true
  message, address = server.recvfrom(2048)

  puts(message)
end`}
  />
  <P>
    You can see that we create two variables at the same time. The first
    variable holds the message which is going to be sent by the client, and the
    second variable holds data about the client.
  </P>
  <P>
    We used the <InlineCode text="recvfrom" /> function which is used for UDP
    communications. It takes one parameter which is the number of bytes of data
    that the server should receive. In this case, the server receives 2048 bytes
    of data.
  </P>
  <P>
    Now, let's write the client for this server. It's almost the same as the TCP
    client, but there are a few changes in the code:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

client = UDPSocket.new()
client.connect("127.0.0.1", 4444)

while true == true
  client.puts("Hello from the client!")
end`}
  />
  <P>Now, let's send data from the server:</P>
  <Code
    language="ruby"
    text={`require "socket"

server = UDPSocket.new()
server.bind("0.0.0.0", 4444)

while true == true
  message, address = server.recvfrom(2048)

  response = "Hello from the server!"
  server.send(response, 0, address[3], address[1])
end`}
  />
  <P>
    As you can see, the <InlineCode text="send" /> function takes four
    parameters: <InlineCode text="response" />, <InlineCode text="0" />,
    <InlineCode text="address[3]" />, and <InlineCode text="address[1]" />. The
    first parameter is the data which should be sent from the server. The second
    parameter is a flag, which is not important for now and should be set to 0.
    The third parameter is <InlineCode text="address[3]" /> which is the client's
    IPv4 address. The final parameter is <InlineCode text="address[1]" /> which
    is the client's port. Let's print the received data in the client's console:
  </P>
  <Code
    language="ruby"
    text={`require "socket"

client = UDPSocket.new()
client.connect("127.0.0.1", 4444)

while true == true
  data = client.recvfrom(1024)

  puts(data[0])
end`}
  />
  <P>In this case, <InlineCode text="data[0]" /> is the message from the server.</P>
</Window>






        </>
    );
  }
  
  export default Test;