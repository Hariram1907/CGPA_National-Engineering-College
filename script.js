var gpasem=0;
var sum=0,tot=0;
var csum=0,ctot=0;
var cgpasem=0,cgpasem1=1;

const cce=[0,0,0,0,0,0,0,0];
const ctc=[0,0,0,0,0,0,0,0];
const ccr=[0,0,0,0,0,0,0,0];

const grade=["O","A+","A","B+","B","RA","AB","SA","W"];

const occ=["19CS04L-Python for Data Science", "19CS05L-R programming","19CS06L-Proof systems in Cryptography",
"19CS08L-Randomness in Cryptography","19CS12L-Mathematics for Machine Learning","19CS17L-Routing and Switching Essential",
"19CS18L-Scaling Networks","19CS23C-Application development using Flutter","19CS24L-Application development using Firebase",
"19CS28L-Python for Machine Learning","19CS29L-Full stack development","19CS34L Augumented Reality for developers","3D Modelling"];
var oc_count=0;

const elective=["19CS30E-Advanced Java Programming","19CS27E-Robotic Process Automation in cloud","19CS29E-Internet of Things","19CS39E-SQL Programming","19CS09E-Blockchain Architecture and Design","19CS28E-Cloud security","19CS05E-Business Analytics",
"19CS31E-Mobile Application Development","19CS32E-UI/UX Design ","19CS34E Augmented Reality and Virtual Reality",
"19ID01E-Product Design and Development"];
var elec_count=0;

const sem1_id=["19SH11C-Technical English","19SH12C-Mathematical Foundations For Engineers"
,"19SH13C-Engineering Physics","19SH14C-Engineering Chemistry","19CS11C-Python Programming"
,"19CS12C-Basic Electrical and Electronics Engineering","19SH16C -Engineering Physics and Engineering Chemistry Laboratory"
,"19CS32C-Python Programming Laboratory"];
const sem1_points=[2,4,2,2,3,3,1.5,2];

const sem2_id=["19CS21C-Professional English","19CS22C-Probability and Queueing theory","19CS23C-Semiconductor Physics",
"19CS24C-Biology for Engineers","19CS25C-Problem Solving Techniques","19SH15C-Engineering Graphics",
"19CS26C-Semiconductor Physics and Biology Laboratory","19CS27C-Problem Solving Techniques Laboratory",]
const sem2_points=[2,4,2,2,3,4,1.5,2];

const sem3_id=["19CS31C-Discrete Mathematics","19CS32C-Data Structures","19CS33C-Computer Organization and Architecture",
"19CS34C-Object Oriented Programming","19CS35C-Digital Principles and System Design","19CS36C-Software Engineering Methodologies",
"19CS37C-Data Structures Laboratory","19CS38C-Object Oriented Programming Laboratory","19CS39C-Communication Skills Laboratory"];
const sem3_points=[4,3,3,3,4,3,2,2,1];

const sem4_id=["19CS41C-Statistics and Numerical methods","19CS42C-Design and Analysis of Algorithms","19CS43C-Operating Systems",
"19CS44C-Database Management Systems","19CS45C-Computer Networks","19CS46C-Finance and Accounting","19CS47C-Operating Systems Laboratory",
"19CS48C-Database Management Systems Laboratory","19CS49C-Networks Laboratory"];
const sem4_points=[4,4,3,3,3,3,1.5,1.5,1.5];

const sem5_id=["19CS51C-Java Programming","19CS52C-Theory of Computation","19CS53C-Professional Ethics and Human Values",
"19CS54C-Embedded Systems","19CS55C-Cryptography and Network Security","19CS56C-Java Programming Laboratory","19CS57C-Embedded Systems Laboratory",
"19CS58C-Cryptography and Network Security Laboratory"];
const sem5_points=[4,4,3,3,3,1.5,1.5,1]

const sem6_id=["19CS61C-Object Oriented Analysis and Design","19CS62C-Principles of Compiler Design","19CS63C-Internet and Web Technology",
"19CS64C-Business Process Management","19CS65C-Internet and Web Technology Laboratory","19CS66C-Comprehension","19CS67C-Product Development Laboratory"];
const sem6_points=[3,4,3,2,1.5,1,2];

