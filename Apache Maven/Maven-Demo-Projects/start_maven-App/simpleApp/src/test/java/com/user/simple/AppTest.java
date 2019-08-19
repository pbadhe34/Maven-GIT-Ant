package com.user.simple;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        assertTrue( true );
    }

     public void testResult()
       {
         System.out.println("testing the Results..");
    com.user.simple.App obj = new com.user.simple.App();
         int data = obj.getData();
         // if(data!=100)
             //throw new RuntimeException("Number is incorrect!");
       }










}
