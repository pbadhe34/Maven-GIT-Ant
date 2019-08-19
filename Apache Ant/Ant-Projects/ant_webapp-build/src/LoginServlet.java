 
 

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import sun.jdbc.odbc.*;
 
public
class  LoginServlet extends HttpServlet 
{

    public void doGet(HttpServletRequest req, HttpServletResponse response)
    throws ServletException, IOException
    {
	   PrintWriter		out;
	   response.setContentType("text/html");  
	   out = response.getWriter();
	   String name = req.getParameter("uName");
	   String pass = req.getParameter("uPass");
	   if((name==null)|(pass==null))
		{
          out.println("No User Parameters "); 
		  return;
		}

 //Syntax for using Oracle thin type Driver
 /*       driverName="oracle.jdbc.driver.OracleDriver"
          connectionURL="jdbc:oracle:thin:@ntserver:1521:ORCL" where ORCL is the service name
         connectionName="scott" connectionPassword="tiger"           
		  */

      try
	  {
        
       Class.forName("oracle.jdbc.driver.OracleDriver");
	   System.out.println("Driver Registered");
       Connection con = DriverManager.getConnection("jdbc:oracle:thin:@Prakash:1521:oracle");
	  System.out.println("Connection  Created");
       Statement selectAll = con.createStatement();
	  System.out.println("Statement Created");
       String sql = "Select * from UserDetails";
       ResultSet res = selectAll.executeQuery(sql);
	   System.out.println("Query Fired");
       if(res == null)
          {
           System.out.println("No ResultSet Found");
           out.println("Procesing error"); 
          }             
       boolean bFound = false;
         while(res.next())
           {
            if(name.equals(res.getString("Name")))
			   {
                  if(pass.equals(res.getString("Password")))
				   {
					  bFound = true;
					  break;
				   }
			   }            
           }
        res.close();
        selectAll.close(); 
        con.close();
		if(bFound)
			out.println("Login Successfull!");
		else out.println("Login Error!");

	}
	   catch(SQLException sql)
		  {
            System.out.println("SQL Error"+sql.getMessage());
            out.println("Database error "+sql.getMessage()); 
            out.println("\n"); 
			return;
		  }
		  catch(Exception ex)
		  {
            System.out.println("System  Error "+ex.getMessage());
            out.println("System error "+ex.getMessage()); 
		    out.println("\n");
			return;
		  }

    }
public void doPost(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException
    {
    doPost(req,res);
}
}
