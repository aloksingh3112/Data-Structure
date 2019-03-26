class Node{
    constructor(val){
      this.val=val;
      this.next=null;
      this.prev=null;
    }
}

class DoublyLinkList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value){
     let node=new Node(value);
     if(this.length===0){
         this.head=node;
         this.tail=node;
      
     }
     else{
       this.tail.next=node;
       node.prev=this.tail;
       this.tail=node;
     


     }
     this.length++;
     return this;
    }

    
}

var dls=new DoublyLinkList();
dls.push(10);
dls.push(30);
dls.push(40);
console.log(dls);