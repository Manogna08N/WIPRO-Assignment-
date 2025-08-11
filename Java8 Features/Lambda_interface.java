package com.km;

import java.util.ArrayList;

interface greeting{
	void greet();
}

public class Lambda_interface {

	public static void main(String[] args) {
		greeting g=() ->System.out.println("Hi! Have a Great day");
		g.greet();
		
		ArrayList<String> arr = new ArrayList<>();
		arr.add("1");
		arr.add("2");
		arr.add("3");
		
		for(String n:arr) {
			System.out.println(n);
		}

	}

}