const sem7_id=["19CS71C-Research Paper and Patent Review-Seminar","19CS72C Project work - I"];
const sem7_points=[1,3];

const sem8_id=["19CS81C-Project work-II","19CS82C-Internship / Inplant Training"];
const sem8_points=[6,2];

document.getElementById("calc").style.display="none";

function home()
{
    alert("HOME");
}

function gpa()
{
    // alert("GPA");
    document.getElementById("calc").style.display="block";
    document.getElementById("main").innerHTML="";
    // document.getElementById("main1").style.display="none";
    var gpabtn=document.getElementById("gpabtn");
    gpabtn.disabled=true;
    var main2=document.createElement("div");

    var head= document.createElement("input");
    head.type="text";
    head.disabled=true;
    head.value="GPA Calculator";
    head.style.fontSize="40px";
    // head.style.width="100%";
    head.style.border="0px";
    head.style.backgroundColor= "rgb(248, 248, 248)";
    head.id="head_id";
    main2.appendChild(head);


    var seminp = document.createElement("INPUT");
    seminp.setAttribute("type", "text");
    seminp.setAttribute("id","seminpid");
    seminp.setAttribute("placeholder", "Enter semester");
    seminp.style.margin="10px";
    seminp.style.border="2px solid black";
    seminp.style.fontSize="15px";
    main2.appendChild(seminp);

    var submit = document.createElement("INPUT");
    submit.setAttribute("type","button");
    submit.setAttribute("value","Submit");
    submit.setAttribute("onclick","gpasubmit()");
    submit.id="submit_btn_id";
    main2.appendChild(submit);

    document.getElementById("main").appendChild(main2);
}

function cgpa()
{
    cgpasem1=1;
    cgpasem=0;
    csum=0;
    ctot=0;
    document.getElementById("calc").style.display="block";
    document.getElementById("main").innerHTML="";
    // document.getElementById("main1").style.display="none";
    var gpabtn=document.getElementById("gpabtn");
    gpabtn.disabled=false;
    var main2=document.createElement("div");

    var head= document.createElement("input");
    head.type="text";
    head.disabled=true;
    head.value="CGPA Calculator";
    head.style.fontSize="40px";
    // head.style.width="100%";
    head.style.border="0px";
    head.style.backgroundColor= "rgb(248, 248, 248)";
    head.id="head_id";
    main2.appendChild(head);

    var seminp = document.createElement("INPUT");
    seminp.setAttribute("type", "text");
    seminp.setAttribute("id","seminpid");
    seminp.setAttribute("placeholder", "Enter semester");
    seminp.style.margin="10px";
    seminp.style.border="2px solid black";
    seminp.style.fontSize="15px";
    main2.appendChild(seminp);

    var submit = document.createElement("INPUT");
    submit.setAttribute("type","button");
    submit.setAttribute("value","Submit");
    submit.setAttribute("onclick","cgpasubmit()");
    submit.id="submit_btn_id";
    main2.appendChild(submit);

    document.getElementById("main").appendChild(main2);
}

