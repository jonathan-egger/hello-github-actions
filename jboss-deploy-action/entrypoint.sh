#!/bin/sh -l
sh -c "echo Hello world my name is $INPUT_MY_NAME"
pwd
ls
ls -l /app
java -cp /app/jbossdeployer.jar com.microsoft.alm.Driver -s http-remoting://vrdldap96944.rjf.com:29990 -u admin -p admin123 
