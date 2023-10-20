//reference
const label=document.getElementById('input');
const buttons=document.getElementsByClassName('button');
// button conatriner operations

Array.from(buttons).forEach(element => {
       element.addEventListener('click',(e)=>{
        
        switch(e.target.innerHTML){
            case '=':label.value=eval(label.value);
            break;
            case 'x':label.value=label.value.slice(0,-1);
    
            break;
            case "AC":label.value="";
            break;
            case 'E':label.value+='**';
         break;
         default:label.value+=e.target.innerHTML;
        } });});
        