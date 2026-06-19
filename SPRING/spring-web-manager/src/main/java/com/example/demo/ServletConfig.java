package com.example.demo;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
public class ServletConfig {

	@Bean
	public ServletRegistrationBean<FirstServlet> firstServletRegistration() {
		return new ServletRegistrationBean<>(new FirstServlet(), "/FirstServlet");
	}



}
