package com.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


////Run mvn  tomcat8:redeploy
//mvn tomcat7:run
/**
 * Servlet implementation class MyServlet
 */
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public MyServlet() {
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
throws ServletException, IOException {

String string1 = request.getParameter("string1");
String string2 = request.getParameter("string2");
String string3 = request.getParameter("string3");

String concatenated =
Concatenator.concatenate(
string1, string2, string3);

response.getWriter().write("Hello User");
response.getWriter().flush();
}

	 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
