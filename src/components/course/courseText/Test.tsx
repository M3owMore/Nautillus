import CMD from "./CMD";
import LNK from "./LNK";
import LI from "./LI.tsx";
import LST from "./LST.tsx";
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

<Window i={0}>
    <H1>შესავალი</H1>
    <P>Python(პითონი) არის ფართოდ გავრცელებული ‘ზედა დონის’ პროგრამირების ენა. ის შექმნა გუიდო ვან როსომ 1991 წელს. პითონი იყენებს ინტერპრეტერს და ამის მეშვეობით თქვენ შეგიძლიათ პითონის კოდი ნებისმიერ მოწყობილობაზე გაუშვათ, სადაც პითონი იქნება დაინსტალირებული. </P>
    <P>პითონის დასაინსტალირებლად, პირველ რიგში, გაარკვიეთ თუ რომელ ოპერაციულ სისტემას იყენებთ. თუ თქვენ იყენებთ Windows-ს(ვინდოუსი), მაშინ გადადით <LNK to="https://www.python.org">https://www.python.org</LNK> გვერდზე და გადმოწერეთ პითონი ვინდოუსისთვის. ამის შემდეგ, დააინსტალირეთ ის, როგორც აინსტალირებთ სხვა აპლიკაციებს თქვენს კომპიუტერზე. ინსტალაციის შემდეგ ყველაფერი მზადაა.</P>
    <P>იმ შემთხვევაში თუ თქვენ ხართ Linux-ის(ლინუქსი) მომხმარებელი, გაარკვიეთ, რომელ ლინუქსის დისტრიბუტივს იყენებთ. თუ თქვენ ხართ Debian-ის ან Debian-ზე დაფუძნებული დისტრიბუტივის მომხმარებელი, გახსენით ტერმინალი და დაწერეთ:</P>
    <CMD>sudo apt install -y python3</CMD>
    <P>იმ შემთხვევაში თუ თქვენ ხართ Linux-ის(ლინუქსი) მომხმარებელი, გაარკვიეთ, რომელ ლინუქსის დისტრიბუტივს იყენებთ. თუ თქვენ ხართ Debian-ის ან Debian-ზე დაფუძნებული დისტრიბუტივის მომხმარებელი, გახსენით ტერმინალი და დაწერეთ:</P>
    <CMD>sudo pacman -Sy python3</CMD>
    <P>თუ თქვენ ხართ Void Linux-ის მომხმარებელი დაწერეთ:</P>
    <CMD>sudo xbps-install -Sy python3</CMD>
    <P>იმ შემთხვევაში თუ თქვენ ხართ MacOS-ის მომხმარებელი, გადადით <LNK to="https://www.python.org">https://www.python.org</LNK> გვერდზე და გადმოწერეთ პითონი MacOS-სთვის. გადმოწერის შემდეგ, დააინსტალირეთ ის, როგორც აინსტალირებთ სხვა აპლიკაციებს თქვენს კომპიუტერზე.</P>
    <P>თუ გნებავთ, რომ პითონი დააინსტალიროთ ანდროიდ მოწყობილობაზე(Termux-ში) დაწერეთ:</P>
    <CMD>pkg install python3</CMD>
    <P>გაითვალისწინეთ, რომ თქვენ უნდა გადმოიწეროთ Python 3.x.x პაკეტი.არ გადმოწეროთ Python 2.x.x პაკეტი. ინსტალაციის შემდეგ, გახსენით ტერმინალი და დაწერეთ:</P>
    <CMD>python3 --version</CMD>
    <P>თუ ყველაფერი სწორად გააკეთეთ, ტერმინალში დაიწერება პითონის ის ვერსია, რომელიც დაინსტალირებული გაქვთ მოწყობილობაზე.</P>
    <P>ახლა თქვენ უკვე შეგიძლიათ პითონის კოდი გაუშვათ თქვენს მოწყობილობაზე. თქვენ შეგიძლიათ გამოიყენოთ text editor, რათა პითონის კოდი ჩაწეროთ რომელიმე ფაილში და ამის შემდეგ, ეს ფაილი გადასცეთ ინტერპრეტერს, რათა მან გაუშვას ფაილში მყოფი კოდი. ან შეგიძლიათ პირდაპირ პითონის ინტერპრეტერი გახსნათ და მას გადასცეთ კოდი. მაგალითად, თუ თქვენ შექმენით ფაილი <InlineCode>file.py</InlineCode> და მასში ჩაწერეთ კოდი, ასე უნდა გაუშვათ ის:</P>
    <CMD>python3 file.py</CMD>
    <P>თუ თქვენ გინდათ, რომ პირდაპირ პითონის ინტერპრეტერი ჩართოთ, მაშინ დაწერეთ:</P>
    <CMD>python3</CMD>
    <P><InlineCode>python3</InlineCode> ბრძანების გაშვების შემდეგ, თქვენ დაინახავთ, რომ ტერმინალის პრომპტი გახდა <InlineCode>&gt;&gt;&gt;</InlineCode >. ეს ნიშნავს, რომ თქვენ იმყოფებით პითონის shell-ში. თქვენ შეგიძლიათ ნებისმიერი კოდი დაწეროთ იქ. თუ გნებავთ, რომ გამოხვიდეთ პითონის shell-დან დაწერეთ: After executing the  command, you will see  as the terminal prompt, indicating that you are in a Python shell. You can write and execute Python code there. To exit the Python shell, type:</P>
    <CMD>exit()</CMD>
    <P>ან უბრალოდ დააჭირეთ <InlineCode>CTRL</InlineCode> + <InlineCode>D</InlineCode></P>
</Window>

