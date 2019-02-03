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
}
var eliment=new SingleLinkList();
eliment.push(5);
eliment.push(6);
eliment.push(60);
console.log(eliment);
eliment.pop();
console.log(eliment);
eliment.pop();
console.log(eliment);
eliment.pop();
console.log(eliment);
eliment.pop();
console.log(eliment);
