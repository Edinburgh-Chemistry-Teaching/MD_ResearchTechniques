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
  - name: Hannah Pollak
    orcid: 0000-0003-1011-8478
    affiliation: 1
  - name: Tim Spankie
    orcid: 0000-0001-5123-7049
    affiliation: 1
  - name: Audrey Ngambia
    orcid: 0000-0003-1951-8742
    affiliation: 1
  - name: Angela Chitzanidi
    affiliation: 3
  - name: Valentina Erastova
    orcid: 0000-0002-6747-3297
    affiliation: "1, 2"
affiliations:
  - name: School of Chemistry, University of Edinburgh, Joseph Black Building, David Brewster Road, Edinburgh EH9 3FJ, United Kingdom
    index: 1
  - name: UK Centre for Astrobiology, School of Physics and Astronomy, University of Edinburgh, James Clerk Maxwell Building, Peter Guthrie Tait Road, Edinburgh EH9 3FD, United Kingdom
    index: 2
  - name:
    index: 3
date:  16 April 2025
bibliography: paper.bib

---

# Summary
*An Introduction to Computational Chemistry Techniques* is an open educational resource originally developed for postgraduate taught masters chemistry students to introduce the practical aspects of molecular dynamics (MD) simulations. 
Aimed at students with no prior experience in programming or computational chemistry, this module is delivered over a month as a series of three 3-hour workshops in a computer-lab setting, with a fourth session dedicated to individual projects.