<Window i={1}>
    <H3>ნაწილი 1</H3>
    <H1>მონაცემთა სახეობები</H1>
    <br/>
    <P>როგორც ყველა სხვა პროგრამირების ენაში, პითონსაც გააჩნია სხვადასხვა სახის მონაცემი.ეს ნიშნავს, რომ ჩვენ შეგვიძლია შევქმნათ ერთმანეთისგან განსხვავებული ცვლადები. მაგალითად, თუ გნებავთ, რომ შექმნათ int(მთელი რიცხვი) ცვლადი, რომელსაც ერქმევა <InlineCode>x</InlineCode> და მისი მნიშვნელობა იქნება 20, თქვენ უნდა დაწეროთ:</P>
    <Code language="python" text="x = 20" />

    <P>როგორც ხედავთ, ჩვენ შევქმენით ცვლადი. ჩვენ შეგვიძლია ეს ცვლადი ისე გამოვიყენოთ, როგორც მოგვესურვება.</P>

    <P>ახლა განვიხილოთ მონაცემთა სახეობები, რომლებიც გვხვდება პითონში. ჩვენ გვაქვს 2 სახის მონაცემთა ტიპები პითონში. პრიმიტიული და კომპლექსური მონაცემთა ტიპები. აქვე მოცემულია სიები, სადაც ყველა მათგანია მოცემული:</P>

    <LST title="Primitive data types">
        <LI>Integers: 0, -49, 21...</LI>
        <LI>Floats: 2.3142, -93.58, 0.593...</LI>
        <LI>Characters: 'A', '#', '2'...</LI>
        <LI>Booleans: True, False</LI>
    </LST>

    <LST title="Complex data types">
        <LI>Strings: "Nautillus", "is", "the best!"...</LI>
        <LI>Lists: [1, 2, 3], ["apple", "banana"], [-0.4]...</LI>
        <LI>Tuples: (1, 2), ("Nautillus", "is", "the", "best!"), (True, False)...</LI>
        <LI>Dictionaries: {"{"}"Brand": "BMW", "Model": "M3 GTR"{"}"}...</LI>
    </LST>

    <P>შესაძლოა, თავიდან დამაბნეველი იყოს თქვენთვის, მაგრამ ჩვენ ყველა მათგანს აგიხსნით.</P>

    <P>პირველ რიგში, ჩვენ გვაქვს Ints და Floats(ათწილადები). ერთადერთი განსხვავება Int-ებსა და Float-ებს შორის ისაა, რომ Int-ები მთელი რიცხვებია, ხოლო Float-ები ათწილადები. თქვენ არ მოგიწევთ იმის დამახსოვრება თუ რამდენ ადგილს იკავებს თითოეული მათგანი კომპიუტერის მეხსიერებაში, რადგან როგორც უკვე ვთქვით პითონი <InlineCode>ზედა დონის</InlineCode> ენაა და მემორი ალოკაცია და ‘ნაგვის მოგროვება’ ავტომატურად ხდება.</P>

    <P>მეორე, გვაქვს სიმბოლოები. <InlineCode>Char</InlineCode>  არის უბრალო სიმბოლო. მაგალითად, <InlineCode>%</InlineCode>, <InlineCode>$</InlineCode>, <InlineCode>1</InlineCode> ან <InlineCode>ბ</InlineCode>  არის char, რადგან ის არის სიმბოლო. პითონში თქვენ ნებისმიერი სიმბოლოს გამოყენება შეგიძლიათ.</P>

    <P>ამის შემდეგ, მოდის Bool. Bool ცვლადებს მხოლოდ ორი მნიშვნელობის მიღება შეუძლიათ: <InlineCode>True</InlineCode>(ჭეშმარიტია) და <InlineCode>False</InlineCode>(მცდარია). როგორც ვიცით, კომპიუტერები იყენებენ <InlineCode>binary</InlineCode>(ორობითი) სისტემას. ეს ნიშნავს იმას, რომ ისინი მხოლოდ ორ ციფრს იყენებენ: 1-ს და 0-ს. <InlineCode>True</InlineCode> ნიშნავს 1-ს და <InlineCode>False</InlineCode> ნიშნავს 0-ს. ჩვენ ასევე შეგვიძლია ვთქვათ, რომ 1 ნიშნავს ‘კი’-ს და 0 ნიშნავს ‘არა’-ს. მაგალითად, თუ ამ კოდს აიღებთ:</P>

    <Code language="python" text=
    {`x = 10

if x == 10:
    print(True)
else:
    print(False)`} />

    <P>პასუხი იქნება <InlineCode>True</InlineCode>. გაითვალისწინეთ, რომ პასუხი არ არის ტექსტი. ის იქნება bool. თუ ჩვენ დავწერთ:</P>

    <Code language="python" text=
    {`x = 10

if x == 10:
    print("True")
else:
    print("False")`} />

    <P>პასუხი იქნება ტექსტი. <InlineCode>True</InlineCode> არ არის <InlineCode>True</InlineCode>-ს ტოლი, რადგან პირველი არის boolean და მეორე არის ტექსტი.</P>

    <P>დროა ტექსტებიც განვიხილოთ. ტექსტები საკმაოდ მარტივად იხსნება. წარმოიდგინეთ, რომ თქვენ რამდენიმე char გაქვთ ერთად აღებული. სწორედ ესაა ტექსტი. ზოგიერთ პროგრამირების ენაში, მაგალითად C++, არსებობს განსხვავება <InlineCode>char</InlineCode>-ის და <InlineCode>string</InlineCode>-ის(ტექსტი) შექმნისას. მაგალითად:</P>

    <Code language="cpp" text=
    {`char x = 'A';
std::string y = "A";`} />

    <P>გთხოვთ დააიგნოროთ <InlineCode>char</InlineCode> და <InlineCode>std::string</InlineCode>. მხოლოდ <InlineCode>x</InlineCode> და <InlineCode>y</InlineCode> ცვლადების მნიშვნელობებს დააკვირდით. <InlineCode>x</InlineCode>-ის მნიშვნელობაა სიმბოლო, ხოლო <InlineCode>y</InlineCode>-ის ტექსტი. თქვენ არ შეგიძლიათ დაწეროთ <InlineCode>char x = “A”;</InlineCode> ან <InlineCode>std::string y = ‘Hello World!’;</InlineCode> იმიტომ, რომ სიმბოლოები ჩაიწერება <InlineCode>‘’</InlineCode>-ით, ხოლო ტექსტები ჩაიწერება <InlineCode>“”</InlineCode>-ით. ჩვენ ამის დაიგნორება შეგვიძლია პითონში. თქვენ შეგიძლიათ ნებისმიერი მათგანი შეგიძლიათ გამოიყენოთ <InlineCode>char</InlineCode> ცვლადის ან <InlineCode>string</InlineCode> ცვლადის შექმნის დროს. მაგალითად:</P>

    <Code language="python" text=
    {`x1 = 'A'
x2 = "A"
y1 = "Nautillus is the best!"
y2 = 'Nautillus is the best!'`} />

    <P>გაითვალისწინეთ, რომ ტექსტები ჩვეულებრივი სიებია, რომლებიც char-ებითაა აწყობილი. ჩვენ აგიხსნით სიების მუშაობის პრინციპს და თქვენ მიხვდებით თუ როგორ უნდა გამოიყენოთ ტექსტები სიებივით.</P>

    <P>სიები შესაძლოა გამოყენებული იქნას რამდენიმე მნიშვნელობის შესანახად. სხვა პროგრამირების ენებში, როგორიცაა C++, თქვენ უნდა აირჩიოთ სიის მონაცემთა ტიპი. მაგალითად, თუ თქვენ შექმენით სია, რომელსაც მთელი რიცხვების შესანახად იყენებთ, თქვენ მხოლოდ მთელი რიცხვების შენახვა შეგიძლიათ ასეთ სიაში, პითონისგან განსხვავებით. პითონში თქვენ შეგიძლიათ ნებისმიერი მონაცემთა ტიპი ერთ სიაში მოაქციოთ. მაგალითად:</P>

    <Code language="python" text=
    {`lst = [1, -482.37824, "Hello!", '$', (12, 53, -39.3), [292, 938, 32]]`} />

    <P>როგორც ხედავთ, ჩვენ შევქმენით სია სახელად <InlineCode>lst</InlineCode> და დავამატეთ <InlineCode>int</InlineCode>, <InlineCode>float</InlineCode>, <InlineCode>string</InlineCode>, <InlineCode>char</InlineCode>, <InlineCode>duple</InlineCode> და კიდევ ერთი სია ამ სიაში. ამ ყველაფრის გაკეთება <InlineCode>ქვედა დონის</InlineCode> პროგრამირების ენებში შეუძლებელია.</P>

    <P>ყველა <InlineCode>ნივთს</InlineCode> თავისი ინდექსი აქვს სიაში. ეს ნიშნავს, რომ კომპიუტერი ითვლის თუ რამდენი <InlineCode>ნივთია</InlineCode> მოთავსებული სიაში. საქმე ისაა, რომ ყველა პროგრამირების ენაში ათვლა იწყება 0-დან. დიახ, პირველი <InlineCode>ნივთის</InlineCode> ინდექსია 0, მეორეს ინდექსია 1 და ასე შემდეგ. თუ თქვენ გინდათ, რომ აიღოთ პირველი ნივთი სიიდან, ეს ყველაფერი ასე უნდა გააკეთოთ:</P>

    <Code language="python" text=
    {`lst = [453, 921, 28]

x = lst[0]`} />

    <P>როგორც ხედავთ, ჩვენ შევქმენით სია და შემდეგ ავიღეთ პირველი “ნივთი” და მისი მნიშვნელობა მოვათავსეთ <InlineCode>x</InlineCode> ცვლადში. თუ თქვენ <InlineCode>x</InlineCode> ცვლადს დაპრინტავთ(print) პასუხი იქნება 453.</P>

    <P>ასე, რომ თუ სიაში არის 20 “ნივთი”, პირველი “ნივთის” ინდექსი იქნება 0 და ბოლო “ნივთს” ინდექსად ექნება 19.</P>

    <P>	საქმე ისაა, რომ თქვენ შეგიძლიათ char-ები ამოიღოთ ტექსტებიდან ამ ხერხით. მაგალითად:</P>

    <Code language="python" text=
    {`str = 'Nautillus is the best!'

x = str[2]`} />

    <P><InlineCode>x</InlineCode> ცვლადის მნიშვნელობა ახლა არის <InlineCode>u</InlineCode> სიმბოლო, რადგან თუ დავითვლით გაირკვევა, რომ პირველი <InlineCode>u</InlineCode>-ს ინდექსი არის 2.</P>





    <P><InlineCode>Tuple</InlineCode>-ები თითქმის იგივეა, რაც სიები. განსხვავება მხოლოდ სინტაქსსა და ლოგიკაშია. სიის შესაქმნელად თქვენ უნდა გამოიყენოთ <InlineCode>[]</InlineCode>. Tuple-ის შესაქმნელად თქვენ უნდა გამოიყენოთ <InlineCode>()</InlineCode>. მაგალითად:</P>
    
    <Code language="python" text=
    {`lst = [1, 2] # ეს არის სია

tpl = (1, 2) # ეს არის tuple
`} />
    <P>ლოგიკაში სხვაობა იმაში გამოისახება, რომ ჩვენ შეგვიძლია ახალი “ნივთები” დავამატოთ სიაში და ასევე შეგვიძლია ძველი “ნივთები” წავშალოთ სიიდან, <InlineCode>tuple</InlineCode>-ებისგან განსხვავებით. ჩვენ არ შეგვიძლია tuple-ებში ახალი “ნივთების” დამატება და ასევე არ შეგვიძლია ძველი “ნივთების” წაშლა.</P>

    <P>დროა ლექსიკონებიც განვიხილოთ. ლექსიკონები იგივეა რაც სიები, მაგრამ განსხვავება ისაა, რომ ლექსიკონებში შეგვიძლია სპეციალური ინდექსები მივცეთ “ნივთებს”. მაგალითად, გვაქვს ლექსიკონი:</P>

    <Code language="python" text=
    {`dict = {
    "1": "Banana",
    "2": "Apple"
}`} />

    <P>როგორც ხედავთ, ჩვენ ხილს სხვადასხვა ინდექსები მივეცით. ახლა თუ ჩვენ გვინდა, რომ პირველი “ნივთი” დავპრინტოთ, ეს უნდა გავაკეთოთ:</P>

    <Code language="python" text=
    {`print(dict["1"])`} />

    <P> პასუხი იქნება <InlineCode>"Banana"</InlineCode>. თქვენ შეგიძლიათ ნებისმიერი ინდექსი მისცეთ მნიშვნელობებს.</P>
</Window>

