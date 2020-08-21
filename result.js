var Test;
(function (Test) {
    var Check = /** @class */ (function () {
        function Check() {
            this.score = function () {
                var tscore = 0;
                var page = "page";
                for (var i = 1; i < 6; i++) {
                    var sc;
                    sc = JSON.parse(localStorage.getItem("page" + i));
                    tscore += sc;
                }
                return tscore;
            };
        }
        return Check;
    }());
    var ch = new Check();
    var res = ch.score();
    console.log(res);
    $("#result").append((res / 25) * 100 + "%");
})(Test || (Test = {}));
