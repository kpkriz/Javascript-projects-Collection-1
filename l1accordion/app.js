// console.log("hii");
var getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles); //HTML Collection can't loop
var getacccontent = document.getElementsByClassName('acccontent');
// console.log(getacccontent);  //NodeLists output is array so can loop

for(var x=0 ; x<getacctitles.length ; x++){
    getacctitles[x].addEventListener('click',function(e){
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle("active");
        var getcontent = this.nextElementSibling;

        if(getcontent.style.height){
            getcontent.style.height = null; //beware can't set 0 cus the height property is still there
        }else{
            // console.log(getcontent.scrollHeight);
            getcontent.style.height = getcontent.scrollHeight+"px";
        }
    });

    if(getacctitles[x].classList.contains("active")){
        getacccontent[x].style.height = getacccontent[x].scrollHeight+"px";
    }
}