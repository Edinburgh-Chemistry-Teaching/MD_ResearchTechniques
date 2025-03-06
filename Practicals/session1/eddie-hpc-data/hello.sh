#!/bin/bash

# Hello Word program
HW="Hello World!"
 
# Get info from the system:
myname="$(whoami)" 
now="$(date)"
computer_name="$(hostname)"

# Print it out the variables:
echo "$HW"
echo "I am: $myname"
echo "It is now: $now"
echo "I am using: $computer_name"
echo ""