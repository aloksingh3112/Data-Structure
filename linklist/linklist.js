class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SingleLinkList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }

    push(val){
        var newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.length++
        return this;
    }

    pop(){
        if(!this.head){
            return undefined
        }
        var current=this.head;
        var newTail=current;
        
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null
        }
        return current;

    }
    shift(){
        if(!this.head){
            return null;
         }
         var current=this.head;
         this.head=this.head.next;
         this.length--;
         if(this.length===0){
             this.head=null;
             this.tail=null;
         }
         return current;


    }

    unshift(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
        let current=this.head;
        this.head=newNode;
        this.head.next=current;
        }
        this.length++;
        return newNode;

    }

    getEliment(index){
       if(index==0 || index>this.length){
           return null
       }
       else{
         var current=this.head;
          for(let i=1 ; i<index;i++){
             current=current.next

          }
          return current;
       }

    }

    setEliment(value,index){
        var node=this.getEliment(index);
        if(!node){
            return false;
        }
        else{
           node.val=value;
           return true;
        }

    }

    insertElement(value,index){
        if(index<0 || index>this.length){
            return false;
        }
        else if(index==0){
            this.unshift(value);
            
        }
        else if(index==this.length){
            this.push(value);
           
        }
        else{
            var node=new Node(value);
            var prevNode=this.getEliment(index-1);
            node.next=prevNode.next;
            prevNode.next=node;
            this.length++;
            
        }
       
        return true;

    }
      remove(index){
          if(index>this.length || index<=0){
              return undefined
          }
          else if(index==length){
              return this.pop();
          }
          else if(index==1){
              return this.shift();

          }
          else{
             prev=this.getEliment(index-1);
             removed=prev.next;
             prev.next=removed.next;
             this.length--;
             return removed;
             
          }
          

     }


     reverse(){
         var node=this.head;
         this.head=this.tail;
         this.tail=node;
         var next;
         var prev=null;
         for(var i=0;i<this.length;i++){
             next=node.next;
             node.next=prev;
             prev=node
             node=next;
         }
         return this;
     }





    
}
var eliment=new SingleLinkList();
eliment.push(5);
eliment.push(6);
eliment.push(60);
eliment.push(8);
eliment.push(9);



console.log(eliment.reverse());
// eliment.pop();

