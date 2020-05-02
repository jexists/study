# Spring boot



Maven 



**+ Type : Maven - 프로젝트 빌드 및 의존성 관리에 Maven 을 사용합니다. Gradle을 선택할 수도 있습니다.**
**+ Packaging: Jar - 패키징을 Jar로 하도록 설정합니다. War로도 설정할 수 있습니다.**
**+ Java Version: 8 - 자바는 1.8을 사용합니다.**
**+ Language: Javav - 언어는 Java를 사용합니다. Kotlin을 선택할 수도 있습니다.**
**+ Group com.tistory.offbyone - 자신에게 맞는 값을 넣으면 됩니다. 보통 도메인을 사용합니다.**
**+ Artifact: spring-boot-test - Mave 아티팩트명인데, 이것이 프로젝트명이 됩니다.**
**+ Version: 0.0.1-SNAPSHOT - 프로젝트의 버전입니다.**
**+ Description: Demo project for Spring Boot - 프로젝트 설명입니다.**
**+ Package : com.tistory.offbyone.springboot - 초기 소스들이 만들어질 기본 패키지명 입니다.**

출처: https://offbyone.tistory.com/391 [쉬고 싶은 개발자]





```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.6.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.sjhds</groupId>
	<artifactId>sjadserver</artifactId>
	<version>0.0.1</version>
	<name>sjadserver</name>
	<description>SJHDS agency system project for Spring Boot</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-aop</artifactId>
		</dependency>		
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
			<exclusions>
				<exclusion>
					<groupId>org.apache.tomcat</groupId>
					<artifactId>tomcat-jdbc</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
        <dependency>
			<groupId>com.zaxxer</groupId>
			<artifactId>HikariCP</artifactId>
		</dependency>
		<dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
        </dependency>
        <dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-context-support</artifactId>
			<version>4.1.1.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		
		<dependency>
			<groupId>org.modelmapper</groupId>
			<artifactId>modelmapper</artifactId>
			<version>1.1.0</version>
		</dependency>
		
		 
        <dependency>
		    <groupId>org.springframework.cloud</groupId>
		    <artifactId>spring-cloud-starter-aws</artifactId>
		    <version>2.1.2.RELEASE</version>
		</dependency> 
  
		<dependency>
		    <groupId>org.quartz-scheduler</groupId>
		    <artifactId>quartz</artifactId>
		</dependency>
			
		<!-- 
		<dependency>
		    <groupId>com.amazonaws</groupId>
		    <artifactId>aws-java-sdk</artifactId>
		    <version>1.11.623</version>
		</dependency>
		-->
		
		<dependency>
		    <groupId>com.google.api-client</groupId>
		    <artifactId>google-api-client</artifactId>
		    <version>1.23.0</version>
		</dependency>
		<dependency>
		    <groupId>com.google.oauth-client</groupId>
		    <artifactId>google-oauth-client-jetty</artifactId>
		    <version>1.23.0</version>
		</dependency>
		<dependency>
		    <groupId>com.google.apis</groupId>
		    <artifactId>google-api-services-sheets</artifactId>
		    <version>v4-rev493-1.23.0</version>
		</dependency>
				
		<dependency>
			<groupId>org.apache.poi</groupId>
			<artifactId>poi-ooxml</artifactId>
			<version>3.13</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
                	<executable>true</executable>
            	</configuration>
			</plugin>
		</plugins>
	</build>
</project>

```