function cgpasubmit()
{
    var main=document.getElementById("main");
    cgpasem=document.getElementById("seminpid").value;
    main.innerHTML="";

    var table=document.createElement("table");
        table.id="table_id";
        main.appendChild(table);
        for(let i=0;i<eval('sem'+cgpasem1+'_id').length;i++)
        {
            var trow=document.createElement("tr");
            trow.id="trow_id"+(i+1);
            document.getElementById("table_id").appendChild(trow);

            var tcol=document.createElement("td");
            tcol.id="tcol_id"+(i+1);
            document.getElementById("trow_id"+(i+1)).appendChild(tcol);

            var sub=document.createElement("textarea");
            sub.id="sub_id"+(i+1);
            sub.style.width="250px";
            sub.readOnly=true;
            sub.style.border="1px solid black";
            sub.value=eval('sem'+cgpasem1+'_id['+i+']');
            document.getElementById("tcol_id"+(i+1)).appendChild(sub);
            
            var select_grade=document.createElement("select");
            select_grade.id="select_grade_id"+(i+1);
            select_grade.style.width="60px";
            select_grade.style.fontSize="15px";
            select_grade.style.margin="30px";
            document.getElementById("tcol_id"+(i+1)).appendChild(select_grade);
            

            for(let j=0;j<grade.length;j++)
            {
                var z = document.createElement("option");
                z.setAttribute("value", 10-j);
                var t = document.createTextNode(grade[j]);
                z.appendChild(t);
                document.getElementById("select_grade_id"+(i+1)).appendChild(z);
            }
            
        }
        
        var oc_div=document.createElement("div");
        oc_div.id="oc_div_id";
        main.appendChild(oc_div);

        var oc=document.createElement("input");
        oc.type="text";
        oc.id="oc_id";
        oc.value="Once Credit courses";
        oc.style.fontSize="15px";
        oc.style.margin="10px";
        oc.readOnly=true;
        document.getElementById("oc_div_id").appendChild(oc);

        var oc_add=document.createElement("input");
        oc_add.type="button";
        oc_add.id="oc_add_id";
        oc_add.value="Add";
        oc_add.setAttribute("onclick","ocadd()");
        oc_add.fontSize="15px";
        document.getElementById("oc_div_id").appendChild(oc_add);
        
        var elec_div=document.createElement("div");
        elec_div.id="elec_div_id";
        elec_div.style.padding="15px";
        main.appendChild(elec_div);

        var elec=document.createElement("input");
        elec.type="text";
        elec.id="elec_id";
        elec.value="Elective courses";
        elec.style.margin="10px";
        elec.style.fontSize="15px";
        elec.readOnly=true;
        document.getElementById("elec_div_id").appendChild(elec);

        var elec_add=document.createElement("input");
        elec_add.type="button";
        elec_add.id="elec_add_id";
        elec_add.value="Add";
        elec_add.setAttribute("onclick","elecadd()");
        elec_add.fontSize="15px";
        document.getElementById("elec_div_id").appendChild(elec_add);

        if(cgpasem1<cgpasem)
    {
        var cgpacalc = document.createElement("INPUT");
        cgpacalc.setAttribute("type","button");
        cgpacalc.setAttribute("value","Next");
        cgpacalc.setAttribute("onclick","cgpacalc()");
        cgpacalc.id="cgpacalc_btn_id";
        main.appendChild(cgpacalc);
    }
    else
    {
        var cgpacalc = document.createElement("INPUT");
        cgpacalc.setAttribute("type","button");
        cgpacalc.setAttribute("value","Submit");
        cgpacalc.setAttribute("onclick","cgpares()");
        cgpacalc.id="cgpacalc_btn_id";
        main.appendChild(cgpacalc);
    }
}

