FROM alpine/git
WORKDIR /app
RUN GIT_SSL_NO_VERIFY=true git clone https://github.com/microsoft/vsts-jboss-wildfly.git

FROM maven:3.5-jdk-8-alpine
WORKDIR /app
COPY --from=0 /app/vsts-jboss-wildfly/jbosslibs /app
ADD build-plugins-jar-with-dependencies.xml .
RUN awk '/<\/plugins>/ { system ("cat build-plugins-jar-with-dependencies.xml") } { print; } ' pom.xml > pom.xml.new && mv pom.xml pom.xml.orig && mv pom.xml.new pom.xml
RUN mvn -Dmaven.wagon.http.ssl.insecure=true clean package

FROM openjdk:8-alpine
COPY --from=1 /app/target/jbossdeployer-0.1.0-jar-with-dependencies.jar /app
WORKDIR /
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]