<Window i={2}>
    <H3>გაკვეთილი  2:</H3>
    <H1>ოპერატორები</H1>
    <br/>
    <P>ყველა პროგრამირების ენას აქვს ოპერატორები, პითონის ჩათვლით. ისინი უამრავ რამეში გვეხმარებიან. მაგალითად, ჩვენ შეგვიძლია მათემატიკური ოპერაციების შესრულება პითონში. თუ ჩვენ გვაქვს ორი რიცხვი და გვინდა, რომ მათი ჯამი მივიღოთ, უნდა გამოვიყენოთ შეკრების ოპერატორი:</P>
    <Code language="python" text=
    {`n1 = 10
n2 = 20

sum = n1 + n2
`} />

    <P>როგორც ხედავთ, ჩვენ გვაქვს ორი ცვლადი: <InlineCode text="n1"/> და <InlineCode text="n2"/>. ჩვენ მას მივეცით მნიშვნელობები 10 და 20. შემდეგ შევქმენით მესამე ცვლადი, სახელად  <InlineCode text="sum"/>და გამოვიყენეთ <InlineCode text="+"/> ოპერატორი, რათა შეგვეკრიბა  <InlineCode text="n1"/> და <InlineCode text="n2"/> ცვლადების მნიშვნელობები. საბოლოოდ, ამ ორი რიცხვის ჯამი შევინახეთ  <InlineCode text="sum"/> ცვლადში. ჩვენ შეგვიძლია სხვა ოპერაციების შესრულებაც. აქვე მოყვანილია ყველა მათემატიკური ოპერატორის მაგალითი:</P>
    <Code language="python" text=
    {`n1 = 10
n2 = 20

sum = n1 + n2 # შეკრება
sub = n1 – n2 # გამოკლება
div = n1 / n2 # გაყოფა
mul = n1 * n2 # გამრავლება
pow = n1 ** n2 # ახარისხება | გაითვალისწინეთ, რომ ამ შემთხვევაში ვიღებთ 1020 რიცხვს.
ore = n1 % 2 # კენტია თუ ლუწი | ეს ოპერატორი გამოიყენება, რათა დადგინდეს რიცხვი კენტია თუ ლუწი.
`} />

    <P>ჩვენ შეგვიძლია გამრავლების გამოყენება, რათა გავამრავლოთ string-ები. მაგალითად:</P>
    <Code language="python" text=
    {`str = 'Hacking is power!'

print(str * 3)
`} />

    <P>ამ შემთხვევაში, პასუხი იქნება <InlineCode text="'Hacking is power!Hacking is power!Hacking is power!'"/>. შესაძლებელია, რომ შეკრების ოპერატორი გამოვიყენოთ string-ებთან მუშაობის დროს. მაგალითად, თუ თქვენ გაქვთ ორი ტექსტი <InlineCode text="Hello"/> და <InlineCode text="there!"/>, თქვენ შეგიძლიათ შეკრიბოთ ისინი. მაგალითად:</P>
    <Code language="python" text=
    {`print('Hello' + 'there!')
`} />

    <P>პასუხი იქნება: <InlineCode text="'Hellothere!'"/>.</P>
    <br/>
    <P>არსებობს მეტობის, ნაკლებობის, მეტობის ან ტოლობის, ნაკლებობის ან ტოლობის და ტოლობის ოპერატორები. ისინი ჩაიწერებიან ასე:</P>
    <Code language="python" text=
    {`> # მეტია
>= # მეტია ან ტოლია
< # ნაკლებია
<= # ნაკლებია ან ტოლია
== # ტოლია
`} />

    <P>პირველი ოთხი საკმაოდ ადვილი გასაგებია. ბევრი იბნევა, როდესაც საქმე ტოლობის ოპერატორს ეხება. საქმე ისაა, რომ ტოლობის ოპერატორი გამოიყენება <InlineCode text="if/else"/> კოდში. მაგალითად, ჩვენ გვინდა რომ შევამოწმოთ თუ რაღაც ტოლია რაღაცის. ჩვენ არ შეგვიძლია <InlineCode text="="/> სიმბოლოს გამოყენება, რადგან მას უკვე ვიყენებთ ცვლადებისთვის მნიშვნელობების მისაცემად და ამის გამო ვიყენებთ ორმაგ <InlineCode text="=="/> სიმბოლოს. მაგალითად გვინდა, რომ შევამოწმოთ 10-ის და 20-ის ტოლობა:</P>
    <Code language="python" text=
    {`if 10 == 20:
    print(“Yes!”)
else:
    print(“No!”)
`} />

    <P>რა თქმა უნდა, პასუხი იქნება <InlineCode text="No!"/>, რადგან 10 არ არის 20-ის ტოლი.</P>
    <br/>
    <P>კიდევ ერთი ოპერატორი მოდის, რომელიც ტოლობას ეხება. მას ეწოდება <InlineCode text='არ უდრის'/>  ოპერატორი. ჩვენ მას ასე ჩავწერთ <InlineCode text="!="/>. მაგალითად:</P>
    <Code language="python" text=
    {`if 10 != 20:
    print(“Yes!”)
else:
    print(“No!”)
`} />

    <P>ამ შემთხვევაში, პასუხი იქნება  <InlineCode text="Yes!"/>, რადგან 10 არ არის 20-ის ტოლი.</P>
    <P>პითონს ასევე აქვს ლოგიკური ოპერატორები. მათ ეწოდებათ  <InlineCode>და</InlineCode> და <InlineCode>ან</InlineCode> ოპერატორები. პითონში ისინი გვხვდება როგორც keyword-ები. ეს ნიშნავს, რომ ჩვენ შეგვიძლია <InlineCode>და</InlineCode> ოპერატორი ასე ჩავწეროთ: <InlineCode>and</InlineCode>. ჩვენ შეგვიძლია <InlineCode>ან</InlineCode> ოპერატორი ასე ჩავწეროთ: <InlineCode>or</InlineCode>. სხვა პროგრამირების ენებში, მაგალითად C++, ამ ოპერატორებს არ აქვთ თავიანთი keyword-ები. <InlineCode>და</InlineCode> ოპერატორი არის <InlineCode>&&</InlineCode> და <InlineCode>ან</InlineCode> ოპერატორი არის <InlineCode>||</InlineCode>. პითონში, მაგალითად, ასე იქნება:</P>
    <Code language="python" text=
    {`x = 10
y = 10
z = 20

if x == y and x == z:
    print(“x = y and x = z”)
else:
    print(“No!”)
`} />

    <P>ამ შემთხვევაში, პასუხი იქნება <InlineCode text="No!"/>, რადგან 10 არ არის 20-ის ტოლი. ახლა კი ვნახოთ რა მოხდება, როდესაც <InlineCode>და</InlineCode> ოპერატორის ნაცვლად <InlineCode>ან</InlineCode> ოპერატორს გამოვიყენებთ:</P>
    <Code language="python" text=
    {`x = 10
y = 10
z = 20

if x == y or x == z:
    print(“x = y or x = z”)
else:
    print(“No!”)
`} />

    <P>პასუხი იქნება <InlineCode text="x = y or x = z"/>. თუ კიდევ ვერ გაიგეთ ამ ოპერატორების მუშაობის პრინციპი, მოდით ასე ავხსნათ ისინი: როდესაც თქვენ იყენებთ <InlineCode>და</InlineCode> ოპერატორს, ეს ნიშნავს, რომ ორი დებულება აუცილებლად ჭეშმარიტი უნდა იყოს, მაგრამ როდესაც თქვენ იყენებთ <InlineCode>ან</InlineCode> ოპერატორს, ეს ნიშნავს, რომ ორი დებულებიდან ერთ-ერთი მაინც უნდა იყოს სწორი.</P>
</Window>

<Window i={3}>
    <H3>გაკვეთილი 3:</H3>
    <H1>ცვლადები</H1>
    <br/>
    <P>ყველა პროგრამისტს სჭირდება ცვლადები. ისინი ყველაზე ფუნდამენტური თემაა პროგრამირებაში. წარმოიდგინეთ ყუთი, სადაც თქვენ ნებისმიერი რამის მოთავსება შეგიძლიათ. სწორედ ესაა ცვლადი. ჩვენ შეგვიძლია ნებისმიერი მონაცემის შენახვა ცვლადში და ის იქამდე შეინახავს მას, სანამ კოდი არ შეწყვეტს მუშაობას. თქვენ ნებისმიერი ტიპის მონაცემის შენახვა შეგიძლიათ ცვლადში. მაგალითად:</P>
    <Code language="python" text=
    {`str = 'Coding is power!'
tof = True
x = 10
y = -0.53
`} />

    <P>თქვენ შეგიძლიათ ნებისმიერ დროს შეცვალოთ ცვლადის მნიშვნელობა. მაგალითად, ჩვენ გვაქვს ცვლადი სახელად <InlineCode>num</InlineCode> და მას უკავია მნიშვნელობა <InlineCode>10</InlineCode>. ჩვენ გვინდა, რომ მისი მნიშვნელობა გახდეს <InlineCode>15</InlineCode>. ჩვენ შეგვიძლია ეს ასე გავაკეთოთ:</P>
    <Code language="python" text=
    {`x = 10
x = 15
`} />

    <P>პირველი ხაზი ცვლადის შექმნისთვისაა, ხოლო მეორე ხაზი ცვლის ცვლადის მნიშვნელობას 10-დან 15-ზე.</P>
    <P>ცვლადებს სხვა ცვლადების მნიშვნელობის მიღებაც შეუძლიათ. მაგალითად თქვენ გაქვთ ორი ცლვადი: <InlineCode>x</InlineCode> და <InlineCode>y</InlineCode>. <InlineCode>x</InlineCode> ცვლადის მნიშვნელობაა <InlineCode>10</InlineCode> და თქვენ გინდათ, რომ <InlineCode>y</InlineCode> ცვლადის მნიშვნელობა გახდეს 10. ამის გაკეთების ორი გზა არსებობს. პირველი არის სტანდარტული გზა:</P>
    <Code language="python" text=
    {`x = 10
y = 10
`} />

    <P>მაგრამ მეორე ხერხი უკეთესია:</P>
    <Code language="python" text=
    {`x = 10
y = x
`} />

    <P>როგორც ხედავთ, ჩვენ <InlineCode>y</InlineCode> ცვლადს <InlineCode>x</InlineCode> ცვლადის მნიშვნელობა მივანიჭეთ. ეს ნიშნავს, რომ ახლა <InlineCode>y</InlineCode> ცვლადი ინახავს მნიშვნელობას <InlineCode>10</InlineCode>.</P>
</Window>

<Window i={4}>
    <H3>გაკვეთილი 4:</H3>
    <H1>if/else ბრძანებები</H1>
    <br/>
    <P>ახლა განვიხილოთ კოდის კონტროლი. ზოგჯერ, ჩვენ გვჭირდება გადაწყვეტილებების მიღება როდესაც კოდს ვწერთ. ამ ყველაფრის მიღწევა შესაძლებელია <InlineCode>if/else</InlineCode> მეთოდით. ის გამოიყენება, როდესაც ჩვებ ერთი რაღაცის მეორესთან შედარება გვინდა და ამის მიხედვით გადაწყვეტილება უნდა მივიღოთ. მაგალითად, თქვენ გაქვთ ორი ცვლადი და გინდათ დარწმუნდეთ, რომ ისინი ერთმანეთის ტოლია. თქვენ შეგიძლიათ <InlineCode>if/else</InlineCode> მეთოდის გამოყენება სწორი პასუხის მისაღებად. მაგალითად:</P>

    <Code language="python" text=
    {`x = 10
y = 20

if x == y:
    print("Yes!")
else:
    print("No!")`} />

    <P>კარგად დააკვირდით კოდს. როგორც ხედავთ, ჩვენ გამოვიყენეთ <InlineCode>if</InlineCode> და <InlineCode>else</InlineCode> ბრძანებები. ასეთია if/else-ის სტრუქტურა:</P>
    <Code language="python" text=
    {`if <პირობა>:
    <კოდი1>
else:
    <კოდი2>
`} />

    <P>ამ მაგალითის პასუხი იქნება <InlineCode>No!</InlineCode>, რადგან კომპიუტერმა შეამოწმა <InlineCode>x</InlineCode> და <InlineCode>y</InlineCode> ცვლადების მნიშვნელობები, შემდეგ მიიღო გადაწყვეტილება და აამოქმედა კოდი2. გაითვალისწინეთ, რომ ამ სექციებში ნებისმიერი კოდის ჩაწერა შეგიძლიათ.</P>

    <P>არსებობს კიდევ ერთი ბრძანება, რომელიც გამოიყენება if/else მეთოდში. ეს არის <InlineCode>elif</InlineCode>. ეს ბრძანება გამოიყენება იმისათვის, რომ if/else მეთოდი უფრო დიდი გახდეს. მაგალითად, თქვენ გაქვთ სამი ცვლადი. თქვენ გინდათ, რომ შეამოწმოთ უდრის თუ არა ერთი ცვლადი დანარჩენ ორს. მაგალითად:</P>

    <Code language="python" text=
    {`x = 10
y = 20
z = 30

if x == y:
    print("x = y")
elif x == z:
    print("x = z")
else:
    print("x is not equal to y or z")`} />

    <P>როგორც ხედავთ, ჩვენ გამოვიყენეთ <InlineCode>elif</InlineCode> ბრძანება, რათა დაგვემატებინა კიდევ ერთი პირობა. თქვენ შეგიძლიათ იმდენი პირობა დაამატოთ რამდენიც მოგესურვებათ.</P>

    <P>თუ თქვენ გინდათ, რომ შეამოწმოთ ეკუთვნის თუ არა რაღაც სხვა რაღაცას, შეგიძლიათ გამოიყენოთ <InlineCode>in</InlineCode> ბრძანება. მაგალითად, თქვენ გაქვთ სია და ცვლადი. თქვენ გინდათ, რომ შეამოწმოთ არის თუ არა ამ ცვლადის მნიშვნელობა სიაში. მაგალითად:</P>

    <Code language="python" text=
    {`lst = [1, 2, 3, 4, 5]
x = 3

if x in lst:
    print("3 is in the list")
else:
    print("3 is not in the list")`} />

    <P>ამ შემთხვევაში, პასუხი იქნება <InlineCode>3 is in the list</InlineCode></P>
</Window>

