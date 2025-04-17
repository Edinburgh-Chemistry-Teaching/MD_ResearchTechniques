---
title: 'Course Materials for an Introduction to Computational Chemistry Techniques'
tags:
  - chemistry
  - molecular dynamics
  - postgraduate
authors:
  - name: Sarah Victoria Stewart
    orcid: 0000-0003-1663-5206
    affiliation: "1, 2"
  - name: Valentina Erastova
    orcid: 0000-0002-6747-3297
    affiliation: "1, 2"
  - name: Hannah Pollak
    orcid: 0000-0003-1011-8478
    affiliation: 1
  - name: Audrey Ngambia
    orcid: 0000-0003-1951-8742
    affiliation: 1
  - name: Tim Spankie
    orcid: 0000-0001-5123-7049
    affiliation: 1
  - name: Angela Chitzanidi
    affiliation: 3
affiliations:
  - name: School of Chemistry, University of Edinburgh, Joseph Black Building, David Brewster Road, Edinburgh EH9 3FJ, United Kingdom
    index: 1
  - name: UK Centre for Astrobiology, School of Physics and Astronomy, University of Edinburgh, James Clerk Maxwell Building, Peter Guthrie Tait Road, Edinburgh EH9 3FD, United Kingdom
    index: 2
  - name:
    index: 3
date:  
bibliography: paper.bib

---

# Summary
*An Introduction to Computational Chemistry Techniques* is an open educational resource designed to teach postgraduate chemistry students the 
practical aspects of molecular dynamics (MD) simulations. 
Aimed at students with no prior experience in programming or computational chemistry, this module is delivered over a series of three 3-hour 
workshops 
in a 
computer-lab setting, with a fourth session dedicated to individual projects.