function cgpacalc()
{
    sum=0;
    tot=0;

    for(let i=0;i<eval('sem'+cgpasem1+'_id').length;i++)
        {
            let og=document.getElementById("select_grade_id"+(i+1)).value;
            if(og>=6)
            {
                csum+=(og*eval('sem'+cgpasem1+'_points['+i+']'));
                sum+=(og*eval('sem'+cgpasem1+'_points['+i+']'));
            }
            else
            {
                csum=0;
                sum=0;
                cgpafail();
            }
            ctot+=eval('sem'+cgpasem1+'_points['+i+']');
            tot+=eval('sem'+cgpasem1+'_points['+i+']');
        }
        for(let i=0;i<oc_count;i++)
        {
            let og=document.getElementById("select_grade_oc_id"+(i+1)).value;
            if(og>=6)
            {
                csum+=(og*1);
                sum+=(og*1);
            }
            else
            {
                csum=0;
                sum=0;
                cgpafail();
            }
            ctot+=1;
            tot+=1;
        }
        oc_count=0;
        for(let i=0;i<elec_count;i++)
        {
            let og=document.getElementById("select_grade_elec_id"+(i+1)).value;
            if(og>=6)
            {
                csum+=(og*3);
                sum+=(og*3);
            }
            else
            {
                csum=0;
                sum=0;
                cgpafail();
            }
            ctot+=3;
            tot+=3;
        }
        elec_count=0;
        cce[cgpasem1-1]=sum;
        ctc[cgpasem1-1]=tot;
        ccr[cgpasem1-1]=(sum/tot).toFixed(2);
        
        cgpasem1=cgpasem1+1;
    
    // alert(cgpasem1 +" "+csum+" "+ctot+" "+(csum/ctot));
    
    var main=document.getElementById("main");
    main.innerHTML="";

    var table=document.createElement("table");
        table.id="table_id";
        main.appendChild(table);
        for(let i=0;i<eval('sem'+cgpasem1+'_id').length;i++)
        {
            var trow=document.createElement("tr");
            trow.id="trow_id"+(i+1);
            document.getElementById("table_id").appendChild(trow);

            var tcol=document.createElement("td");
            tcol.id="tcol_id"+(i+1);
            document.getElementById("trow_id"+(i+1)).appendChild(tcol);

            var sub=document.createElement("textarea");
            sub.id="sub_id"+(i+1);
            sub.readOnly=true;
            sub.style.width="250px";
            sub.style.border="1px solid black";
            sub.value=eval('sem'+cgpasem1+'_id['+i+']');
            document.getElementById("tcol_id"+(i+1)).appendChild(sub);
            
            var select_grade=document.createElement("select");
            select_grade.id="select_grade_id"+(i+1);
            select_grade.style.width="60px";
            select_grade.style.fontSize="15px";
            select_grade.style.margin="30px";
            document.getElementById("tcol_id"+(i+1)).appendChild(select_grade);
            

            for(let j=0;j<grade.length;j++)
            {
                var z = document.createElement("option");
                z.setAttribute("value", 10-j);
                var t = document.createTextNode(grade[j]);
                z.appendChild(t);
                document.getElementById("select_grade_id"+(i+1)).appendChild(z);
            }
            
        }
        
        
        var oc_div=document.createElement("div");
        oc_div.id="oc_div_id";
        main.appendChild(oc_div);

        var oc=document.createElement("input");
        oc.type="text";
        oc.id="oc_id";
        oc.value="Once Credit courses";
        oc.style.fontSize="15px";
        oc.style.margin="10px";
        oc.readOnly=true;
        document.getElementById("oc_div_id").appendChild(oc);

        var oc_add=document.createElement("input");
        oc_add.type="button";
        oc_add.id="oc_add_id";
        oc_add.value="Add";
        oc_add.setAttribute("onclick","ocadd()");
        oc_add.fontSize="15px";
        document.getElementById("oc_div_id").appendChild(oc_add);
        
        var elec_div=document.createElement("div");
        elec_div.id="elec_div_id";
        elec_div.style.padding="15px";
        main.appendChild(elec_div);

        var elec=document.createElement("input");
        elec.type="text";
        elec.id="elec_id";
        elec.value="Elective courses";
        elec.style.margin="10px";
        elec.style.fontSize="15px";
        elec.readOnly=true;
        document.getElementById("elec_div_id").appendChild(elec);

        var elec_add=document.createElement("input");
        elec_add.type="button";
        elec_add.id="elec_add_id";
        elec_add.value="Add";
        elec_add.setAttribute("onclick","elecadd()");
        elec_add.fontSize="15px";
        document.getElementById("elec_div_id").appendChild(elec_add);
        if(cgpasem1<cgpasem)
    {
        var cgpacalc = document.createElement("INPUT");
        cgpacalc.setAttribute("type","button");
        cgpacalc.setAttribute("value","Next");
        cgpacalc.setAttribute("onclick","cgpacalc()");
        cgpacalc.id="cgpacalc_btn_id";
        main.appendChild(cgpacalc);
    }
    else
    {
        var cgpacalc = document.createElement("INPUT");
        cgpacalc.setAttribute("type","button");
        cgpacalc.setAttribute("value","Submit");
        cgpacalc.setAttribute("onclick","cgpares()");
        cgpacalc.id="cgpacalc_btn_id";
        main.appendChild(cgpacalc);
    }

}

