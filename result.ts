module Test{
    class Check{
        public score = ():number =>{
            var tscore= 0;
            var page="page";
            for(var i=1;i<6;i++){
                var sc : number;
                sc = JSON.parse(localStorage.getItem("page"+i));
                tscore+=sc;
            }
            return tscore
        }
    }
    var ch = new Check();
    var res= ch.score();
    console.log(res)
    $("#result").append((res/25)*100+"%")
    
}
