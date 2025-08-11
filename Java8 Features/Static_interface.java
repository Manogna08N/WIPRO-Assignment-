package com.km;

interface Sum {
    int add1(int x, int y);
    
}   
public class Static_interface {

	public static void main(String[] args) {
		
		Sum m = (x, y) -> x + y; 
        System.out.println(m.add1(8, 15));
		
	}

}
