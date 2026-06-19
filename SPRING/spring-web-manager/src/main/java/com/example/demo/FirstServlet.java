package com.example.demo;

import java.io.IOException;


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class FirstServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	public FirstServlet() {
		super();
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		
		 response.getWriter().println("<h1>Hello, World!</h1>");
		 response.getWriter().println("Sono una Servlet!");
		 
//	        int a = Integer.parseInt(request.getParameter("a"));
//	        int b = Integer.parseInt(request.getParameter("b"));
//	        int somma = a + b;
//	        response.getWriter().println("Somma: " + somma);

		
		
		
		
//		response.setContentType("text/html");
//		 response.getWriter().println("<h1>Hello, World!</h1>");
//
//		String nome = request.getParameter("nome");
//		if (nome != null) {
//			response.addCookie(new Cookie("utente", nome));
//			response.getWriter().println("Cookie salvato: " + nome);
//		} else {
//			for (Cookie c : request.getCookies()) {
//				if (c.getName().equals("utente")) {
//					response.getWriter().println("Ciao di nuovo, " + c.getValue());
//				}
//			}
//		}

	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// String nome = request.getParameter("nome");
		// response.getWriter().println("Ricevuto via POST: " + nome);

		// String user = request.getParameter("username");
		// String pass = request.getParameter("password");

		// response.setContentType("text/html");
		// if ("admin".equals(user) && "1234".equals(pass)) {
		// response.getWriter().println("<h1>Login riuscito!</h1>");
		// } else {
		// response.getWriter().println("<h1>Login fallito!</h1>");

	}
	
	

}