<Window i={5}>
    <H3>გაკვეთილი 5:</H3>
    <H1>while ციკლები</H1>
    <br/>
    <P>ციკლები ძალიან გამოსადეგია, რადგან ჩვენ შეგვიძლია ნებისმიერი კოდი გავუშვათ სანამ რაიმე მნიშვნელოვანი არ მოხდება. ციკლები შეიძლება გამოვიყენოთ იმისათვის, რომ კოდის შეჩერების პრევენცია მოვახდინოთ ან შეგვიძლია სხვა რაღაცეების მისაღწევადაც გამოვიყენოთ. მაგალითად, თქვენ გაქვთ სია და ცვლადი. თქვენ გინდათ, რომ სიის მნიშვნელობები სათითაოდ დაბეჭდოთ კონსოლში. კოდი ასეთი იქნება:</P>

    <Code language="python" text=
    {`lst = [1, 2, 3]
counter = 0

while counter < len(lst):
    print(lst[counter])

    counter = counter + 1`} />

    <P>როგორც ხედავთ, ჩვენ გვაქვს სია და ცვლადი. შემდეგ ვქმნით ციკლს სადაც ვწერთ, რომ ჩვენ გვინდა დავბეჭდოთ “ნივთი” სიიდან, რომელსაც ინდექსაც აქვს <InlineCode>counter</InlineCode> ცვლადის მნიშვნელობა. შემდეგ <InlineCode>counter</InlineCode> ცვლადის მნიშვნელობას 1-ით ვზრდით. ამ გზით, შემდეგი “ნივთი” დაიბეჭდება. ასევე დააკვირდით პირობას. როგორც ხედავთ, ციკლი მანამ იქნება გაშვებული სანამ <InlineCode>counter</InlineCode>-ის მნიშვნელობა სიის ზომაზე დიდი ან მისი ტოლი არ გახდება. ეს არის while ციკლის სტრუქტურა:</P>
    <Code language="python" text=
    {`while <პირობა>:
    <კოდი>`} />

    <P>თქვენ შეგიძლიათ “სამუდამო” ციკლების შექმნა თუ <InlineCode>True</InlineCode> ბრძანებას ჩაწერთ პირობაში. ეს ნიშნავს, რომ მანამ, სანამ ჭეშმარიტება ჭეშმარიტია კოდი არ შეწყვეტს მუშაობას და ჭეშმარიტება ყოველთვის ჭეშმარიტი იქნება. მაგალითად:</P>

    <Code language="python" text=
    {`while True:
    print("I NEVER STOP!")`} />

    <P>პასუხი იქნება:</P>

    <Code language="python" text=
    {`I NEVER STOP!
I NEVER STOP!
I NEVER STOP!
...`} />

    <P>ის მანამ დაბეჭდავს <InlineCode>I NEVER STOP!</InlineCode> ტექსტს, სანამ მექანიკურად არ გამორთავთ კოდს.</P>

    <P>	თქვენ შეგიძლიათ <InlineCode>False</InlineCode> ბრძანება ჩაწეროთ პირობაში და კოდი არასოდეს განხორციელდება. მაგალითად:</P>

    <Code language="python" text=
    {`while False:
    print("I will never be executed!")`} />

    <P>ეს კოდი <InlineCode>print(“I will never be executed!”)</InlineCode> არასოდეს ამუშავდება, რადგან სიმცდარე ყოველთვის მცდარი იქნება.</P>
</Window>

<Window i={6}>
    <H3>გაკვეთილი 6:</H3>
    <H1>for ციკლები</H1>
    <br/>
    <P>ამ კურსში კიდევ ერთი ციკლი უნდა განვიხილოთ. ეს არის <InlineCode>for</InlineCode> ციკლი. ერთადერთი განსხვავება <InlineCode>while</InlineCode> და <InlineCode>for</InlineCode> ციკლებს შორის არის სინტაქსი. სხვა ყველაფერი იგივეა. <InlineCode>For</InlineCode> ციკლები ძალიან გამოსადეგია, როდესაც სიებთან ვმუშაობთ. მაგალითად, როდესაც თქვენ წერთ რაიმე ტიპის სერვერს, თქვენ გჭირდებათ სია კლიენტებისთვის. როდესაც თქვენ გინდათ, რომ ერთი კლიენტისგან შემოსული მონაცემები სხვა კლიენტებს გადასცეთ, ამისათვის გჭირდებათ <InlineCode>for</InlineCode> ციკლი, რათა ადვილად შეასრულოთ ეს ყველაფერი. ეს არის for ციკლის მარტივი მაგალითი:</P>

    <Code language="python" text=
    {`client_list = ['Bob', 'James', 'Mary']

for client in client_list:
    print(client)`} />

    <P>კარგად დააკვირდით კოდს. როგორც ხედავთ, ჩვენ შევქმენით სია, სახელად <InlineCode>client_list</InlineCode> და მას მივეცით სამი “ნივთი”. ამის შემდეგ for ციკლით დავბეჭდეთ თითოეული კლიენტი. გაითვალისწინეთ, რომ ჩვენ for ციკლის პირობაში ახალი ცვლადი, სახელად <InlineCode>client</InlineCode> შევქმენით. <InlineCode>For</InlineCode> ციკლის სტრუქტურა ასეთია:</P>

    <Code language="python" text=
    {`for <პირობა>:
    <კოდი>`} />

    <P>პირველად, <InlineCode>client</InlineCode> ცვლადის მნიშვნელობა იქნება <InlineCode>Bob</InlineCode>, <InlineCode>{"<კოდის>"}</InlineCode> დასრულების შემდეგ, მისი მნიშვნელობა გახდება <InlineCode>James</InlineCode> და ბოლოს ის გახდება <InlineCode>Mary</InlineCode>. ასევე, <InlineCode>client</InlineCode> ცვლადის გამოყენება მხოლოდ <InlineCode>{"<კოდის>"}</InlineCode> სექციაში შეიძლება. ამ ცვლადს for ციკლის გარეთ ვერ გამოიყენებთ.</P>
</Window>

<Window i={7}>
    <H3>გაკვეთილი 7:</H3>
    <H1>try ბრძანება</H1>
    <br/>
    <P>ზოგჯერ კოდი რაღაცას ვერ აკეთებს. მაგალითად, ჩვენ გვაქვს პითონში დაწერილი კლიენტი, რომელიც <InlineCode>IPv4</InlineCode> მისამართს: <InlineCode>192.168.100.15</InlineCode> უნდა დაუკავშირდეს <InlineCode>6857</InlineCode> პორტზე. სამწუხაროდ, როდესაც კოდი გავუშვით კავშირი ვერ შედგა, რადგან დანიშნულების წერტილმა კავშირის მოთხოვნაზე არ გვიპასუხა. ამ შემთხვევაში, ჩვენ, კოდს უნდა მივუთითოთ თუ როგორ უნდა მოიქცეს ასეთ სიტუაციაში. შესაძლოა ეს მაგალითი რთულად გასაგები აღმოჩნდეს თქვენთვის, მაგრამ ყურადღება მხოლოდ <InlineCode>try</InlineCode> და <InlineCode>except</InlineCode> ბრძანებებს მიაქციეთ:</P>

    <Code language="python" text=
    {`try:
    socket.connect(("192.168.100.15", 6857))
except:
    print("Connection refused!")`} />

    <P>აი რასთან გვაქვს საქმე: კოდი ცდილობს რომ გაუშვას <InlineCode>socket.connect((“192.168.100.15”, 6857))</InlineCode>, მაგრამ თუ რაღაც მიზეზის გამო ეს კოდი ვერ ამუშავდა, მაშინ <InlineCode>print(“Connection refused!”)</InlineCode> გაეშვება. ეს შედარებით მარტივი მაგალითია, რომელიც უკეთ გაგააზრებინებთ სიტუაციას:</P>

    <Code language="python" text=
    {`lst = [1, 2, 3]

try:
    print(lst[145])
except:
    print("Out of range!")`} />

    <P>როგორ უკვე იცით, ყველა “ნივთს” საკუთარი ინდექსი აქვს სიებში და ამ შემთხვევაში მხოლოდ სამი ნივთი გვაქვს, ასე რომ ვერც ერთ მათგანს ექნება ინდექსად <InlineCode>145</InlineCode>.</P>

    <P>ეს ბრძანებები პროგრამისტებს ეხმარება კოდის შედარებით მარტივად წერაში, რომელიც დინებას იმის მიხედვით შეცვლის თუ როგორ ეშვება კოდი. პირველ მაგალითში ჩვენი კლიენტი ვერ დაუკავშირდა მისამართს:  <InlineCode>192.168.100.15:6857</InlineCode>, ასე რომ მან გაუშვა მეორე კოდი, რომელიც პასუხს წერს კონსოლში. ეს არის try კოდის სტრუქტურა:</P>

    <Code language="python" text=
{`try:
    <კოდი1>
except:
    <კოდი2>`} />

    <P>კომპიუტერი როდესაც ეცდება <InlineCode>{"<კოდი1>"}</InlineCode>-ის გაშვებას და მცდელობა უშედეგო იქნება, შემდეგ ავტომატურად <InlineCode>{"<კოდი2>"}</InlineCode> გაეშვება. ეს ძალიან გამოსადეგია, როდესაც დეველოპერებს არ უნდათ, რომ პითონის მახინჯი რეპორტები გამოჩნდეს კონსოლში:</P>

    <Code language="python" text=
{`Traceback (most recent call last):
File "/home/cup/Documents/Coding/Python/test.py", line 3, in <module>
print(lst[145])
IndexError: list index out of range`} />

    <P>რეპორტი სიმართლეს ამბობს, მაგრამ ძალიან მახინჯია. ჩვენ უკეთესი რეპორტის გაკეთება შეგვიძლია:</P>

    <Code language="python" text=
    {`lst = [1, 2, 3]

print(lst[145])`} />

    <P>რეპორტი სიმართლეს ამბობს, მაგრამ ძალიან მახინჯია. ჩვენ უკეთესი რეპორტის გაკეთება შეგვიძლია:</P>

    <Code language="python" text=
    {`lst = [1, 2, 3]

try:
    print(lst[145])
except:
    print("Out of range!")`} />

    <P>უცნაური, მახინჯი რეპორტის ნაცვლად, კონსოლში <InlineCode>Out of range!</InlineCode> დაიწერება.</P>

    <P>	ჩვენ ასევე გვაქვს <InlineCode>else</InlineCode> და <InlineCode>finally</InlineCode> ბრძანებები try მეთოდისთვის. <InlineCode>else</InlineCode> ბრძანება გამოიყენება <InlineCode>except</InlineCode> ბრძანების შემდეგ და ის მაშინ გაუშვებს მასში ჩადებულ კოდს თუ <InlineCode>try</InlineCode> ბლოკი წარმატებით დასრულდება. <InlineCode>finally</InlineCode> ბრძანება <InlineCode>else</InlineCode> ბრძანებას ძალიან ჰგავს, მაგრამ მათ შორის ის განსხვავებაა, რომ <InlineCode>finally</InlineCode> ბლოკი ნებისმიერ შემთხვევაში ამუშავდება, თუნდაც <InlineCode>try</InlineCode> ბლოკი არ ამუშავდეს. ასეთია კოდის სტრუქტურა, როდესაც <InlineCode>else</InlineCode> ბრძანებას ვამატებთ:</P>

    <Code language="python" text=
{`try:
    <კოდი1>
except:
    <კოდი2>
else:
    <კოდი3>`} />

    <P>ასეთია კოდის სტრუქტურა, როდესაც <InlineCode>finally</InlineCode> ბრძანებას ვამატებთ:</P>

    <Code language="python" text=
{`try:
    <კოდი1>
except:
    <კოდი2>
finally:
    <კოდი3>
`} />
</Window>

