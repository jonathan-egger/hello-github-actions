#!/bin/sh -l
sh -c "echo Hello world my name is $INPUT_MY_NAME"
java -cp /app/jbossdeployer-0.1.0-jar-with-dependencies.jar com.microsoft.alm.Driver