function cgpares()
{
    sum=0;
    tot=0;
    // alert(cgpasem1)
    for(let i=0;i<eval('sem'+cgpasem1+'_id').length;i++)
        {
            let og=document.getElementById("select_grade_id"+(i+1)).value;
            if(og>=6)
            {
                csum+=(og*eval('sem'+cgpasem1+'_points['+i+']'));
                sum+=(og*eval('sem'+cgpasem1+'_points['+i+']'));
            }
            else
            {
                csum=0;
                sum=0;
                cgpafail();
            }
            ctot+=eval('sem'+cgpasem1+'_points['+i+']');
            tot+=eval('sem'+cgpasem1+'_points['+i+']');
        }
        for(let i=0;i<oc_count;i++)
        {
            let og=document.getElementById("select_grade_oc_id"+(i+1)).value;
            if(og>=6)
            {
                csum+=(og*1);
                sum+=(og*1);
            }
            else
            {
                csum=0;
                sum=0;
                cgpafail();
            }
            ctot+=1;
            tot+=1;
        }
        oc_count=0;
        for(let i=0;i<elec_count;i++)
        {
            let og=document.getElementById("select_grade_elec_id"+(i+1)).value;
            if(og>=6)
            {
                csum+=(og*3);
                sum+=(og*3);
            }
            else
            {
                csum=0;
                sum=0;
                cgpafail();
            }
            ctot+=3;
            tot+=3;
        }
        elec_count=0;
        cce[cgpasem1-1]=sum;
        ctc[cgpasem1-1]=tot;
        ccr[cgpasem1-1]=(sum/tot).toFixed(2);

//    alert(csum/ctot);
   console.log(cce);
   console.log(ctc);
   console.log(ccr);

   var main=document.getElementById("main");
   main.innerHTML="";

   var gparesult = document.createElement("INPUT");
    gparesult.setAttribute("type", "text");
    gparesult.setAttribute("id","gparesultid");
    gparesult.setAttribute("value", "GPA of every semester");
    gparesult.style.margin="10px";
    gparesult.style.border="2px solid black";
    gparesult.style.fontSize="15px";
    gparesult.readOnly=true;
    main.appendChild(gparesult);

   var table=document.createElement("table");
   table.id="table_id";
   table.style.textAlign="center";
   main.appendChild(table);
        for(let i=0;i<cgpasem;i++)
        {
            var trow=document.createElement("tr");
            trow.id="trow_id"+(i+1);
            document.getElementById("table_id").appendChild(trow);

            var tcol=document.createElement("td");
            tcol.id="tcol_id"+(i+1);
            document.getElementById("trow_id"+(i+1)).appendChild(tcol);

            var sub=document.createElement("textarea");
            sub.id="sub_id"+(i+1);
            sub.style.width="250px";
            sub.readOnly=true;
            sub.style.border="1px solid black";
            sub.value=('Semester - '+(i+1));
            document.getElementById("tcol_id"+(i+1)).appendChild(sub);
            
            var sub1=document.createElement("textarea");
            sub1.id="sub1_id"+(i+1);
            sub1.style.width="250px";
            sub1.readOnly=true;
            sub1.style.border="1px solid black";
            sub1.value=eval('ccr['+i+']');
            document.getElementById("tcol_id"+(i+1)).appendChild(sub1);
        }

        var main2=document.createElement("div");

    var cgparesult = document.createElement("INPUT");
    cgparesult.setAttribute("type", "text");
    cgparesult.setAttribute("id","cgparesultid");
    cgparesult.setAttribute("value", "CGPA");
    cgparesult.style.margin="10px";
    cgparesult.style.border="2px solid black";
    cgparesult.style.fontSize="15px";
    cgparesult.readOnly=true;
    main2.appendChild(cgparesult);

    var cgpaanswer = document.createElement("INPUT");
    cgpaanswer.setAttribute("type","text");
    if(sum>0)
    cgpaanswer.value=(csum/ctot).toFixed(2);
    else
    cgpaanswer.setAttribute("value","cannot be calculated");
    cgpaanswer.id="cgpaanswer_btn_id";
    cgpaanswer.fontSize="15px"
    cgpaanswer.style.border="0px solid";
    cgpaanswer.readOnly=true;
    main2.appendChild(cgpaanswer);

    document.getElementById("main").appendChild(main2);
    document.getElementById("cgpabtn").disabled=false;


}

function cgpafail()
{
    alert("Can't able to calculate CGPA wih the entered grade");
    cgpa();

}

function gpafail()
{
    alert("Can't able to calculate GPA wih the entered grade");
    gpa();

}

function student()
{
    alert("This Functionality is not yet enabled")
}

function staff()
{
    alert("This Functionality is not yet enabled")
}