<Window i={8}>
    <H3>გაკვეთილი 8:</H3>
    <H1>ფუნქციები</H1>
    <br/>
    <P> ფუნქციები ყველა პროგრამისტისთვის ძალიან მნიშვნელოვანია. ისინი თითქმის ყველა კოდში გამოიყენება. მაგალითად, <InlineCode>ქვედა დონის</InlineCode> პროგრამირების ენებში, მაგალითად C++, არსებობს <InlineCode>main</InlineCode> ფუნქცია. როდესაც თქვენ C++ კოდს ჩართავთ, ყველაფერი რაც კი <InlineCode>main</InlineCode> ფუნქციაში წერია ავტომატურად ამუშავდება. პითონში ასეთი ფუნქცია არ არსებობს, მაგრამ ჩვენ შეგვიძლია სხვა ფუნქციები შევქმნათ და მათში ჩავწეროთ კოდი. კონკრეტულად რა არის ფუნქცია? ფუნქცია არის კოდის ბლოკი, რომლის გამოყენებაც ნებისმიერ დროს, ნებისმიერ ადგილას შეგვიძლია. მაგალითად:</P>

    <Code language="python" text=
    {`def func():
    print("I am a function!")

func()`} />

    <P>კარგად დააკვირდით კოდს. ფუნქციის შექმნა საკმაოდ ადვილია: ჩვენ ვქმნით ფუნქციას, შემდეგ მასში ვწერთ კოდს, და ბოლოს ვუშვებთ მას. ასეთია ფუნქციის სტრუქტურა:</P>

    <Code language="python" text=
    {`def <ფუნქციის სახელი> (<ფუნქციის არგუმენტები>):
    <კოდი>
`} />


    <P><InlineCode>def</InlineCode> ბრძანებით აღვნიშნავთ, რომ ფუნქციის შექმნა გვინდა. ჩვენ ფუნქციას ვაძლევთ სახელს, არგუმენტებს და საბოლოოდ ვწერთ კოდს. <InlineCode>{"<ფუნქციის სახელი>"}</InlineCode> და <InlineCode>{"<კოდი>"}</InlineCode> სავალდებულოა, მაგრამ თქვენ შეგიძლიათ <InlineCode>{"<ფუნქციის არგუმენტები>"}</InlineCode> ცარიელი დატოვოთ. ყველაფერი რომ უკეთ გაიაზროთ, მოდით შევხედოთ პირველ მაგალითს. <InlineCode>func</InlineCode> არის ფუნქციის სახელი. თქვენ ფუნქციისთვის ნებისმიერი სახელის მიცემა შეგიძლიათ. ფრჩხილებში ვწერთ ფუნქციის არგუმენტებს. საბოლოოდ, ჩვენ გვაქვს <InlineCode>{"<კოდი>"}</InlineCode> სექცია. ჩვენ ნებისმიერი კოდის ჩაწერა შეგვიძლია ამ სექციაში. მაგალითად:</P>

    <Code language="python" text=
    {`def f(x):
    print(x)

f("Hello World!")`} />

    <P><InlineCode>{"<კოდი>"}</InlineCode></P>

    <P>როგორც ხედავთ, ჩვენ შევქმენით ფუნქცია, სახელად <InlineCode>f</InlineCode>. მას აქვს არგუმენტი, სახელად <InlineCode>x</InlineCode>. <InlineCode>x</InlineCode> არის ცარიელი ცვლადი, რომელსაც მნიშვნელობა არ გააჩნია. როდესაც ჩვენ გამოვიძახეთ <InlineCode>f</InlineCode> ფუნქცია ნახეთ, რომ მას არგუმენტად გადავეცით <InlineCode>Hello World!</InlineCode> ტექსტი. როდესაც ჩვენ ამ კოდს გავუშვებთ ის კონსოლში ამ ტექსტს დაბეჭდავს. მას ჩვენ არგუმენტი მივეცით.</P>
    <P>ასევე შესაძლებელია, რომ ფუნქციას ერთზე მეტი არგუმენტი მივცეთ. მაგალითად:</P>
    <Code language="python" text=
    {`def printName(first_name, last_name):
    print("Hello " + first_name + " " + last_name)

printName("John", "Brown")`} />

    <P>ამ კოდის პასუხი იქნება: <InlineCode>“Hello John Brown”</InlineCode>. თუ ფუნქციას აქვს არგუმენტი, მას მნიშვნელობას ფუნქციის გამოძახებისას მივანიჭებთ. როგორც ხედავთ, როდესაც <InlineCode>printName</InlineCode> ფუნქცია გამოვიძახეთ, <InlineCode>first_name</InlineCode> ცვლადს მივეცით მნიშვნელობა <InlineCode>John</InlineCode> და <InlineCode>last_name</InlineCode> ცვლადს მივეცით მნიშვნელობა <InlineCode>Brown</InlineCode>. შემდეგ, ფუნქციამ ეს მონაცემები საკუთარ კოდში გამოიყენა.</P>

    <P>პითონს ჩაშენებული ფუნქციებიც აქვს. ჩვენ უკვე გამოვიყენეთ რამდენიმე მათგანი ამ კურსის მაგალითებში. ესენია  <InlineCode>print()</InlineCode> და  <InlineCode>len()</InlineCode>.  <InlineCode>print()</InlineCode> ფუნქცია უბრალოდ კონსოლში წერს მონაცემებს. მას დეველოპერები იყენებენ კოდის დებაგის დროს. როდესაც დეველოპერები დიდ პროექტებზე მუშაობენ მათ კოდის დებაგი უწევთ. ამის გამო, ამ ფუნქციით  <InlineCode>log</InlineCode>-ებს წერენ კონსოლში, რათა მარტივად აღმოაჩინონ შეცდომები.  <InlineCode>len()</InlineCode> ფუნქცია გამოიყენება მაშინ, როდესაც გვინდა, რომ სიის ან ტექსტის სირგძე გავიგოთ. ძალიან გამოსადეგი ფუნქციაა, როდესაც სიის ან ტექსტის მანიპულაცია გვინდა.</P>

    <P>ამ ფუნქციების გარდა კიდევ უამრავი ჩაშებენული ფუნქცია არსებობს და ყველა მათგანს აქ ვერ განვიხილავთ, მაგრამ რამდენიმე მაგალითს მოვიყვანთ. <InlineCode>exit()</InlineCode> ფუნქცია გამოიყენება მაშინ, როდესაც კოდის შეჩერება გვინდა.</P>

    <P><InlineCode>input()</InlineCode> არის ფუნქცია, რომელიც გამოიყენება მონაცემების მომხმარებლისგან მისაღებად. ზოგჯერ მომხმარებლისგან მიღებული ინფორმაციაა საჭირო კოდში გადაწყვეტილების მისაღებად და ეს ფუნქცია ამ პრობლემას ადვილად აგვარებს.</P>

    <P><InlineCode>bin()</InlineCode> ფუნქციას შეუძლია მთელი რიცხვები ორობით სისტემაში გადაიყვანოს, რომელსაც პრეფიქსად ექნება <InlineCode>0b</InlineCode>. ეს დეველოპერებს მაშინ ეხმარება, როდესაც <InlineCode>ქვედა დონის</InlineCode> საკითხებთან უწევთ შეხება.</P>
</Window>

<Window i={9}>
    <H3>გაკვეთილი  9:</H3>
    <H1>Scopes</H1>
    <br/>
    <P>When you write code, you want to make sure that everything is done correctly. Every programming language has its own syntax, but every one of them has scope. So what is scope? Scope means that every variable, class, object, and function belongs somewhere. For example, if you created a variable inside of a function, you can't use it outside of that function because it is defined in the scope of that function. Here is an example:</P>

    <Code language="python" text=
    {`def myFunction():
    x = 10

print(x)`} />

    <P>This code will crash, and its report will be:</P>

    <Code language="python" text=
    {`Traceback (most recent call last):
File "<stdin>", line 1, in <module>
NameError: name 'x' is not defined
`} />

    <P>As you see, it told us that <InlineCode>x</InlineCode> variable is not defined, but in reality, it is. The only problem here is that <InlineCode>x</InlineCode> variable is defined inside of the <InlineCode>myFunction</InlineCode> block. That's why it is impossible to use the <InlineCode>x</InlineCode> variable where we tried to use it. Here is one more example:</P>

    <Code language="python" text=
    {`lst = [1, 2, 3]

def myFunction():
    for x in lst:
        print(x) # This will work

    print(x) # This will not work

print(x) # This will not work`} />

    <P>As you see, we have a list and a function. <InlineCode>x</InlineCode> variable is defined in the scope of a for loop, and because of that, even <InlineCode>myFunction</InlineCode> can't use that variable inside of itself. <InlineCode>x</InlineCode> variable can be used only in the for loop's scope.</P>

    <P>You might have a question: if we can't use <InlineCode>x</InlineCode> variable outside of the for loop, how can we use <InlineCode>lst</InlineCode> variable inside of the for loop? The answer is simple. You just need to understand the hierarchy of scopes. In this example, the hierarchy of scopes is:</P>

    <Code language="python" text=
{`1. main scope
    2. myFunction’s scope
        3. for loop’s scope
`} />

    <P>So everything that is in the main scope can be used inside of other scopes but not vice versa.</P>
</Window>

<Window i={10}>
    <H3>Lesson 10:</H3>
    <H1>User Input</H1>
    <br/>
    <P>As we said earlier, some programs need to take user inputs. For example, when you log in to <LNK>https://facebook.com</LNK>, it takes your input to process it. You can build programs with Python that can take user inputs and process them.</P>
    
    <P>To get an input from a user, we use the <InlineCode>input()</InlineCode>  function. You already know that it's a built-in function. Here is an example of simple code that takes input from a user:</P>

    <Code language="python" text=
    {`user_name = input('Enter your name: ')

print("Hello " + user_name)`} />

    <P>When you run that code, you will see <InlineCode>Enter your name: </InlineCode> text in the console. Then you will write your name and after pressing enter, it will write <InlineCode>Hello &lt;your name here&gt;</InlineCode>. For example, if we write <InlineCode>Bob</InlineCode>, the output will be <InlineCode>Hello Bob</InlineCode>. Note that user input was saved in the <InlineCode>user_name</InlineCode> variable. We can do anything we want with that data.</P>
    
    <P>You can use the <InlineCode>input()</InlineCode> function without an argument:</P>

    <Code language="python" text=
    {`user_name = input()

print("Hello " + user_name)`} />

    <P>But it's just better to give it an argument because <InlineCode>Enter your name: </InlineCode> tells the user what to do, and it's easier for a user to use your program.</P>
