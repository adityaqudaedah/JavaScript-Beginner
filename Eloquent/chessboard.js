for (let i = 1 ; i <=8  ; ++i){
   for(let j = 1 ; j <= 8 ; ++j){
       //odd cases (black field in even indices)
       if (i%2!=0){
          if (j%2 == 0){
             document.write("#")
         }
         else document.write("&nbsp;&nbsp")
       }
       //even cases (black field in odd indices)
       else {
         if(j % 2 != 0){
            document.write("#")
         }
         else document.write("&nbsp;&nbsp")
      }
   }
   document.write("</br>")
}