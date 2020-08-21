var Test;
(function (Test) {
    var Check = /** @class */ (function () {
        function Check() {
            this.check = function (submissions, answers) {
                var count = 0;
                for (i = 0; i < 5; i++) {
                    console.log(submissions[i], answers[i]);
                    if (JSON.stringify(submissions[i]) == JSON.stringify(answers[i])) {
                        count++;
                    }
                }
                console.log(count);
                localStorage.setItem("page1", JSON.stringify(count));
            };
        }
        return Check;
    }());
    var ch = new Check();
    var submissions = [];
    var answers = [[1], [2], [3], [3, 2], [3]];
    $("#next").click(function () {
        for (var j = 1; j < 6; j++) {
            var ques = "q" + j;
            var parent = $("#q" + j);
            console.log(parent);
            var sop = [];
            for (var k = 1; k < 4; k++) {
                var subop = parent.children("#op" + k);
                console.log(subop);
                if (subop.is(":checked")) {
                    console.log("asds");
                    sop.push(k);
                }
            }
            submissions.push(sop);
        }
        ch.check(submissions, answers);
        localStorage.setItem("time", $("#time").html());
        window.location.href = "quiz2.html";
    });
    $("#clear").click(function () {
        var radio = document.getElementsByTagName("input");
        for (var i = 0; i < radio.length; i++) {
            radio[i].checked = false;
        }
    });
})(Test || (Test = {}));