The course introduces foundational concepts in Unix command-line navigation, the use of GROMACS for MD simulations, and accessing high-performance computing (HPC) systems.
Students work through materials at their own pace, supported by demonstrators, with all content delivered via HTML-based guides and open-source tools.
By sharing this resource, hosted on [GitHub](https://github.com/Edinburgh-Chemistry-Teaching/MD_ResearchTechniques), we aim to promote the reuse 
and adaptation of accessible, computation-rich learning materials in chemistry education worldwide. 


# Statement of Need

Computational techniques have become an integral part of modern chemical research, enabling simulation of chemical systems and prediction of 
molecular properties with high precision. Molecular dynamics (MD), in particular, allows researchers to investigate complex system, such as large protein complexes, biological membranes, interactions of molecules and materials at the interface, and processes in space or in extreme conditions.

[//]: # (Does this ^ need a citation?)

These methods have had a positive impact on society by accelerating the development of new drugs, materials, and technologies.

Despite its growing importance, many chemistry curricula lack hands-on training in computational techniques.`[@dahl2020]` Without foundational 
knowledge in tools like Linux, high-performance computing (HPC), and simulation software such as GROMACS, students may struggle to access or interpret computational literature and methods relevant to their research. This module addresses that gap by 
introducing practical MD simulation skills in a structured and accessible format, empowering students to perform computational tasks of their own. 
TBy sharing our resources openly, our goal is to facilitate educators globally, allowing them to adopt or adapt it, 
fostering computationally-enabled teaching and learning in chemistry and related fields.



# Content and Instructional Design

The course comprises three 3-hour long workshops, each beginning with a short lecture (slides shared via GitHub) to contextualize the material. A final 3-hour session is used to introduce individual projects to the student and to allow them to get started on these.
The material is designed for taught postgraduate masters students taking degrees in Materials Chemistry, Analytical Chemistry, and Medicinal and Biological Chemistry, and so the content for the third workshop is adjusted to suit these diverse backgrounds.


## Learning objectives

The course aims to equip students with practical molecular dynamics simulation skills such as: 
- Using basic command-line interfaces.
- Navigating and utilizing high-performance computing resources.
- Preparing, running, and troubleshooting molecular dynamics simulations using GROMACS.
- Recognizing the limitations of computational chemistry methods.
- Understanding the limitations of the computational chemistry techniques used.
- Applying these skills independently to real research systems.


## Session 1 
The first session is an "Introduction to Linux and command-line". 
This workshop is based on material Copyright © Software Carpentry ("The Unix 
Shell", "Using Shell with HPC" and "Introduction to HPC").

[//]: # (need to cite)

A lecture at the beginning of the workshop introduces the course and provides an overview 
of computational techniques in chemistry. This is followed by a walkthrough of connecting to the virtual machines used to run the course (details in the Computational Resources section). 

The hands-on portion of the workshop is divided into seven parts, with three required to complete the later workshops. The exercises in six parts 
introduce the Unix shell and simple Bash commands—such as navigating directories, manipulating files, and writing scripts. Unlike the Software 
Carpentry model, we teach Vim as the text editor due to its advanced functionality (such as quickly navigating through files). The seventh part 
introduces high-performance computing, focusing on how to interact with the University of Edinburgh's Eddie compute cluster, which the students 
will use in subsequent sessions.

[//]: # (Do we need to cite Eddie here?)


## Session 2
The second session is an "Introduction to molecular dynamics simulations". 
This workshop is adapted from a GROMACS tutorial by Cathrine Bergh, Maryam Majdolhosseini and Alessandra Villa.

[//]: # (need to cite)

A short lecture at the start introduces theoretical background topics in molecular simulations, such as force fields, thermodynamic 
ensembles, and typical system requirements. 

The hands-on component walks students through the three main aspects of practical molecular simulation via a simple protein. This includes 
pre-processing input files, running energy minimization, and equilibrating the system. Students visualise the resulting trajectories using VMD and 
analyse 
the outputs using in-build GROMACS commands and Xmgrace.

[//]: # (cite VMD, GROMACS and Xmgrace)


## Session 3
The third session builds upon the skills developed in session 2, to perform advanced simulations that are domain-specific to the masters programs. 

Medicinal and Biological Chemistry students simulate a small protein–ligand system, focusing on aspects such as structural integrity and dynamics.

[//]: # (needs more info)


Materials Chemistry and Analytical Chemistry students simulate a clay–organic interface, exploring interactions at the mineral surface and 
  solvation 
 environment.

[//]: # (needs more info)


## Session 4 
The final session introduces the individual projects and guides students in getting started on their independent simulations and final reports.
A short presentation outlines the assessment criteria, expectations for scientific writing, and project submission timelines. Additionally, 
students are also introduced to Overleaf for scientific writing in LaTeX, and example templates are provided for structuring the final mini-paper report. The remainder of the session is used for hands-on progress toward simulation setup and writing.

[//]: # (do we need to cite latex and overleaf?)



## Assessment
The module was originally created as part of a postgraduate Research Techniques course at the University of Edinburgh, which aimed to teach students practical aspects of chemistry. 
The module contributes 40% of the total grade for the course. 
The module was assessed in two ways.
Overall comprehension of the first two sessions is assessed based on multiple choice quizzes, accessing the general understanding of the material.

[//]: # (shall we give example?)

Students are provided a formative quiz to make sure they are familiar with how to operate the quiz and what type of knowledge is expected, when 
scoring over 80% they can access the summative quiz.
Secondly, the students are tasked with completing an individual project building off of what they learn in session 3 and writing a short report on it.

[//]: # (this is done via the projects that are written in a form of a mini-paper. the focus is on accessing XXXXX)


## Computational Resources
To facilitate give students access to a Linux machine for the course, each student was given access to a virtual machine, created using the 
University of Edinburgh’s Research Cloud Computing Service, Eleanor, which has been deployed on the OpenStack cloud computing platform.`[@ecdf]`
The machines were launched from an Ubuntu 22.04.3 LTS with Xfce Desktop Environment image, which has been saved to be re-used for future instances of the course.
Each virtual machine was provisioned with 4 virtual CPU cores, 8GB of RAM and 80GB of local disk. These resources could easily be increased using the OpenStack platform if required. Network storage was also mounted on each machine to enable access to the course materials and the transfer of outputs off the machine.
Local accounts with randomly generated passwords were created for the students on the machines. Each student accessed their assigned machine through Remote Desktop using their assigned username and password.

The resource-heavy simulations (i.e. equilibration and production runs) were performed on NVIDIA A100 20GB Multi Instance GPUs (MIGs) on the 
University of Edinburgh’s Research Compute Cluster, Eddie.`[@ecdf]`
The Eddie compute cluster uses the Altair Grid Engine Scheduler and the Rocky Linux 9 operating system. 
To enable shorter queuing times for the students, 10 MIGs were ringfenced for them for the duration of the course. The ringfenced MIGs were on a single compute node with 64 CPU cores and 768GB of system RAM. 
On Eddie, each student had access to a 2TB scratch area where they could perform the simulations.


# Reuse, implementation and modification
The complete course is available on GitHub under an open license. Course slides, shell scripts, tutorials, and example data are all 
included. Implementation of this course requires a computer lab with unix, GROMACS and HPC access, though local adaptations (e.g., using desktop 
simulations) are feasible.

[//]: # (We have been using this material for ur BSc students to get them started on sims)




# Conclusion
This module enables postgraduate students to gain practical skills in computational chemistry with an emphasis on reproducibility and open science. It is particularly suited to courses seeking to integrate computational methods with experimental and theoretical chemistry.

For those interested in learning more about simulating clay surfaces, we have also created a [workshop](https://github.
com/Erastova-group/ClayCode-workshop) for the ClayCode software. `[pollak2024]`



# Acknowledgements
We thank the demonstrators who supported student learning and Rosa Brauer for feedback on the instructional materials. This work builds on 
contributions from Software Carpentry and GROMACS community tutorials. 

[//]: # (Should we name the demonstrators?)


# References
