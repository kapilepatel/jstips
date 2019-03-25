for(i=0; i<5;i++){
  var j = i*10;

  setTimeout(()=>{
      console.log(j);
  },3000);
}


for(i=0; i<5;i++){
  let j = i*10;

  setTimeout(()=>{
      console.log(j);
  },6000);
}

