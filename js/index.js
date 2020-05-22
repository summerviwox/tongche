var app = new Vue({
    el:'#maina',
    data:{
        msg:'test',
        head:'点击了',
        bandai:[2,3,4],
        car:['车队1','车队2','车队3','车队4']
    },
    methods:{
        showTest:function () {
            alert(this.head)
        },
        addBantai:function () {
            this.bandai.push(this.bandai.length+2)
        },
        addCarQue:function () {
            this.car.push("车队"+(this.car.length+1))
        }
    }
})
window.onload = function(){
    //  app.showTest()
    var a = $('#gridcontain').css('grid-template-rows')
    var b = $('#gridcontain').css('grid-template-columns')
    $('#gridcontain').css('grid-template-rows',a)
    $('#gridcontain').css('grid-template-columns',b)


}