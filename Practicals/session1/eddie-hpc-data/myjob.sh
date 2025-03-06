#!/bin/sh
# Grid Engine options (lines prefixed with #$)
#  job name: -N
#$ -N hello  
#  use the current working directory: -cwd            
#$ -cwd 
#  runtime limit of 5 minutes: -l h_rt                 
#$ -l h_rt=00:05:00 
#  memory limit of 1 Gbyte: -l h_vmem
#$ -l h_vmem=1G


# Run the program
sleep 5m
bash hello.sh 
