maxOperations=(n,k)=>{x=0;m=new Map();for(i=0;i<n.length;i++){if(m.get(k-n[i])){if(m.get(k-n[i]===1))m.delete(k-n[i]);else m.set(k-n[i],(m.get(k-n[i])-1));x++;}else{m.set(n[i],(m.get(n[i])+1||1))}}return x;}