The module introduces foundational concepts in Unix command-line navigation, GROMACS for MD simulations, and accessing high-performance computing (HPC) systems.
Students work through materials at their own pace, supported by demonstrators, with all content delivered via HTML-based guides and open-source tools.
Hosted on [GitHub](https://github.com/Edinburgh-Chemistry-Teaching/MD_ResearchTechniques), this resource promotes the reuse and adaptation of accessible, computation-rich learning materials in chemistry education worldwide.

# Statement of Need
 
Computational techniques are integral to modern chemical research, enabling precise simulation of chemical systems and prediction of molecular properties.
Molecular dynamics (MD) facilitates the study of complex systems, such as protein complexes, biological membranes, and material interfaces, accelerating advancements in drugs, materials, and technologies. 
Despite its importance, many chemistry curricula still lack hands-on computational training [@dahl2020]. 
Without foundational skills in Linux, high-performance computing (HPC), and simulation software like GROMACS, postgraduate chemistry students may struggle to engage with computational literature or methods.
This module addresses this gap by providing practical MD simulation training in an accessible format, empowering students to perform computational research independently. 
By sharing these resources openly, we aim to support global educators in adopting or adapting computationally-enabled teaching in chemistry and related fields.

# Content and Instructional Design

The course comprises three 3-hour-long workshops, each beginning with a short lecture (slides shared via GitHub) to contextualise the material.
A final 3-hour session is used to introduce individual projects to the students and to allow them to get started on these. (We are not sharing the individual project materials.)
The course is designed for taught postgraduate masters students taking degrees in Materials Chemistry, Analytical Chemistry, and Medicinal and Biological Chemistry, and so the content for the third workshop and individual projects is adjusted to suit these diverse backgrounds.



## Learning objectives
The course aims to equip students with the practical skills necessary to perform meaningful molecular dynamics simulations, including: 
- Using basic command-line interfaces;
- Navigating and utilising high-performance computing resources;
- Preparing, running, and troubleshooting molecular dynamics simulations using GROMACS software;
- Recognising the limitations of computational chemistry methods;
- Understanding the limitations of the computational chemistry techniques used; 
- Applying these skills independently to real research systems.



## Session 1 
The first session is an *"Introduction to Linux and command-line"*. 
This workshop is primarily based on material Copyright © Software Carpentry ("The Unix Shell",[@unix_shell] "Using Shell with HPC",[@hpc_shell] and "Introduction to HPC"[@hpc_intro]).
At the start of the workshop, a lecture introduces the course, the motivation, as well as explaining the nature of independent learning and setting up the assessment deadlines. 
The lecture also overviews computational techniques in chemistry, detailing when each may be beneficial.
This is followed by a walkthrough on how to connect to the virtual machines used to run the course (details in the Computational Resources section). 

The hands-on portion of the workshop is divided into seven parts, with the first three required to complete the later workshops. 
The exercises in six parts introduce the Unix shell and simple Bash commands — such as navigating directories, manipulating files, and writing scripts. 
Unlike the Software Carpentry model, we teach Vim as the text editor due to its advanced functionality (such as quickly navigating through files).
The seventh part introduces high-performance computing, focusing on how to interact with the University of Edinburgh's Eddie compute cluster, which the students will use in subsequent sessions.

[//]: # (Do we need to cite Eddie here? - check on their website? or the website itself? i cannot find it though )


## Session 2
The second session, *"Introduction to molecular dynamics simulations"*, guides students through the process of running simple MD simulations using GROMACS. 
This workshop is adapted from a GROMACS tutorial by Cathrine Bergh, Maryam Majdolhosseini and Alessandra Villa.[@lysozyme]
A short lecture at the start of the session introduces theoretical background topics in molecular simulations, including the concepts of force fields, timesteps, thermodynamic ensembles (e.g., isothermal-isobaric and canonical), periodic boundary conditions, system preparation and resource requirements for simulation.

The practical component uses a lysozyme-in-water system to introduce students to key stages of a simulation workflow:

[//]: # (they chose their own system from a small sub-set)

- Pre-processing: Converting input files (e.g., PDB structures) into GROMACS-compatible formats, generating topologies, and defining the simulation box, and adding solvent and ions.
- Simulation Execution: Performing energy minimisation followed by equilibration in the canonical (NVT) and isothermal-isobaric (NPT) ensembles.
- Post-processing and Analysis: Using built-in GROMACS tools to extract thermodynamic quantities (e.g., temperature, pressure, potential energy), trajectory information, and structural properties such as root mean square deviation (RMSD) and radius of gyration.

Students visualise the structure and dynamics using VMD[@vmd] and analyse the data using Xmgrace.[@xmgrace] Students are prompted to think critically about their simulation results, discussing them with demonstrators.


## Session 3
The third session builds upon the skills developed in Session 2, to perform advanced simulations that are domain-specific to the three masters programs. 


For Medicinal and Biological Chemistry students, this session applies molecular dynamics to a biologically relevant protein–ligand system. 
Students prepare a protein structure, solvate it, add ions, and parameterise a ligand using external tools.[??NAME??] 
They perform energy minimisation, equilibration, and production runs using GROMACS, focusing on system stability and ligand binding.
The session addresses real-world research considerations, such as handling incomplete PDB files, selecting suitable force fields, and interpreting RMSD and interaction metrics from trajectories.


[//]: # (Medicinal and Biological Chemistry students simulate a small protein–ligand system, focusing on aspects such as structural integrity and dynamics. Building up to the previous session, this session emphasizes real-world research considerations such as handling incomplete PDB files)

[//]: # (The third session builds directly on skills developed in Session 2 by applying molecular dynamics techniques to a biologically relevant protein–ligand system. Students prepare a protein structure, solvate it, add ions, and parameterize a ligand using external tools. They then perform energy minimization, equilibration, and production runs using GROMACS, with a focus on assessing system stability and ligand binding. The session emphasizes real-world research considerations such as handling incomplete PDB files, choosing suitable force fields, and interpreting RMSD and interaction metrics from the trajectories.)


For Materials Chemistry and Analytical Chemistry students, the focus of the session is on simulating a clay–organic interface, relevant to materials and environmental sciences. 
A short lecture introduces layered minerals, interfacial interactions, and their applications in catalysis, environmental remediation, and nanotechnology.
Students prepare a hydrated clay system containing organic guest molecules, building on skills from Session 2. 
Hands-on tasks include setting up a 2D layered system across the periodic boundary, modifying topology files, and ensuring simulation stability. 
Students visualise structures using VMD and analyse layer spacing, molecular diffusion, and guest–host interactions with GROMACS tools. 
The session emphasises real-world challenges, such as selecting appropriate force fields and interpreting interfacial dynamics.


[//]: # (Materials Chemistry and Analytical Chemistry students simulate a clay–organic interface, exploring interactions at the mineral surface and  solvation environment.)

[//]: # (The third session focuses on applying molecular dynamics simulations to a layered clay–organic system, offering an example relevant to materials or environmental chemistry. After a brief lecture on modeling layered minerals and interfacial interactions, students prepare and simulate a hydrated clay system containing organic guest molecules.)

[//]: # (The hands-on tasks build on skills developed in previous sessions, with added complexity such as setting up periodic systems, modifying topology files for nonstandard molecules, and managing simulation stability. Students visualize structures in VMD and use GROMACS for analysis of layer spacing, molecular diffusion, and guest–host interactions.)


## Session 4 
The final session introduces the individual projects and guides students in getting started on their independent simulations and final reports.
A short presentation outlines the assessment criteria, tips for scientific writing, provides an example report, highlights expectations for the project, and provides templates and submission deadlines. 
Additionally, students are introduced to Overleaf (https://www.overleaf.com) for scientific writing in LaTeX, and example templates are provided for structuring the final mini-paper report.
The remainder of the session is used for hands-on progress toward simulation setup and writing.

Please note that we are unable to share the materials for the individual projects, since those are part of the formative assessment. Instead, we are including a simplified HTML page linking the templates and an example report. 

[//]: # (May be we can make a simple page where we just ink the info and templates. then just state that we are not distro the actual assessment materials. - yes)

[//]: # (do we need to cite latex and overleaf? - yes if possible)

[//]: # (share the example report? add templates into the folder on git?)


## Assessment
The module was created as part of a postgraduate Research Techniques course at the University of Edinburgh, which aimed to teach postgraduate taught masters students practical aspects of chemistry. 
The module contributes 40% of the total grade for the course. 
The module was assessed in two ways.
Overall comprehension of the first two sessions is assessed based on multiple-choice quizzes, each quiz being 5% of the module. **is that correct? 5% or the corse or module?**

The quiz is run through **myED blackboard ... <-- whatever is that interface called.** 
Students are provided a formative quiz to familiarise with how to operate the quiz and what type of knowledge is expected. When scoring over 80% they can access the summative quiz. The summative quiz can only be attempted once.
We share the formative quizzes within GitHub materials. 

[//]: # (shall we give example? - YES - can do the practice quiz?)


The largest part of the assessment (30% of the course mark) is based upon individual projects. The projects build upon what students have learned in Session 3, allowing them to set up their individual simulation systems, analyse them and produce a short report in the form of a mini-paper. 
We are looking for a concise presentation of the system, quality methodology and appealing visuals in the results section. 

The report is structured as follows:
- abstract 
- intro
- methods
- ...

The report is made to be concise, and the marking scheme rewards ability to condense the information ... I DUNNO >>> SOMETHING>>>>
 
The project assesses students' ability to independently design, execute, and analyse an MD simulation relevant to their degree program. 



## Computational Resources

Each student was given an access to an individual Linux virtual machine, created using the University of Edinburgh’s Research Cloud Computing Service, Eleanor, deployed on the OpenStack platform [@ecdf]. 
The machines were launched from an Ubuntu 22.04.3 LTS with Xfce Desktop Environment image, which has been saved to be re-used for future instances of the course. 
The machines had GROMACS 2024.4, VMD 1.9.4 and Xmgrace 5.1.25 software installed. 
Network storage was also mounted on each machine to enable access to the course materials and the transfer of outputs off the machine.
Provisioned with 4 virtual CPU cores, 8GB RAM, and 80GB disk, these resources can easily be increased if required.
Local accounts with randomly generated passwords were created for the students on the machines. Each student accessed their assigned machine through Remote Desktop using their assigned username and password.

The resource-heavy simulations (i.e., equilibration and production runs) were performed on NVIDIA A100 20GB Multi Instance GPUs (MIGs) on the University of Edinburgh’s Research Compute Cluster, Eddie.[@ecdf]
The Eddie compute cluster uses the Altair Grid Engine Scheduler and the Rocky Linux 9 operating system. 
To enable shorter queuing times for the students, 10 MIGs were ringfenced for them for the duration of the course. 
The ringfenced MIGs were on a single compute node with 64 CPU cores and 768GB of system RAM. 
On Eddie, each student had access to a 2TB scratch area where they could perform the simulations, and used GROMACS 2024.4 with GPU support and Xmgrace 5.1.25 software.

[//]: # (do we need to re-cite gromacs, vmd and xmgrace? - yes on the first instance in this section)  





# Reuse, implementation and modification

The complete course is available on [GitHub](https://github.com/Edinburgh-Chemistry-Teaching/MD_ResearchTechniques) under an open license - **WHAT TYPE?**. 
Course slides, shell scripts, tutorials, and example data are all included. 
Implementation requires a computer lab with Unix, GROMACS, and HPC access, though adaptations for local desktops or cloud platforms (e.g., Google Colab) are feasible. 
The materials have been successfully adapted for undergraduate chemistry students joining our group to introduce MD simulations.



# Conclusion
This module equips postgraduate students with practical computational chemistry skills, emphasising reproducibility and open science. 
It is particularly suited to courses seeking to integrate practical computational methods skills with experimental and theoretical chemistry teaching.

For those interested in learning more about simulating clay surfaces, we have also developed a [workshop](https://github.com/Erastova-group/ClayCode-workshop) introducing the use of ClayCode[pollak2024] software for set-up and simulation of realistic clay mineral systems.


# Acknowledgements
We thank the demonstrators who supported student learning and Rosa Brauer for feedback on the instructional materials. This work builds on contributions from Software Carpentry and GROMACS community tutorials. 

[//]: # (Should we name the demonstrators? - yes we can if they are ok with it)


# References
