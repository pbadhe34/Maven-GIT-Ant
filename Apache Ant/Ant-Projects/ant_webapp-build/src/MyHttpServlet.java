import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MyHttpServlet extends HttpServlet 
{

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException
    {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();			
		
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Welcome web mvc Programming</title>");
        out.println("</head>");
        out.println("<body>");				     
		        
		//put the images dir in curent app dir/ root dir
		out.println("<p align=center><i><font size=8 color=#0000FF> Welcome Friends!  </font></i></p>");
				
		 	     
		out.println("</body>");
		out.println("</html>");
		out.close();		 
         
    }
	 
	public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException
    {
       doGet(request,response);
	}
	 
}
