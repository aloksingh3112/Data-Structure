class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    enqueue(val){
        var node=new Node(val);
        if(!this.first){
            this.first=this.last=node;
            return this.size++;
        }
        this.last.next=node;
        this.last=node;
        return this.size++;

    }
}

var q=new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);