function gpasubmit()
{

    var main=document.getElementById("main");
    gpasem=document.getElementById("seminpid").value;
    main.innerHTML="";
    
    if(gpasem>=1 && gpasem<=8)
    {
        var table=document.createElement("table");
        table.id="table_id";
        main.appendChild(table);
        for(let i=0;i<eval('sem'+gpasem+'_id').length;i++)
        {
            var trow=document.createElement("tr");
            trow.id="trow_id"+(i+1);
            document.getElementById("table_id").appendChild(trow);

            var tcol=document.createElement("td");
            tcol.id="tcol_id"+(i+1);
            document.getElementById("trow_id"+(i+1)).appendChild(tcol);

            var sub=document.createElement("textarea");
            sub.id="sub_id"+(i+1);
            sub.style.width="250px";
            sub.readOnly=true;
            sub.style.border="1px solid black";
            sub.value=eval('sem'+gpasem+'_id['+i+']');
            document.getElementById("tcol_id"+(i+1)).appendChild(sub);
            
            var select_grade=document.createElement("select");
            select_grade.id="select_grade_id"+(i+1);
            select_grade.style.width="60px";
            select_grade.style.fontSize="15px";
            select_grade.style.margin="30px";
            document.getElementById("tcol_id"+(i+1)).appendChild(select_grade);
            

            for(let j=0;j<grade.length;j++)
            {
                var z = document.createElement("option");
                z.setAttribute("value", 10-j);
                var t = document.createTextNode(grade[j]);
                z.appendChild(t);
                document.getElementById("select_grade_id"+(i+1)).appendChild(z);
            }
            
        }
        
        var oc_div=document.createElement("div");
        oc_div.id="oc_div_id";
        main.appendChild(oc_div);

        var oc=document.createElement("input");
        oc.type="text";
        oc.id="oc_id";
        oc.value="Once Credit courses";
        oc.style.fontSize="15px";
        oc.style.margin="10px";
        oc.readOnly=true;
        document.getElementById("oc_div_id").appendChild(oc);

        var oc_add=document.createElement("input");
        oc_add.type="button";
        oc_add.id="oc_add_id";
        oc_add.value="Add";
        oc_add.setAttribute("onclick","ocadd()");
        oc_add.fontSize="15px";
        document.getElementById("oc_div_id").appendChild(oc_add);
        
        var elec_div=document.createElement("div");
        elec_div.id="elec_div_id";
        elec_div.style.padding="15px";
        main.appendChild(elec_div);

        var elec=document.createElement("input");
        elec.type="text";
        elec.id="elec_id";
        elec.value="Elective courses";
        elec.style.margin="10px";
        elec.style.fontSize="15px";
        elec.readOnly=true;
        document.getElementById("elec_div_id").appendChild(elec);

        var elec_add=document.createElement("input");
        elec_add.type="button";
        elec_add.id="elec_add_id";
        elec_add.value="Add";
        elec_add.setAttribute("onclick","elecadd()");
        elec_add.fontSize="15px";
        document.getElementById("elec_div_id").appendChild(elec_add);

        var gpacalc = document.createElement("INPUT");
        gpacalc.setAttribute("type","button");
        gpacalc.setAttribute("value","Calculate");
        gpacalc.setAttribute("onclick","gpacalc()");
        gpacalc.id="gpacalc_btn_id";
        main.appendChild(gpacalc);
    }
    else{
        alert("Invalid Input");
        gpa();
    }
}