</Window>

<Window i={11}>
    <H3>Lesson 11:</H3>
    <H1>Working with Files</H1>
    <br/>
    <P>Sometimes we need to work with files. Every programming language gives you the opportunity to read data from files, write data to files, and more. This can be very helpful when you are working on large projects because you can save program logs in a specific file, and it won't be deleted. When we work with files, we use <InlineCode>open()</InlineCode>, <InlineCode>read()</InlineCode>, <InlineCode>write()</InlineCode>, and <InlineCode>close()</InlineCode> functions.</P>
    
    <P>Let's say you have two files in your working directory: <InlineCode>code.py</InlineCode> and <InlineCode>file.txt</InlineCode>. You can write Python code into <InlineCode>code.py</InlineCode> which will open <InlineCode>file.txt</InlineCode> and read or write data. Here is an example:</P>

    <Code language="python" text=
    {`targetFile = open("file.txt", "r")

data = targetFile.read()

targetFile.close()`} />

    <P>Let's look closely at the code. First of all, we have a variable called <InlineCode>targetFile</InlineCode>. It acts like an alias for a file <InlineCode>file.txt</InlineCode> in the code. Secondly, we have <InlineCode>data</InlineCode> variable. This variable holds data which was read from the <InlineCode>file.txt</InlineCode> file. Finally, we close the <InlineCode>file.txt</InlineCode> file. Here is how we work with files in Python:</P>
    
    <Code language="python" text=
    {`<opening a file>

<file manipulations>

<closing a file>`} />

    <P><InlineCode>&lt;file manipulations&gt;</InlineCode> section is not mandatory but others are. If you want to understand file manipulations, you need to understand what files can do in computers. Files can be read, written, and executed. In programming, we have reading and writing. That means you can read data from files and you can write data into files. The key element in this process is the <InlineCode>open()</InlineCode> function because the second argument of that function tells how the file should be used. Here are examples:</P>

    <Code language="python" text=
    {`targetFile = open("file.txt", "r") # Read
targetFile = open("file.txt", "w") # Write
targetFile = open("file.txt", "a") # Append
targetFile = open("file.txt", "x") # Create`} />

    <P>First of all, there is Read. Read means that when a file is opened, the user can only read data from that file. Secondly, we have Write. Write means that when a file is opened, the user can only write data from it, but previous data will be deleted. After that, we have Append. Append is the same as Write, but the only difference between them is that Append will not delete previous data; it will add new data to it. Finally, we have Create. Create means that a new file will be created, but if its name is already taken, it will return an error.</P>

    <P>Now let's talk about examples of these methods. This is an example of Read:</P>

    <Code language="python" text=
    {`targetFile = open("file.txt", "r")

data = targetFile.read()

targetFile.close()`} />

    <P>Secondly, this is an example of Write:</P>

    <Code language="python" text=
    {`targetFile = open("file.txt", "w")

targetFile.write("Hello World!")

targetFile.close()`} />

    <P>In <InlineCode>file.txt</InlineCode> file, all data was removed, and <InlineCode>Hello World!</InlineCode> text was added. This is an example of Append:</P>

    <Code language="python" text=
    {`targetFile = open("file.txt", "a")

targetFile.write("Hello World!")

targetFile.close()`} />

    <P>In this case, old data stays in place, but <InlineCode>Hello World!</InlineCode> text was added to it. This is an example of Create:</P>

    <Code language="python" text=
    {`open("file.txt", "x")`} />

    <P>A new file was created. This method does not require the file to be closed.</P>
</Window>

<Window i={12}>
    <H3>Lesson 12:</H3>
    <H1>Strings</H1>
    <br/>
    <P>Strings can be very complicated. They can be manipulated in many ways. We can insert new characters inside them, remove characters from them, reverse them, and more. The main topic here is <InlineCode>escaping.</InlineCode></P>
    
    <P>You already know that to create a string, you need <InlineCode>""</InlineCode> or <InlineCode>''</InlineCode> symbols. But what if a string contains one of them already? Here is an example:</P>

    <Code language="text" text=
    {`"Hello!" - Bob said`} />

    <P>If you want this text to be a string in Python, you can use <InlineCode>''</InlineCode> symbols, and the problem is solved. But what if we want to use <InlineCode>""</InlineCode> symbols to define a string? In this case, we use <InlineCode>escaping</InlineCode>. Here is an example:</P>

    <Code language="python" text=
    {`str = "\\"Hello!\\" - Bob said"`} />

    <P>As you see, we used backslashes. When we use a backslash near any character, that means they belong to the string. If Python knows that <InlineCode>""</InlineCode> symbols are used for string declaration, we write one backslash in front of each <InlineCode>""</InlineCode> symbol, and now they are part of a string. Here is another example:</P>

    <Code language="python" text=
    {`str = 'Bob\\'s car'`} />

    <P>In this case, the text is  <InlineCode>"Bob’s car,"</InlineCode> but we used <InlineCode>''</InlineCode> symbols for string declaration. As you see, we wrote a backslash in front of <InlineCode>'</InlineCode> symbol, and now it's part of a string. You might have a question: What if we don't write a backslash? That will cause syntax errors. Try and run this code on your device:</P>

    <Code language="python" text=
    {`str = 'Bob's car'`} />

    <P>It will crash because Python thinks that <InlineCode>str</InlineCode> variable holds the value <InlineCode>"Bob"</InlineCode> and not <InlineCode>"Bob’s car"</InlineCode>.</P>

    <P>Sometimes, you need to add new lines into your texts. For example, in the C Language, you need to add a new line <InlineCode>escaping</InlineCode> to your text or the output will be ugly. Here is an example:</P>

    <Code language="c" text=
    {`printf("Hello World!\\n");`} />

    <P>This is C code that prints<InlineCode>Hello World!</InlineCode> in the console, but it has <InlineCode>"\\n"</InlineCode> new line <InlineCode>escaping</InlineCode> at the end. This helps the terminal prompt not to be written next to the output, which makes it ugly. Here is an example of output without a <InlineCode>"\\n" escaping</InlineCode>:</P>

    <Code language="text" text=
    {`Hello World!root@kali:~#`} />

    <P>Here is an example of output with <InlineCode>"\\n" escaping</InlineCode>:</P>

    <Code language="text" text=
    {`Hello World!
root@kali:~#`} />

    <P>As you see, the second output is much better. So <InlineCode>"\\n"</InlineCode> is the same as pressing an <InlineCode>enter</InlineCode> button.</P>

    <P>We have a few types of strings. First of all, we have a default string which you have already learned. Secondly, we have raw strings, and finally, we have formatted strings.</P>

    <P>Raw strings can be used to disable <InlineCode>escaping</InlineCode>. You need to add an <InlineCode>r</InlineCode> prefix to the string:</P>

    <Code language="python" text=
    {`rawStr = r"Bob\\'s car"`} />

    <P>Now the text is <InlineCode>"Bob\\'s car"</InlineCode> instead of <InlineCode>"Bob’s car"</InlineCode>. Formatted strings are very helpful when we are working with variables too. Here is an example:</P>

    <Code language="python" text=
    {`userInput = input("Enter your name: ")

print(f"Hello {userInput}!")`} />

    <P>As you see, we added an <InlineCode>f</InlineCode> prefix to the string. <InlineCode>{}</InlineCode> symbols are telling the string that the text between them is the name of a variable. If we wrote the name <InlineCode>John</InlineCode>, the output would be <InlineCode>Hello John!</InlineCode>.</P>

    <P>It's also very important to know how to slice a string. String slicing means that you can take one specific part from the string. Imagine we have a string <InlineCode>"Hello Bob!"</InlineCode> and we want to take <InlineCode>"Bob"</InlineCode> from the text and use it for something. Example:</P>

    <Code language="python" text=
    {`str = "Hello Bob!"

takenName = str[6:9]`} />

    <P>As you already know, strings are lists. In this case, every character has its own index in the string. <InlineCode>H</InlineCode> is 0, <InlineCode>e</InlineCode> is 1, and so on. If you count, you will see that the index of <InlineCode>B</InlineCode> is 6, and the index of <InlineCode>!</InlineCode> is 9. So we started from 6 and stopped at 9. We copied everything between them and then stored it inside <InlineCode>'takenName'</InlineCode>. So we added boundaries in the string. For example, you want to start from index 2 and go all the way to the end. Example:</P>

    <Code language="python" text=
    {`str = "Hello Bob!"

takenName = str[2:]`} />

    <P>The output would be<InlineCode>llo Bob!</InlineCode> . As you see, we ignored 0 and 1 indexes. You can play with slicing for a better understanding. Take your time to practice string slicing because it might be hard for many.</P>

    <P>One of the most important things about strings is encoding. Encoding is necessary when you want to send data across the network. We will talk about socket programming in Python. For now, let's talk about encoding. String encoding is a process when you take a string data type and convert it into bytes. This is mandatory when programming sockets because computers understand bytes, not strings. So you have to manually encode outgoing strings to be able to send them. But if you want to use received encoded string, you need to decode it first. Okay, let's encode a string:</P>

    <Code language="python" text=
    {`str = "Hello!"

encoded_str = str.encode("utf-8")`} />

    <P>As you see, we used <InlineCode>encode()</InlineCode> function with an argument <InlineCode>utf-8</InlineCode>. <InlineCode>utf-8</InlineCode> is an encoding method which is widely used.</P>

    <P>When you want to decode a string, you have to use <InlineCode>decode()</InlineCode> function. Here is a real-world example:</P>

    <Code language="python" text=
    {`receivedData = client.recv(1024)
decodedData = receivedData.decode("utf-8")`} />

    <P>In this case, the server received data from a client and then decoded it to be able to use it in the code.</P>
</Window>

<Window i={13}>
    <H3>Lesson 13:</H3>
    <H1>"pass" keyword</H1>
    <br/>
    <P>In some cases, we need to create functions or statements that will do nothing. For example, if you wrote an if/else statement and you want to do nothing if the <InlineCode>else</InlineCode> block is executed, you must use the <InlineCode>pass</InlineCode> keyword. Here is an example:</P>

    <Code language="python" text=
    {`isAppleBlue = False

if isAppleBlue == True:
    print("Apple is blue!")
else:
    pass`} />

    <P>If we execute this code, the output will be nothing. The <InlineCode>pass</InlineCode> keyword means that we want to do nothing. You can't leave any block empty, so Python creators had to create something that would do that job. Finally, the <InlineCode>pass</InlineCode> keyword was created. Here is another example:</P>

    <Code language="python" text=
    {`try:
    socket.connect(("192.168.100.1", 4242))
except:
    pass`} />

    <P>If <InlineCode>192.168.100.1</InlineCode> won't respond on port 4242, the <InlineCode>except</InlineCode> block will be executed, but the program will do nothing because we wrote the <InlineCode>pass</InlineCode> keyword.</P>
