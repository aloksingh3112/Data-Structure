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
}
var eliment=new SingleLinkList();
eliment.push(5);
eliment.push(6);
eliment.push(60);
console.log(eliment);
