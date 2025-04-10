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
    orcid:
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

 - should be max 1000 words

 - Describe the submission, and explain its eligibility for JOSE.
 - Include a “Statement of Need” section, explaining how the submitted artifacts contribute to computationally enabled teaching and learning, and describing how they might be adopted by others.
 - Describe the learning objectives, content, instructional design, and experience of use in teaching and learning situations.
 - Tell us the “story” of the project: how did it come to be?
 - Cite key references, including a link to the open archive of the software or the learning module.

# Summary
An Introduction to Computational Chemistry Techniques is an open educational resource designed to teach postgraduate chemistry students the practical aspects of molecular dynamics simulations. 
Targeted at students with no prior programming or computational chemistry experience, this module is delivered over three 3-hour workshops in a computer-lab setting.
This course introduces Unix command-line basics, the use of GROMACS for MD simulations, and running simulations on high-performance computing (HPC) systems.
Students work through materials at their own pace, supported by demonstrators, with all resources available as HTML guides.
With this paper we share the course materials (https://github.com/Edinburgh-Chemistry-Teaching/MD_ResearchTechniques) providing open, accessible and reusable teaching materials to assist in delivering core training in computational chemistry.


# Statement of Need
[//]: # (taken from course overview)

Computational techniques have become an integral part of research, contributing to scientific discovery. 
The use of computational techniques in chemistry has made it possible to simulate chemical reactions and predict properties of molecules with a high degree of accuracy.
Additionally, molecular simulations have made it possible to study complex systems that are difficult, if not impossible, to study experimentally, such as large protein complexes, biological membranes, interactions of molecules and materials at the interface, and processes in space or in extreme conditions.
These methods have had a positive impact on society by accelerating the development of new drugs, materials, and technologies.
Therefore, it is essential for students to have a solid understanding of computational techniques and their applications in modern scientific 
methods. 
This module focuses on molecular dynamics simulations, one of the most commonly used methodologies in current research, introducing the practical skills necessary to be able to perform the simulations using modern computational resources and softwares.
Our goal is to facilitate educators globally by sharing this material allowing them to adopt or adapt it, fostering computationally-enabled teaching and learning in chemistry and related fields.

[//]: # (we need to cite smth)




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
The first session is an "Introduction to Linux and command-line". This workshop is based on material Copyright © Software Carpentry ("The Unix 
Shell", "Using Shell with HPC" and "Introduction to HPC"). A lecture at the beginning of the workshop introduces the course and give an overview 
of computational techniques. This is followed by a walk-through of connecting to the virtual machines that we used to run the course (details 
given below). The material is divided into 7 parts, with only 3 required to complete the other workshops. Six parts are designed to 
introduce the shell and simple BASH commands, such as navigating around directories and writing files. Unlike the Software Carpentry lessons, we 
decided to use Vim as the text-editor taught due to its advanced functionality (such as quickly navigating through files). The other part 
introduces high-performance computing and how to use the University of Edinburgh's Research Compute Cluster, Eddie.


and high-performance computing, which the students will 
use to complete the other workshops.

need to check the specific learning objectives for each session

- Students learn Unix basic commands
- how to write the files 
- some info about the material covered in the lecture (for each session)



## Session 2
- learning first steps of gromacs + vmd + xmgrace 
- there is also a citation for this material, that we adapt
- performing simulations on hpc


## Session 3
- for medbio - protein thing
- for others clay system


## Session 4 
Intro to the projects, learnign Latex/overleaf. help to get started with the projects. The projects are ... 


## Assessment
The module was originally created as part of a postgraduate Research Techniques course at the University of Edinburgh, which aimed to teach students practical aspects of chemistry. 
The module contributes 40% of the total grade for the course. 
The module was assessed in two ways.
Overall comprehension of the first two sessions is assessed based on multiple choice quizzes, accessing the general understanding of the material (shall we give example?)
Students are provided a trial quiz to make sure they are familiar with how to operate the quiz and what type of knowledge is expected. when scoring over 80% they can access to the summative.
Secondly, the students are tasked with completing an individual project building off of what they learn in session 3 and writing a short report on it.
this is done via the projects that are written in a form of a mini-paper. the focus is on accessing XXXXX


## Virtual Machines 

Discuss set up of VMs and access to Linux machines through it + simulations on Eddie HPC

Implementation requires a computer lab with GROMACS and HPC access, though local adaptations (e.g., using desktop simulations) are feasible.



# Reuse, implementation and modification
The GitHub repository provides all materials—scripts, slides, and tutorials—under an open license, enabling educators to adopt the module as-is or modify it. 

We have been using this material for ur BSc students to get them started on sims




# Conclusion
- also add the claycode w/sh for those who want to learn more



# Acknowledgements
demos, Rosa for feedback 



# Citations

Citations to entries in paper.bib should be in
[rMarkdown](http://rmarkdown.rstudio.com/authoring_bibliographies_and_citations.html)
format.

For a quick reference, the following citation commands can be used:
- `@author:2001`  ->  "Author et al. (2001)"
- `[@author:2001]` -> "(Author et al., 2001)"
- `[@author1:2001; @author2:2001]` -> "(Author1 et al., 2001; Author2 et al., 2002)"

# Figures

Figures can be included like this: ![Example figure.](figure.png)



# References
