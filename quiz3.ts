module Test{
    class Check{
        
        check = (submissions:Array<number[]>, answers:Array<number[]>)=>{
            var count=0;
            for(i = 0;i<5;i++){
                console.log(submissions[i],answers[i]);
                if(JSON.stringify(submissions[i])==JSON.stringify(answers[i])){ count++;}
            } 
            console.log(count);
            localStorage.setItem("page3",JSON.stringify(count));
    }

    }$("#back").click(function(){
        for(var j=1;j<6;j++)
        {
            var ques = "q"+j;
            var parent= $("#q"+j);
            console.log(parent)
            var sop : Array<number>= [];
            for(var k = 1;k<4;k++){
                var subop=parent.children("#op"+k)
                console.log(subop);
                if(subop.is(":checked")){console.log("asds"); sop.push(k);}
            }
            // sop.sort();
            submissions.push(sop);
        }
        ch.check(submissions,answers);
        localStorage.setItem("time",JSON.$("#time").html());
        window.location.href="quiz2.html";
    })
    var ch: Check = new Check();
    let submissions: Array<number[]> = []
    let answers: Array<number[]> = [[1],[2],[3],[3,2],[3]];
    $("#next").click(function(){
        for(var j=1;j<6;j++)
        {
            var ques = "q"+j;
            var parent= $("#q"+j);
            console.log(parent)
            var sop : Array<number>= [];
            for(var k = 1;k<4;k++){
                var subop=parent.children("#op"+k)
                console.log(subop);
                if(subop.is(":checked")){console.log("asds"); sop.push(k);}
            }
            // sop.sort();
            submissions.push(sop);
        }
        ch.check(submissions,answers);
        localStorage.setItem("time",$("#time").html());
        window.location.href="quiz4.html";
        
    })

    
}
