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
    var c = '40px 120px '+a.split(' ')[2]+' auto'
    $('#gridcontain').css('grid-template-rows',c)
    //$('#gridcontain').css('grid-template-columns',b)

    var d = $('#maina').css('grid-template-columns')
    var e = 'auto '+d.split(' ')[1]+' auto'
    $('#maina').css('grid-template-columns',e)


}