import java.util.*;
public class HandCricket {
     
     
	 int toss;
	   int user;
	   double comp;
	   int compint;
	   int ch;
	   int batball;
	   double comborb;
	   int totalu;
	   int totalc;
	public static void main(String[] args) {
		
	   Main ob= new Main();
	   
	   	 int cbat=0;
	     int cball=0;
	     int ubat = 0;
	     int uball =0;
	   
	System.out.println("Head or Tail");
	System.out.println("1.Head");
	System.out.println("2.Tail");
	Scanner sc= new Scanner(System.in);
	ob.toss=sc.nextInt();
	sc.nextLine();
	
	if(ob.toss==1)
	{
	System.out.println("Youve choosen Head");
	}
	else if(ob.toss==2)
	{
	            System.out.println("Youve choosen Tail");
	}
    System.out.println("Enter 'toss'");
    
    String sh=sc.nextLine();
	int toss= (int) (Math.random()*2);
	
	
	if(toss==0&&ob.toss==1)
	{
				System.out.println("Head Appeared!");
				System.out.println("You won toss");
				System.out.println("Choose Bat or Ball");
				System.out.println("1.Bat");
				System.out.println("2.Ball");
			    ob.batball=sc.nextInt();
				    if(ob.batball==1) {
				    	ubat=1;
				    	uball=0;
				    }
				    else {
				    	ubat=0;
				    	uball=1;
				    }
	}
	else if(toss==1&&ob.toss==2) {
				System.out.println("Tail Appeared");
				System.out.println("You won toss!!");
				System.out.println("Choose Bat or Ball");
				System.out.println("1.Bat");
				System.out.println("2.Ball");
			    ob.batball=sc.nextInt();
				    if(ob.batball==1) {
				    	ubat=1;
				    	uball=0;
				    }
				    else {
				    	ubat=0;
				    	uball=1;
				    }
	}
	
	else {
				if(toss==0)
				{
					System.out.println("Head Appeared!!");
					
				}
				else if(toss==1)
				{
					System.out.println("Tail Appeared!!");
				}
				
				System.out.println("You Lost!!");
				System.out.println("Computer Won!");
				int compchos=(int )(Math.random()*2);
						if(compchos==0)
						{
							System.out.println("Computer Choose To BAt!");
							cbat=1;
							cball=0;
									
						}
						
						else {
							System.out.println("Computer Choose to Ball ");
							 cbat=0;
							 cball=1;
						}
	}
	 
	

	ob.totalu=0;
	ob.totalc=0;

	if(ubat==1||cball==1)
	{
	   ob.totalu=ob.bat();
	   ob.totalc=ob.bowl();
	}

	else if(uball==1||cbat==1)
	{
	   ob.totalu=ob.bowl();
	   ob.totalc=ob.bat();
	}
	

	if(ob.totalc>ob.totalu)
	{
	   System.out.println("COMPUTER WINS, GOOD GAME");
	}
	else if(ob.totalu>ob.totalc)
	{
	   System.out.println("USER WINS, GOOD JOB YOU LEGEND");
	}
	else
	{
	   System.out.println("DRAW");
	}
	
}
	
	public int bat()
	{
	   Scanner sc= new Scanner(System.in);
	   int tu;
	   tu=0;
	  // double cbraw;
	   int cb,ub;
	   System.out.println("you are batting");
	   for(int i=0;i<1000;i++)
	   {
	       
	       System.out.println("enter number between 1-6");
	       ub=sc.nextInt();
	       
	       while(ub>6)
	       {
	    	   System.out.println("You can't Hit more then 6 unless you are MSD!!");
	    	   System.out.println("Why MSD? uh!");
	    	   System.out.println("Coz God can do anything!!");
	    	   System.out.println("enter number between 1-6");
		       ub=sc.nextInt();
	       }
//	       cbraw= ;
//	       if(cbraw>6)
//	       {
//	           cbraw=cbraw/2;
//	       }
	       cb=((int)Math.random()*6)+1;
	       System.out.println("you put="+ub+"computer puts="+cb);
	       if(ub==cb)
	       {
	           System.out.println("user out");
	           return tu;
	       }
	       else
	       {
	           tu=tu+ub;
	           System.out.println("total user runs="+tu);
	       }
	       
	       
	   }
	    return 0;
	}

	public int bowl()
	{
	   Scanner sc= new Scanner(System.in);
	   int tu;
	   tu=0;
	   int ub=0,cb=0;
	   //double cbraw;
	   System.out.println("you are bowling");
	   for(int i=0;i<1000;i++)
	   {
	       System.out.println("enter number between 1-6");
	       ub=sc.nextInt();
	       ub=(int )ub;
	       while(ub>6) {
	    	   System.out.println("NO ball!!");
	    	   System.out.println("enter number between 1-6");
		       ub=sc.nextInt(); 
	       }
//	       cbraw= Math.random()*10;
//	       if(cbraw>6)
//	       {
//	           cbraw=cbraw/2;
//	       }
//	       cb=(int)cbraw;
	       cb=((int)Math.random()*6)+1;
	       System.out.println("you put="+ub+"computer puts="+cb);
	       if(ub==cb)
	       {
	           System.out.println("comp out");
	           return tu;
	       }
	       else
	       {
	           tu=tu+cb;									////////////////////////////////////
	           System.out.println("total comp runs="+tu);
	       }
	 
	   }
	   return 0;
	}

	
}