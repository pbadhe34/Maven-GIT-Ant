
 public class CommandLine
 {

  public static void main(String args[])
   {
   System.out.println("Number of arguments are  "+args.length); 
   /*
  System.out.println("First arg  is "+args[0]);  
   System.out.println("Second arg  is "+args[1]); 
   System.out.println("Third arg  is "+args[2]); 
    */
     String s1 = args[0];
     String s2 = args[1];
     String s3 = args[2];

     int a1 =  Integer.parseInt(s1);
     int a2 =  Integer.parseInt(s2);
     int a3 =  Integer.parseInt(s3);

 System.out.println("The sum of values is "+(a1+ a2 + a3));










       
   }

} 