</Window>

<Window i={14}>
    <H3>Lesson 14:</H3>
    <H1>Classes</H1>
    <br/>
    <P>Congratulations! You successfully finished the first part of this course. In the previous chapter, you learned basic Python syntax. Now it's time to learn OOP <InlineCode>(Object-Oriented Programming)</InlineCode>.</P>

    <P>Every programmer should know how to use OOP in their code. What is OOP? OOP is a programming model that organizes program design around objects and classes instead of functions. Why is it helpful? Imagine you are writing a game where you have five enemies and one player. When you don't use OOP, you have to manually write code for each enemy. When you use OOP, you write code once and then you can use it whenever you want.</P>

    <P>In this lesson, we will talk about classes. We use classes in OOP to define objects. Let's say you want to create five enemies, each of which will have health and damage. Here is an example:</P>

    <Code language="python" text=
    {`class Enemy:
    health = 100
    damage = 5

Enemy1 = Enemy()
Enemy2 = Enemy()
Enemy3 = Enemy()
Enemy4 = Enemy()
Enemy5 = Enemy()`} />

    <P>As you see, we created a class called <InlineCode>Enemy</InlineCode>, and then we created 5 enemies with the <InlineCode>Enemy</InlineCode> class. Each enemy has its own <InlineCode>health</InlineCode> and <InlineCode>damage</InlineCode> variable, which hold values 100 and 5. It's easier for us to write code this way because if we don't use classes, we have to manually create variables and assign values for each enemy. Here is an example:</P>

    <Code language="python" text=
    {`Enemy1_Health = 100
Enemy1_Damage = 5
Enemy2_Health = 100
Enemy2_Damage = 5
Enemy3_Health = 100
Enemy3_Damage = 5
Enemy4_Health = 100
Enemy4_Damage = 5
Enemy5_Health = 100
Enemy5_Damage = 5`} />

    <P>As you can see, the code becomes much more complex when we don't use classes.</P>

    <P>Of course, you want to be able to use variables that are created in classes, and you can do that. For example, if you have a class that contains one variable, and you want to print it in the console, you can do so. Here's an example:</P>

    <Code language="python" text=
    {`class SomeClass:
    x = 10

obj = SomeClass()

print(obj.x)`} />

    <P>In this example, we created a class called <InlineCode>SomeClass</InlineCode>, and then we created an object <InlineCode>obj</InlineCode> using the <InlineCode>SomeClass</InlineCode> class. <InlineCode>obj</InlineCode> holds its own <InlineCode>x</InlineCode> variable. We can access the <InlineCode>x</InlineCode> variable from the <InlineCode>obj</InlineCode> object by using 'obj.x'.</P>

    <P>Here is what happens when you have two objects and you change the <InlineCode>x</InlineCode> variable of the first object:</P>

    <Code language="python" text=
    {`class SomeClass:
    x = 10

obj1 = SomeClass()
obj2 = SomeClass()

obj1.x = 20

print(obj1.x)
print(obj2.x)`} />

    <P>The output will be:</P>

    <Code text=
    {`20
10`} />

    <P>As you can see, we can change the values of variables, but the point is that we only changed the <InlineCode>x</InlineCode> variable of the first object. <InlineCode>obj1</InlineCode> and  <InlineCode>obj2</InlineCode> are both created with the same class, and they have similar variables, but they have those variables separately. So if we change the <InlineCode>x</InlineCode> variable of the first object, the <InlineCode>x</InlineCode> variable of the other objects doesn't change.</P>

    <P>Classes can also contain functions, but they are called methods. That means if a function is defined inside of a class, it's called a method. Here is an example:</P>

    <Code language="python" text=
    {`class SomeClass:
    def someFunc(self, x):
        print(x)

obj = SomeClass()

obj.someFunc("Hello World!")`} />

    <P>As you can see, we created a method called <InlineCode>someFunc</InlineCode> and gave it an argument <InlineCode>Hello World!</InlineCode>. When we run this code, it will print <InlineCode>Hello World!</InlineCode> text in the console.</P>

    <P>One important thing to note is that <InlineCode>someFunc</InlineCode> method has two arguments: <InlineCode>self</InlineCode> and <InlineCode>x</InlineCode>. <InlineCode>self</InlineCode> is not an argument that can be used by a user. The user can only use the <InlineCode>x</InlineCode> argument. <InlineCode>self</InlineCode> argument tells <InlineCode>someFunc</InlineCode>  method that it's located inside of a class. In this case, <InlineCode>self</InlineCode> points to the <InlineCode>SomeClass</InlineCode> class. Remember that every method written inside a class needs this <InlineCode>self</InlineCode> argument.</P>
</Window>

<Window i={15}>
    <H3>Lesson 15:</H3>
    <H1>Constructor</H1>
    <br/>
    <P>When working with classes, you might need to use a constructor. A constructor is a method in a class that is used to give values to the variables of objects. For example:</P>

    <Code language="python" text=
    {`class SomeClass:
    def __init__(self, var1, var2):
        self.var1 = None
        self.var2 = None`} />

    <P>As you see, we have a constructor <InlineCode>__init__</InlineCode> which has three arguments (Users can only use <InlineCode>var1</InlineCode> and <InlineCode>var2</InlineCode>). If you create an object, you can use this method to give values to these variables. <InlineCode>self</InlineCode> prefix means that we are working with variables controlled by an object. That means, those variables are owned by an object, and if we change them, they change only in that specific object. This might be hard to understand, so let's look at an example:</P>

    <Code language="python" text=
    {`class SomeClass:
    def __init__(self, var1, var2):
        self.var1 = var1
        self.var2 = var2

obj = SomeClass(10, 20)

print(obj.var1)
print(obj.var2)`} />

    <P>The output of this program would be:</P>

    <Code text=
    {`10
20`} />

    <P><InlineCode>__init__</InlineCode> method requires <InlineCode>SomeClass()</InlineCode> to have arguments. When we provide arguments inside <InlineCode>SomeClass</InlineCode>, it assigns values to the <InlineCode>var1</InlineCode> and <InlineCode>var2</InlineCode> variables owned by the <InlineCode>obj</InlineCode> object. Here is an example that can be used in real code:</P>

    <Code language="python" text=
    {`class Enemy:
    def __init__(self, health, speed, damage):
        self.health = health
        self.speed = speed
        self.damage = damage

enemy1 = Enemy(100, 15, 5)`} />

    <P>In this example, we created an enemy called <InlineCode>enemy1</InlineCode> which has 100 health, 15 speed, and 5 damage.</P>

    <P>So, a constructor is just a method that is used to create variables in objects. Remember that the constructor's name must be <InlineCode>__init__</InlineCode>.</P>
</Window>

<Window i={16}>
    <H3>Lesson 16:</H3>
    <H1>Introduction to Libraries</H1>
    <br/>
    <P>Libraries are very simple to understand. They are just files where special functions, variables, and classes are written. When we import a library into our code, everything that is written inside that library is added to our code.</P>
    <P>Python has many default libraries, and you can also install community-made libraries using the <InlineCode>pip</InlineCode> command. Here are some basic Python libraries: <InlineCode text="socket"/>, <InlineCode text="threading"/>, <InlineCode text="requests"/>, and more.</P>
    <P>The <InlineCode text="socket"/> library is a networking library that helps programmers send data through networks. <InlineCode text="threading"/> is a library that helps programmers execute many functions at the same time. The <InlineCode text="requests"/> library is an HTTP library that helps programmers send HTTP requests to web servers.</P>
    <P>Now, let's talk about community-made libraries. You can search for them online and then install them using the <InlineCode text="pip"/> command, as we mentioned earlier. For example, if you want to install the <InlineCode text="matplotlib"/> library, you need to write this command in your terminal:</P>
    <CMD>pip install matplotlib</CMD>
    <P>After that, you will be able to import it into your code.</P>
</Window>

<Window i={17}>
    <H3>Lesson 17:</H3>
    <H1>Threading</H1>
    <br/>
    <P>If you want to write a program that will be useful, you will probably need the threading library. Threading is a method used by programmers to perform many tasks at the same time. As you know, computers usually execute tasks one by one, which can be a problem when you want to create something useful that requires multiple tasks to run simultaneously. This can be achieved by creating threads. Here is an example of a computer executing tasks without threads:</P>
    <Code language="python" text=
    {`Main thread: Start → Task1 → Task2 → Task3 → Task4 → End`} />
    <P>In this program, no threads are running. Imagine that each task takes 1 second to execute. The computer would need 4 seconds to complete this program. Now, take the threading library and create two threads that will execute two tasks:</P>
    <Code language="python" text=
    {`Thread1: Start → Task1 → Task2 → End
Thread2: Start → Task3 → Task4 → End
`} />
    <P>As you can see, the computer now needs only two seconds to execute this program. If we create 4 threads, the program will be executed in just 1 second.</P>
    <P>Threads not only save time but also make impossible things possible. Let's say we want to write a socket server with two functions: <InlineCode text="Handle()"/> and <InlineCode text="Send()"/>. The <InlineCode text="Handle()"/> function will handle clients and receive data from them, while the <InlineCode text="Send()"/> function will send data to the clients. Python can't execute two functions at the same time without threads. Here is an example:</P>
    <Code language="python" text=
    {`def Handle():
    print("Handle!")

def Send():
    print("Send!")

Handle()
Send()`} />
    <P>The output of this program would be:</P>
    <Code language="python" text=
    {`<thread name> = threading.Thread(target=<function name>)`} />
    <P>First, the <InlineCode text="Handle()"/> function is executed, and after its execution, the <InlineCode text="Send()"/> function starts. However, we want them to work simultaneously. To fix this problem, let's import the threading library:</P>
    <Code language="python" text="import threading" />
    <P>Now, we need to define these functions:</P>
    <Code language="python" text=
    {`import threading

def Handle():
    print("Handle!")

def Send():
    print("Send!")`} />
    <P>Let's create two threads, one for each function:</P>
    <Code language="python" text=
    {`import threading

def Handle():
    print("Handle!")

def Send():
    print("Send!")

thread1 = threading.Thread(target=Handle)
thread2 = threading.Thread(target=Send)

thread1.start()
thread2.start()`} />
    <P>As you can see, we created <InlineCode text="thread1"/> and <InlineCode text="thread2"/> threads and then started them. In this case, the output will be the same, but the difference is that the code now has two branches, one for the <InlineCode text="Handle()"/> function and one for the <InlineCode text="Send()"/> function. Once these functions are done, the branches are deleted, and the code's flow becomes one branch again. Here is the structure of thread creation:</P>
    <Code language="python" text=
    {`<thread name> = threading.Thread(target=<function name>)`} />
    <P>As you can see, we called the <InlineCode text="Thread()"/> function from the <InlineCode text="threading"/> library. It has one argument called <InlineCode text="target"/>, and its value has to be the function's name. Note that the name must not have <InlineCode text="(  )"/> symbols. We used <InlineCode text="Handle"/> instead of <InlineCode text="Handle()"/> because adding '()' symbols would mean that you want to call that function, and in that case, thread creation would fail.</P>
