class LinkedList{
    node: Link;

    // Insert function 
    insert(i: number): boolean{
        if (this.node == null) {
            this.node = new Link(i, null);
            return true;
        }
        else {
            let temp: Link = this.node;
            while (temp.nextLink != null) {
                temp = temp.nextLink;  
            }
            temp.nextLink = new Link(i, null); 
            return true;
          }
    }

    // print function 
    print(i: Link) {
        let temp: Link = this.node;
        while (temp.nextLink != null) {
            console.log(temp.i);
            temp=temp.nextLink;
        }
        console.log(temp.i);
    }

    // search function 
    searchData(data:number):Link{
		let temp:Link = this.node;
		while(temp.nextLink!=null){
			if(temp.i==data){
				return temp;
			}
			temp=temp.nextLink;
		}
		return null;
	}


}

class Link {
    i: number;
    nextLink: Link;

    constructor(n:number, l:any) {
        this.i = n;
        this.nextLink = l;
    }
}


// tester 
let list = new LinkedList();

list.insert(3);
list.insert(32);
list.insert(13);
list.insert(312);
list.insert(23);

list.searchData(312).i;
console.log("Searching for ...",list.searchData(312).i);
// passing the head 
list.print(list.node);