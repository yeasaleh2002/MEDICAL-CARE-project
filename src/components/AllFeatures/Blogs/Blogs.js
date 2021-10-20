import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container">
            <h1 className=" text-center p-4"> <Link className="text-decoration-none text-info" to="/blogs"> Blogs</Link></h1>


            <h3 className="text-info">Covid 19</h3>

            <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.   Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
            </p>
            <p>
            The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
            </p>
            <p>
            Whether or not they have symptoms, infected people can be contagious and the virus can spread from them to other people.Laboratory data suggests that infected people appear to be most infectious just before they develop symptoms (namely 2 days before they develop symptoms) and early in their illness. People who develop severe disease can be infectious for longer.While someone who never develops symptoms can pass the virus to others, it is still not clear how frequently this occurs and more research is needed in this area.
            </p>
            <p>
            What is the difference between people who are asymptomatic or pre-symptomatic? Don’t they both mean someone without symptoms? --- Both terms refer to people who do not have symptoms. The difference is that ‘asymptomatic’ refers to people who are infected but never develop any symptoms, while ‘pre-symptomatic’ refers to infected people who have not yet developed symptoms but go on to develop symptoms later. 
            </p>



            <h3 className="text-info">Anatomy</h3>

            <p>
            Anatomy (Greek anatomē, 'dissection') is the branch of biology concerned with the study of the structure of organisms and their parts.[1] Anatomy is a branch of natural science which deals with the structural organization of living things. It is an old science, having its beginnings in prehistoric times.[2] Anatomy is inherently tied to developmental biology, embryology, comparative anatomy, evolutionary biology, and phylogeny,[3] as these are the processes by which anatomy is generated, both over immediate and long-term timescales. Anatomy and physiology, which study the structure and function of organisms and their parts respectively, make a natural pair of related disciplines, and are often studied together. Human anatomy is one of the essential basic sciences that are applied in medicine           
            </p>
            <p>
            The discipline of anatomy is divided into macroscopic and microscopic. Macroscopic anatomy, or gross anatomy, is the examination of an animal's body parts using unaided eyesight. Gross anatomy also includes the branch of superficial anatomy. Microscopic anatomy involves the use of optical instruments in the study of the tissues of various structures, known as histology, and also in the study of cells.           
             </p>
            <p>
            The history of anatomy is characterized by a progressive understanding of the functions of the organs and structures of the human body. Methods have also improved dramatically, advancing from the examination of animals by dissection of carcasses and cadavers (corpses) to 20th century medical imaging techniques including X-ray, ultrasound, and magnetic resonance imaging.
             </p>
            <p>
            What is the difference between people who are asymptomatic or pre-symptomatic? Don’t they both mean someone without symptoms? --- Both terms refer to people who do not have symptoms. The difference is that ‘asymptomatic’ refers to people who are infected but never develop any symptoms, while ‘pre-symptomatic’ refers to infected people who have not yet developed symptoms but go on to develop symptoms later. 
            </p>
        </div>
    );
};

export default Blogs;

