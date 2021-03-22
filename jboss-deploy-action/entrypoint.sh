#!/bin/sh -l
sh -c "echo Hello world my name is $INPUT_MY_NAME"
pwd
ls
ls -l /app
java -cp /app/jbossdeployer.jar com.microsoft.alm.Driver
