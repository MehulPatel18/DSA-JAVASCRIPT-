
public class LinkedList {
     Node head;
     public void insert(int data) {
          Node node = new Node();
          node.data = data;
          node.next = null;
          System.out.println("called"+ node.data);
          if(head == null)
               head = node;
          else {
               Node n = head;
               while (n.next != null) {
                    n = n.next;
               }
               n.next = n;    
          }

     }

     public void show () {
          Node n = head;
          while (n.next != null) {
               System.out.println(n.data);
          }
     }
}
