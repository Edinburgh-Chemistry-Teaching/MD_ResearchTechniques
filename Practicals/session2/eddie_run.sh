#!/bin/bash
# Name the job
#$ -N simulation_run

# Set the current working directory
#$ -cwd

# Request the gpu queue
#$ -q gpu
#$ -l gpu=1

# Request one GPU on the gpu-a100 parallel environment
#$ -pe sharedmem 1

# Request 16 GB system RAM
# the total system RAM available to the job is the value specified here multiplied by  the number of requested GPUs (above)
#$ -l h_vmem=16G

# Combine standard output and error files into a single job file with job ID
#$ -j y

# Initialise the environment modules and load CUDA and Gromacs
export CUDA_VISIBLE_DEVICES=$SGE_HGR_gpu
. /etc/profile.d/modules.sh
module load gromacs/2024.4

# Add your commands here
gmx grompp # add your options here
gmx mdrun # add your options here

# End of script
