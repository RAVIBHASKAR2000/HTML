import java.util.*;
public class Hangman {
	
	static public void guess(String word,int life,String hint) {
		char[] filler = new char[word.length()];
		int i=0;
		
		while(i<word.length()) {
			filler[i]=word.charAt(i);
			i++;
		}
		i=0;
		while(i<word.length())
		{
			filler[i]='-';
			if(word.charAt(i)==' ')
			{
				filler[i]=' ';
				
			}
			
			i=i+2;
			
		}
		
		System.out.print(filler);
		System.out.println("    life remaining=" + life+"   hint:-   " + hint);
		
		
		Scanner sc = new Scanner(System.in);
		ArrayList<Character> entered = new ArrayList<Character>();
		
		
		while (life>0)
		{
		    
		    char x= sc.next().charAt(0);
		    
		    if(entered.contains(x))
		    {
		    	System.out.println("You have already entered");
		    	continue;
		    }
		    
		    entered.add(x);
			
		    if(word.contains(x+""))       //this if will check if there is any char which you entered in the word
		    {
		    	for(int y=0;y<word.length();y+=2) 	//we traverse  original word and find the position ,where char at that position matches your input char 
		    	{									// and put that charater at that position in filler.
		    		if(word.charAt(y)==x) 
		    		{
		    			filler[y]=x;
		    		}
		    		
		    	}
		    	
		    }
		    
		    else {
		    	life--;      //if you didnt input correct char decrease your life 
		    }
		    
		    if(word.equals(String.valueOf(filler)))    //string.valueof converts char array types into string
		    {											//  in this we are checking if we found the whole word 
		    	 System.out.print(filler);
		    	 System.out.println("  YOU WON!!  ");
		    	 break;
		    }
		    System.out.print(filler);
			System.out.println("    life remaining=" + life+ "  hint:-    "+hint);   //printing filler and life remaining
		    
		}
		
		
		if(life==0)
		{
			System.out.println("  YOU LOSE!!");
		}
		
	}

	public static void main(String[] args) { 
		// TODO Auto-generated method stub
		
		String[][] names= {{"algorithm","specification of a design or how to solve a problem"},
							{"artificial","made by human beings rather than occurring naturally"},
							{"ethics","moral principles"},
							{"Encourage","give support"},
							{"resource","is a source or supply from which a benefit is produced"},
							{"sequence","a particular order in which related things follow each other."},
							{"recurrence","the repetition of an action or event."},
							{"communication","means of sending or receiving information"}
							};
		int a= (int) (Math.random()*9);
		//int b = (int) (Math.random()*3);
		
		String word = names[a][0];
		String hint =names[a][1];
		
		//String word = "welcome to java";
		int life =5;
		
		guess(word,life,hint);

	}

}