function gpacalc()
{
    var main=document.getElementById("main");
    document.getElementById("gpacalc_btn_id").disabled=true;
    document.getElementById("oc_add_id").disabled=true;
    document.getElementById("elec_add_id").disabled=true;
    sum=0,tot=0;
    if(gpasem>=1 && gpasem<=8)
    {
        
        for(let i=0;i<eval('sem'+gpasem+'_id').length;i++)
        {
            let og=document.getElementById("select_grade_id"+(i+1)).value;
            if(og>=6)
            sum+=(og*eval('sem'+gpasem+'_points['+i+']'));
            else
            {
                sum=0
                gpafail();
            }
            tot+=eval('sem'+gpasem+'_points['+i+']');
        }
        for(let i=0;i<oc_count;i++)
        {
            let og=document.getElementById("select_grade_oc_id"+(i+1)).value;
            if(og>=6)
            sum+=(og*1);
            else
            {
                sum=0
                gpafail();
            }
            tot+=1;
        }
        oc_count=0;
        for(let i=0;i<elec_count;i++)
        {
            let og=document.getElementById("select_grade_elec_id"+(i+1)).value;
            if(og>=6)
            sum+=(og*3);
            else
            {
                sum=0
                gpafail();
            }
            tot+=3;
        }
        elec_count=0;
    }

    var main2=document.createElement("div");

    var gpares = document.createElement("INPUT");
    gpares.setAttribute("type", "text");
    gpares.setAttribute("id","gparesid");
    gpares.setAttribute("value", "Gpa");
    gpares.style.margin="10px";
    gpares.style.border="2px solid black";
    gpares.style.fontSize="15px";
    gpares.readOnly=true;
    main2.appendChild(gpares);

    var gpaanswer = document.createElement("INPUT");
    gpaanswer.setAttribute("type","text");
    if(sum>0)
    gpaanswer.setAttribute("value",sum/tot);
    else
    gpaanswer.setAttribute("value","cannot be calculated");
    gpaanswer.id="gpaanswer_btn_id";
    gpaanswer.fontSize="15px"
    gpaanswer.style.border="0px solid";
    gpaanswer.readOnly=true;
    main2.appendChild(gpaanswer);

    document.getElementById("main").appendChild(main2);
    document.getElementById("gpabtn").disabled=false;
}

function ocadd()
{
    // alert("ocadd");
    oc_count++;
    // var adding=document.getElementById("oc_div");

    var select_oc_div=document.createElement("div");
    select_oc_div.id="select_oc_div_id"+oc_count;
    document.getElementById("oc_div_id").appendChild(select_oc_div);
    
    
    var select_oc=document.createElement("select");
    select_oc.id="select_oc_id"+oc_count;
    select_oc.style.width="260px";
    select_oc.style.fontSize="15px";
    select_oc.style.margin="10px";
    document.getElementById("select_oc_div_id"+oc_count).appendChild(select_oc);
    
    for(let j=0;j<occ.length;j++)
    {
        var z = document.createElement("option");
        var t = document.createTextNode(occ[j]);
        z.appendChild(t);
        document.getElementById("select_oc_id"+oc_count).appendChild(z);
    }

    

    var select_grade_oc=document.createElement("select");
    select_grade_oc.id="select_grade_oc_id"+oc_count;
    select_grade_oc.style.width="60px";
    select_grade_oc.style.fontSize="15px";
    select_grade_oc.style.margin="10px";
    document.getElementById("select_oc_div_id"+oc_count).appendChild(select_grade_oc);
    
    for(let j=0;j<grade.length;j++)
    {
        var z = document.createElement("option");
        z.setAttribute("value", 10-j);
        var t = document.createTextNode(grade[j]);
        z.appendChild(t);
        document.getElementById("select_grade_oc_id"+oc_count).appendChild(z);
    }

    
}

function elecadd()
{
    // alert("elecadd");
    elec_count++;
    // var adding=document.getElementById("oc_div");

    var select_elec_div=document.createElement("div");
    select_elec_div.id="select_elec_div_id"+elec_count;
    document.getElementById("elec_div_id").appendChild(select_elec_div);
    
    
    var select_elec=document.createElement("select");
    select_elec.id="select_elec_id"+elec_count;
    select_elec.style.width="260px";
    select_elec.style.fontSize="15px";
    select_elec.style.margin="10px";
    document.getElementById("select_elec_div_id"+elec_count).appendChild(select_elec);
    
    for(let j=0;j<elective.length;j++)
    {
        var z = document.createElement("option");
        var t = document.createTextNode(elective[j]);
        z.appendChild(t);
        document.getElementById("select_elec_id"+elec_count).appendChild(z);
    }

    

    var select_grade_elec=document.createElement("select");
    select_grade_elec.id="select_grade_elec_id"+elec_count;
    select_grade_elec.style.width="60px";
    select_grade_elec.style.fontSize="15px";
    select_grade_elec.style.margin="10px";
    document.getElementById("select_elec_div_id"+elec_count).appendChild(select_grade_elec);
    
    for(let j=0;j<grade.length;j++)
    {
        var z = document.createElement("option");
        z.setAttribute("value", 10-j);
        var t = document.createTextNode(grade[j]);
        z.appendChild(t);
        document.getElementById("select_grade_elec_id"+elec_count).appendChild(z);
    }
}