</Window>

<Window i={18}>
    <H3>Lesson 18:</H3>
    <H1>Sockets</H1>
    <br/>
    <P>If you want to create a program that sends data from one computer to another, you will need the <InlineCode>socket</InlineCode>  library. Sockets are used by programmers to create programs that can send data over a network. To understand this topic, please finish the <InlineCode>Networking course</InlineCode></P>
    <P>Before we start coding, we need to decide which protocol we want to use. Most of the time, we will use the TCP protocol. Then we need to decide which IP version to use. Most of the time, we will use IPv4. Let's create our first program:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

servSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)`} />
    <P>This might seem complicated, so let's explain what is happening. First of all, we added the <InlineCode>socket</InlineCode> library to our code. Secondly, we create <InlineCode>HOST</InlineCode> and <InlineCode>PORT</InlineCode> variables. <InlineCode>HOST</InlineCode> has an IPv4 address where the program should be hosted, and <InlineCode>PORT</InlineCode> has the port number that will be used by our program. Finally, we created the <InlineCode>servSocket</InlineCode> variable. We called the <InlineCode>socket()</InlineCode> function from the <InlineCode>socket</InlineCode> library, where we added two arguments: <InlineCode>socket.AF_INET</InlineCode> and <InlineCode>socket.SOCK_STREAM</InlineCode>. Both <InlineCode>AF_INET</InlineCode> and <InlineCode>SOCK_STREAM</InlineCode> are constants called from the <InlineCode>socket</InlineCode> library. <InlineCode>AF_INET</InlineCode> means that we want to use IPv4 as the type of IP, and <InlineCode>SOCK_STREAM</InlineCode> means that we want to use TCP as the protocol.</P>
    <P>This is the structure of creating a socket:</P>
    
    <Code language="python" text=
    {`<variable name> = socket.socket(<IP type>, <Protocol>)`} />

    <P>After that, we need to use the <InlineCode>bind()</InlineCode> function to bind the server to the <InlineCode>127.0.0.1:1234</InlineCode> address:</P>
    <Code language="python" text="servSocket.bind((HOST, PORT))" />
    <P>As you can see, we used a tuple <InlineCode>(HOST, PORT)</InlineCode> as an argument for the <InlineCode>bind()</InlineCode> function. This function takes one argument, but it has to be a tuple with the IP address and port number.</P>
    <P>After binding, we are ready to start the server. We must use the <InlineCode>listen()</InlineCode> function to start the server:</P>
    <Code language="python" text="servSocket.listen()" />
    <P>So the full code will be:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

servSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

servSocket.bind((HOST, PORT))
servSocket.listen()`} />
    <P>This code hosts the server, but it will stop after the last line of code, and because of that, the server will stop working. We need to add some functions to create a fully working server.</P>
    <P>In this course, we will create a server and a client. The server will receive data from a client and store the received data in a list. Now let's write the start of our client program:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

cliSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

cliSocket.connect((HOST, PORT))`} />
    <P>As you can see, we used the <InlineCode>connect()</InlineCode> function to connect to our server. This function also takes a tuple as an argument, where the IP and port number must be provided.</P>
    <P>Now, back to our server. Let's write a function that will store data in the list:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

servSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

servSocket.bind((HOST, PORT))
servSocket.listen()

lst = []

def func():
    client, address = servSocket.accept()

    while True:
        receivedData = client.recv(1024)
        decodedData = receivedData.decode('utf-8')

        lst.append(decodedData)

func()`} />
    <P>As you can see, our server is ready. Let's look at the <InlineCode>func()</InlineCode> function. We have two variables, <InlineCode>client</InlineCode> and <InlineCode>address</InlineCode>. <InlineCode>client</InlineCode> holds detailed information about the client, and <InlineCode>address</InlineCode> holds the IP address and port number of the client. The <InlineCode>accept()</InlineCode> function accepts a connection from the client. After that, we have a while loop that will run forever. We receive data from the client with the <InlineCode>recv()</InlineCode> function. It has an integer argument <InlineCode>1024</InlineCode>, which specifies the maximum number of bytes of data to receive. If the client sends 1025 bytes of data, only 1024 will be received. Then we decode the received data from bytes with the <InlineCode>decode()</InlineCode> function, which takes <InlineCode>utf-8</InlineCode> as an argument. This function decodes bytes. Finally, we append the decoded data to the <InlineCode>lst</InlineCode> list, which we created earlier. And we call the <InlineCode>func()</InlineCode> function. This is our server. Now let's write our client:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

cliSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    cliSocket.connect((HOST, PORT))
except:
    print("Can't connect to the server!")
    exit()

def sendData():
    while True:
        userInput = input("Enter data: ")

        try:
            if userInput == '/exit':
                cliSocket.send(userInput.encode('utf-8'))
                cliSocket.close()
                break
            else:
                cliSocket.send(userInput.encode('utf-8'))
        except:
            print("Can't send data to the server!")

sendData()`} />
    <P>Yes, the client does not connect to the server. It sends data and does not care if the data will be received by the destination point.</P>
    <P>When all operations are done, the client and server should disconnect. That means sockets must be closed. This can be done by using the <InlineCode>close()</InlineCode> function. If you have created a loop that is running forever, you can add some kind of <InlineCode>command</InlineCode> that will close sockets. Let's add it to our TCP code:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

servSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

servSocket.bind((HOST, PORT))
servSocket.listen()

lst = []

def func():
    client, address = servSocket.accept()

    while True:
        receivedData = client.recv(1024)
        decodedData = receivedData.decode('utf-8')

        if decodedData == '/exit':
            client.close()
            break
        else:
            lst.append(decodedData)

func()`} />
    <P>As you can see, we are checking the decoded data, and if it's equal to <InlineCode>/exit</InlineCode>, the server will close the connection to the client. Now let's add code for the client too:</P>
    <Code language="python" text=
    {`import socket

HOST = '127.0.0.1'
PORT = 1234

cliSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    cliSocket.connect((HOST, PORT))
except:
    print("Can't connect to the server!")
    exit()

def sendData():
    while True:
        userInput = input("Enter data: ")

        try:
            if userInput == '/exit':
                cliSocket.send(userInput.encode('utf-8'))
                cliSocket.close()
                break
            else:
                cliSocket.send(userInput.encode('utf-8'))
        except:
            print("Can't send data to the server!")

sendData()`} />
</Window>

<Window i={19}>
    <H3>Lesson 19:</H3>
    <H1>Comments</H1>
    <br/>
    <P>When you work on large projects, there will be tons of code. Humans can't remember everything, and sometimes code logic becomes very, very complicated. Look at this example:</P>
    <Code language="python" text=
    {`# Sending USERS to the client
if len(clients) == 5:
    client.send(f'[USERS]: {nicknames[0]}, {nicknames[1]}, {nicknames[2]}, {nicknames[3]}, {nicknames[4]}'.encode('utf-8'))
elif len(clients) == 4:
    client.send(f'[USERS]: {nicknames[0]}, {nicknames[1]}, {nicknames[2]}, {nicknames[3]}'.encode('utf-8'))
elif len(clients) == 3:
    client.send(f'[USERS]: {nicknames[0]}, {nicknames[1]}, {nicknames[2]}'.encode('utf-8'))
elif len(clients) == 2:
    client.send(f'[USERS]: {nicknames[0]}, {nicknames[1]}'.encode('utf-8'))
elif len(clients) == 1:
    client.send(f'[USERS]: {nicknames[0]}'.encode('utf-8'))
else:
    pass
`} />
    <P>Or check this:</P>
    <Code language="python" text=
    {`# Main loop
while True:
    # Receiving MSG from client
    receivedMSG = client.recv(10000)
    decodedReceivedMSG = receivedMSG.decode('utf-8')

    # Checking decodedReceivedMSG
    if decodedReceivedMSG[0] == '/':
        if decodedReceivedMSG == exitINFO:
            # Sending WARNING INFO to the client
            client.send(f'[WARNING]: You can not do that!'.encode('utf-8'))

            # Printing WARNING MSG
            print(f'[WARNING]: {decodedReceivedNickname} tried to leak EXIT_INFO!')
        elif decodedReceivedMSG == '/exit':
            # Sending EXIT_INFO to the client (This MSG will turn off 'Receive' function on the client side)
            client.send(exitINFO.encode('utf-8'))

            # Removing client's INFO from lists
            nicknames.remove(decodedReceivedNickname)
            clients.remove(client)

            # Printing INFO
            print(f'[INFO]: {decodedReceivedNickname} left!')

            # Sending MSG to other clients
            BroadcastMSG(f'{decodedReceivedNickname} left!')
            break
        elif decodedReceivedMSG == '/upload':
            # Receiving file
            receivedDataForFile = client.recv(10000000)
            decodedReceivedDataForFile = receivedDataForFile.decode('utf-8')

            # Storing decodedReceivedDataForFile in File
            uploadedFile = open('uploadedFile', 'w')
            uploadedFile.write(decodedReceivedDataForFile)
            uploadedFile.close()

            # Printing INFO
            print(f'[INFO]: {decodedReceivedNickname} uploaded file!')

            # Sending INFO to other clients
            BroadcastMSG(f'[INFO]: {decodedReceivedNickname} uploaded file!')
        elif decodedReceivedMSG == '/download':
            # Reading File
            toDownloadFile = open('uploadedFile', 'r')
            dataToSend = toDownloadFile.read()
            toDownloadFile.close()

            # Sending dataToSend to the client
            client.send(dataToSend.encode('utf-8'))

            # Printing INFO
            print(f'[INFO]: {decodedReceivedNickname} downloaded file!')

            # Sending INFO to other clients
            BroadcastMSG(f'[INFO]: {decodedReceivedNickname} downloaded file!')
    else:
        # Sending MSG to other clients
        BroadcastMSG(f'{decodedReceivedNickname}: {decodedReceivedMSG}')
`} />
    <P>Yes, this is very complicated. Programmers use comments to remember what specific code does. For example:</P>
    <Code language="python" text="# This prints 'Hello!' in the console\nprint('Hello!')" />
    <P>Comments are a very good way to tell other programmers what your code does. They are little notes that can be added into the code. You can write anything you want because the computer ignores comments, and there will be no syntax errors. If you want to write a comment, use the <InlineCode>#</InlineCode> symbol. Anything after it will be considered as a comment.</P>
</Window>


        </>
    );
  }
  
  export default Test;