FROM openjdk:17-jdk-slim
WORKDIR /app
COPY . /app
RUN javac -d out $(find src -name "*.java")
EXPOSE 8081
CMD ["java", "-cp", "out", "main.java.server.WebSocketServer"]
