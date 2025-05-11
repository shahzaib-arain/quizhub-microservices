# Microservices QuizApp

## 🚀 Project Overview

Microservices QuizApp is a scalable, modular, and distributed quiz application built using the microservices architecture. This project demonstrates how to build a quiz platform using Spring Boot for backend services and React for the frontend, with the following microservices:

* **API Gateway:** Handles routing, request filtering, and authentication for all services.
* **Eureka Server (Service Registry):** Manages service discovery, making it easier for microservices to locate and communicate with each other.
* **Quiz Service:** Manages quizzes, including CRUD operations for quizzes and their related data.
* **Question Service:** Manages questions, including CRUD operations for questions used in quizzes.
* **React Frontend:** Provides a user-friendly interface for users to participate in quizzes.

## 🌐 Architecture

The application is designed using a microservices architecture with the following components:

* **Eureka Server:** Manages service registration and discovery.
* **API Gateway:** Central point of access for all services, providing routing, load balancing, and security.
* **Quiz Service:** Manages quizzes, communicates with Question Service using FeignClient.
* **Question Service:** Manages questions for each quiz.
* **React Frontend:** A dynamic UI for users to take quizzes and view results.

## 🚦 Technologies Used

* **Java:** Programming language
* **Spring Boot:** Microservices framework
* **Spring Cloud Netflix Eureka:** Service Discovery
* **Spring Cloud Gateway:** API Gateway
* **FeignClient:** Simplified communication between services
* **React:** Frontend library
* **Axios:** HTTP client for React
* **Tailwind CSS:** For responsive styling
* **Maven:** Dependency management
* **Postman:** API testing
* **GitHub:** Version control

## ⚡ Prerequisites

* JDK 17 or later
* Maven 3.8+
* Node.js (for React)
* IntelliJ IDEA or any other Java IDE
* Git

## 🔧 Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to each microservice directory (API Gateway, Eureka Server, Quiz Service, Question Service).
3. Build the services using Maven:

   ```bash
   mvn clean install
   ```
4. Run each service in the following order:

   * Start Eureka Server
   * Start API Gateway
   * Start Quiz Service
   * Start Question Service

### React Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React app:

   ```bash
   npm start
   ```

## 🚀 Running the Application

* Access Eureka Server Dashboard at: `http://localhost:8761`
* Access API Gateway at: `http://localhost:8080`
* Quiz Service: `http://localhost:8081`
* Question Service: `http://localhost:8082`
* React Frontend: `http://localhost:3000`

## 📌 Project Structure

```
├── eureka-server
├── api-gateway
├── quiz-service
├── question-service
└── frontend (React)
```

## 💡 Key Features

* Centralized API Gateway for routing requests.
* Service Discovery with Eureka Server.
* Communication between services using FeignClient.
* Responsive React frontend with Tailwind CSS.
* Modular and scalable architecture.

## 📌 Future Enhancements

* Implementing security with JWT.
* Scaling the application using Docker and Kubernetes.

## 🤝 Contributing

Feel free to open an issue or submit a pull request for any improvements.

## 📜 License

This project is licensed under the MIT License.
